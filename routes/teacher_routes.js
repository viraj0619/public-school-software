var express = require("express");
var exe = require("./../connection");
var router = express.Router();


router.get("/teacher_register",function(req,res){
    res.render("teacher/register.ejs");
});

router.post("/save_teacher",async function(req,res){

    if(req.files.teacher_photo){
        var teacher_photo = new Date().getTime()+req.files.teacher_photo;
        req.files.teacher_photo.mv("public/teacher/uploads/"+teacher_photo);
    };

    // Upload teacher photo
const photoFilename = Date.now() + req.files.teacher_photo.name;
if (!req.files.teacher_photo.mv(`public/teacher/uploads/${photoFilename}`)) {
    return res.status(500).send("Error uploading teacher photo");
}
req.body.teacher_photo = photoFilename;

// Upload teacher signature
const signatureFilename = Date.now() + req.files.teacher_signatures.name;
if (!req.files.teacher_signatures.mv(`public/teacher/uploads/${signatureFilename}`)) {
    return res.status(500).send("Error uploading teacher signature");
}
req.body.teacher_signature = signatureFilename;


    var d = req.body;
    var sql = `INSERT INTO teacher_registration(teacher_name,teacher_phone,teacher_email,teacher_identity,teacher_class,teacher_subject,teacher_linkedin,teacher_birthday,teacher_gender,teacher_aboutus,teacher_password,teacher_address,teacher_photo,teacher_signatures,iAgree) VALUES 
    ('${d.teacher_name}','${d.teacher_phone}','${d.teacher_email}','${d.teacher_identity}','${d.teacher_class}','${d.teacher_subject}','${d.teacher_linkedin}','${d.teacher_birthday}','${d.teacher_gender}','${d.teacher_aboutus}','${d.teacher_password}','${d.teacher_address}','${photoFilename}','${signatureFilename}','${d.iAgree}')`;
    var data = await exe(sql);
    // res.send(req.body);
    res.render("teacher/login.ejs");
});

router.get("/login",function(req,res){

    // res.send(req.body);
    res.render("teacher/login.ejs");
});





router.post("/teacher_login",async function(req,res){

    var d = req.body;
    var sql = `SELECT * FROM teacher_registration WHERE teacher_identity = '${d.teacher_identity}' AND teacher_phone = '${d.teacher_phone}'`;
    var data = await exe(sql);
    if(data.length >0){
        req.session.teacher_id = data[0].teacher_id;
        res.redirect("/teacher");
    }
    else{
        res.send("login failed");
    }
    

    // res.send(req.body);
});

router.get("/logout",function(req,res){

    req.session.teacher_id = undefined;
    res.redirect("/teacher/login");
});

function verify_login(req, res, next) {
    if (req.session.teacher_id == undefined)
        res.redirect("/teacher/login");
    else {
        next();
    }
}

router.get("/profile",async function(req,res){

    var data =await exe(`SELECT * FROM teacher_registration WHERE teacher_id = '${req.session.teacher_id}'`);
    var obj = {"profile":data};
    res.render("teacher/profile.ejs",obj);
});

router.get("/",verify_login,function(req,res){
    res.render("teacher/home.ejs");
});

// router.get("/teacher_login",function(req,res){
//     res.send("Successfully Login");
// });

router.get("/student_presenty",async function(req,res){

    var data = await exe(`select count(*)  as count from std_admission where adm_approval = 'approved' `)
    var obj = {"data":data[0].count}
    res.render("teacher/student_presenty.ejs",obj)
});

router.get("/student_timetable",function(req,res){
    res.render("teacher/student_timetable.ejs")
});

module.exports = router;