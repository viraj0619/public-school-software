var express=require("express");
var exe=require("./../connection");
var router=express.Router();
    router.get("/",async function(res,res){
    res.render("parent/home.ejs");
});

router.get("/login",function(req,res){
    res.render("parent/login.ejs");
});

router.get("/register",function(req,res){
    res.render("parent/register.ejs");
});

router.post("/parent_register",async function(req,res){

    var d = req.body;
    var sql = `INSERT INTO parent_registration(parent_username,parent_mobile,parent_email,parent_std_identity,parent_password) VALUES
    ('${d.parent_username}','${d.parent_mobile}','${d.parent_email}','${d.parent_std_identity}','${d.parent_password}')`;
    var data = await exe(sql);
    // res.send(req.body);
    res.render("parent/login.ejs");
    // res.send(data);
});

router.post("/parent_login",async function(req,res){

    var d = req.body;
    var sql =`SELECT * FROM parent_registration WHERE parent_username = '${d.parent_username}' AND parent_mobile = '${d.parent_mobile}'`;
    var data = await exe(sql);
    if(data.length>0){
        req.session.parent_id=data[0].parent_id;
    }
    
    // res.send(req.body);
    res.redirect("/parent");
    // res.send("data is send");
});

router.get("/logout",function(req,res){
    req.session.parent_id = undefined;
    res.redirect("/parent/login");
})

router.get("/profile",function(req,res){

    res.render("parent/profile.ejs");
    // res.send("profile page is called");
});
module.exports=router;