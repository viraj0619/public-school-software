var express = require("express");
var router = express.Router();
var url = require("url");
var exe = require("../connection");
const passport = require("passport");
const mysql = require('mysql2/promise'); // Use promise-based MySQL client
const bcrypt = require('bcrypt'); // For password hashing
// var bodyparser = require("body-parser");
// router.use(bodyparser.urlencoded({exteded:true}));

router.get("/register", async function (req, res) {
    
    const social_info=await exe(`select * from social_links`);
    const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)

    const important_links_info=await exe(`select * from important_links`);

    const obj={"social_info":social_info[0],"important_links_info":important_links_info[0],"userName":userName};

    res.render("user/register.ejs",obj)
});

router.post("/save_user", async function (req, res) {
    const { std_username, std_mobile, std_email, std_confipassword, std_password } = req.body;

    // Simple validation checks
    const phonePattern = /^[0-9]{10}$/; // 10-digit phone number
    if (!phonePattern.test(std_mobile)) {
        return res.status(400).send("Invalid mobile number.");
    }

    if (std_password !== std_confipassword) {
        return res.status(400).send("Passwords do not match.");
    }

    try {
        // Check if user details already exist
        let query = `SELECT COUNT(*) AS count FROM student_registration WHERE std_mobile = ? OR std_email = ?`;
        let [result] = await exe(query, [std_mobile, std_email]);
        
        if (result.count > 0) {
            return res.status(400).send("User with the provided mobile number or email already exists.");
        }

        // Insert new user
        query = `INSERT INTO student_registration (std_username, std_mobile, std_email, std_confipassword, std_password) VALUES (?, ?, ?, ?, ?)`;
        await exe(query, [std_username, std_mobile, std_email, std_confipassword, std_password]);

        // res.redirect("/login");
        res.send(`<script>alert('Welcome to GreenLand School');location="/login"</script>`)

    } catch (error) {
        console.error("Error during user registration:", error);
        res.status(500).send("An error occurred during registration.");
    }
});



router.get("/login", async function (req, res) {

    var data = await exe(`SELECT * FROM student_registration`)
    const social_info=await exe(`select * from social_links`);
    const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)


    var obj = {"social_info":social_info[0],"data":data[0],"userName":userName}
    res.render("user/login.ejs",obj);
   
});

router.post("/save_login", async function (req, res) {

    var d = req.body;
    var sql = `SELECT * FROM student_registration WHERE std_mobile = '${d.std_mobile}' AND std_confipassword = 
    '${d.std_confipassword}'`;
    var data = await exe(sql);
    if (data.length > 0) {
        req.session.student_id = data[0].student_id;
        res.redirect("/");
        // res.send("Login Successfully");
    } else {
        res.send("<h1>Invaid Login Please try again</h1>")
    }
});

function verify_login(req, res, next) {
    // console.log(req.session.student_id )
    if (req.session.student_id == undefined)
        res.redirect("/login");
    else {
        next();
    }
}


router.get("/user_logout",function (req, res, next)  {
    if (req.session) {
      req.session.destroy(function (err) {
        if (err) {
          return next(err);
        } else {
          return res.redirect('/login');
        }
   });
}
});




// router.get("/",async function (req, res) {
//     const social_info=await exe(`select * from social_links`);
//     const important_links_info=await exe(`select * from important_links`);

//     const students_feedback_info=await exe(`select * from student_feedback`);
//     const hero_slider_info=await exe(`select * from hero_slider`);
//     const edu_manag_qty=await exe(`select * from education_management_qty`);
//     const youtube_link=await exe(`select * from youtube_links`);
//     const FAQ_data=await exe(`select * from FAQ_det`);
//     const contact_data = await exe(`select * from contact where contact_id=1`);
//     // const std_admi = await exe(`select * from student_registration where `)
//     const obj={"social_info":social_info[0],"important_links_info":important_links_info[0],"students_feedback_info":students_feedback_info[0],"hero_slider_info":hero_slider_info,"edu_manag_qty":edu_manag_qty[0],"youtube_link":youtube_link,"FAQ_data":FAQ_data,"contact_data":contact_data[0] , };
//     res.render("user/home.ejs",obj);

// });
router.get("/",async function (req, res) {
    const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)
    
    const social_info=await exe(`select * from social_links`);
    const important_links_info=await exe(`select * from important_links`);

    const students_feedback_info=await exe(`select * from student_feedback`);
    const hero_slider_info=await exe(`select * from hero_slider`);
    const edu_manag_qty=await exe(`select * from education_management_qty`);
    const youtube_link=await exe(`select * from youtube_links`);
    const FAQ_data=await exe(`select * from FAQ_det`);
    const contact_data = await exe(`select * from contact where contact_id=1`);
    // const std_admi = await exe(`select * from student_registration where `)
    const obj={"social_info":social_info[0],"important_links_info":important_links_info[0],"students_feedback_info":students_feedback_info[0],"hero_slider_info":hero_slider_info,"edu_manag_qty":edu_manag_qty[0],"youtube_link":youtube_link,"FAQ_data":FAQ_data,"contact_data":contact_data[0],"userName":userName};
    res.render("user/home.ejs",obj);

});

router.get("/about",async function(req,res){
    const social_info=await exe(`select * from social_links`);
    const important_links_info=await exe(`select * from important_links`);
    const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)

    const principal_info=await exe(`select * from principal_message`);
    const about_info=await exe(`select * from about_us`);
    const notic_info=await exe(`select * from notic_board`);
    const events_info=await exe(`select * from recent_events`)
    const teacher_info=await exe(`select * from teacher_info`);

    const obj={"principal_info":principal_info[0],"about_info":about_info[0],"notic_info":notic_info,"events_info":events_info,"teacher_info":teacher_info,"social_info":social_info[0],"important_links_info":important_links_info[0],"userName":userName};
    res.render("user/about.ejs",obj);
});

router.get('/event',async function(req,res){
    const social_info=await exe(`select * from social_links`);
    const important_links_info=await exe(`select * from important_links`);
    const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)

    const principal_info=await exe(`select * from principal_message`);
    const about_info=await exe(`select * from about_us`);
    const notic_info=await exe(`select * from notic_board`);
    const events_info=await exe(`select * from recent_events`)
    const teacher_info=await exe(`select * from teacher_info`);

    const obj={"principal_info":principal_info[0],"about_info":about_info[0],"notic_info":notic_info,"events_info":events_info,"teacher_info":teacher_info,"social_info":social_info[0],"important_links_info":important_links_info[0],"userName":userName};

    res.render("user/news_event.ejs",obj);
});

router.get("/thinking_based_learnin",async function(req,res){

    var data = await exe(`select * from card  `)
    const social_info=await exe(`select * from social_links`);
        const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)

    const important_links_info=await exe(`select * from important_links`);
    const obj={"social_info":social_info[0],"important_links_info":important_links_info[0],"card":data[0],userName:"userName"};
    res.render("user/thinking_based_learnin.ejs",obj);
});

router.get("/choose_the_right_stream",async function(req,res){
        var data = await exe(`select * from card `)
        const social_info=await exe(`select * from social_links`);
            const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)

    const important_links_info=await exe(`select * from important_links`);
    const obj={"social_info":social_info[0],"important_links_info":important_links_info[0],"card":data[1],userName:"userName"};
    res.render("user/choose_the_right_stream.ejs",obj);
});

router.get("/digital_based",async function(req,res){
    var data = await exe(`select * from card `)
    const social_info=await exe(`select * from social_links`);
        const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)

    const important_links_info=await exe(`select * from important_links`);
    const obj={userName:"userName","social_info":social_info[0],"important_links_info":important_links_info[0],"card":data[2]};
    res.render("user/digital_based.ejs",obj);
});

router.get("/gamification",async function(req,res){
    var data = await exe(`select * from card `)
    const social_info=await exe(`select * from social_links`);
        const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)

    const important_links_info=await exe(`select * from important_links`);
    const obj={userName:"userName","social_info":social_info[0],"important_links_info":important_links_info[0],"card":data[3]};
    res.render("user/gamification.ejs",obj);
});

router.get("/tipspractices",async function(req,res){
        var data = await exe(`select * from card `)
        const social_info=await exe(`select * from social_links`);
            const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)

    const important_links_info=await exe(`select * from important_links`);
    const obj={userName:"userName","social_info":social_info[0],"important_links_info":important_links_info[0],"card":data[4]};
    res.render("user/tipspractice.ejs",obj);
});

router.get("/practicebased",async function(req,res){
        var data = await exe(`select * from card  `)
        const social_info=await exe(`select * from social_links`);
            const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)

    const important_links_info=await exe(`select * from important_links`);
    const obj={userName:"userName","social_info":social_info[0],"important_links_info":important_links_info[0],"card":data[5]};
    res.render("user/problembased.ejs",obj);
});



router.get("/contact",async function(req,res){

    const social_info=await exe(`select * from social_links`);
    const important_links_info=await exe(`select * from important_links`);
    const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)

    const principal_info=await exe(`select * from principal_message`);
    const about_info=await exe(`select * from about_us`);
    const notic_info=await exe(`select * from notic_board`);
    const events_info=await exe(`select * from recent_events`)
    const teacher_info=await exe(`select * from teacher_info`);
    var data = await exe(`select * from contact where contact_id=1`);

    const obj={"principal_info":principal_info[0],"about_info":about_info[0],"notic_info":notic_info,"events_info":events_info,"teacher_info":teacher_info,"social_info":social_info[0],"important_links_info":important_links_info[0],"contacts":data[0],"userName":userName};
    
    res.render("user/contact.ejs",obj);
});

router.get("/admission",verify_login,async function(req,res){

    try {

        const userId = req.session.student_id;

    const admissionInfo = await exe(`SELECT * FROM std_admission WHERE student_id='${userId}'`);

    const social_info=await exe(`select * from social_links`);
    const important_links_info=await exe(`select * from important_links`);
    const userName=await exe(`select * from student_registration WHERE student_id='${req.session.student_id}';`)

    const principal_info=await exe(`select * from principal_message`);
    const about_info=await exe(`select * from about_us`);
    const notic_info=await exe(`select * from notic_board`);
    const events_info=await exe(`select * from recent_events`)
    const teacher_info=await exe(`select * from teacher_info`);
    var data = await exe(`select * from contact where contact_id=1`);
    const admissionDetails = await exe(`select * from std_admission where student_id='${userId}'`);


        // console.log(admissionDetails)
    const obj={"principal_info":principal_info[0],"about_info":about_info[0],"notic_info":notic_info,"events_info":events_info,"teacher_info":teacher_info,"social_info":social_info[0],"important_links_info":important_links_info[0],"contacts":data[0],"userName":userName,"admissionInfo": admissionInfo,"admissionDetails":admissionDetails };
    // res.render("user/admission.ejs",obj);
        
    const hasApprovedOrPending = admissionDetails.some(admission => admission.adm_approval === 'approved' || admission.adm_approval === 'pending');
    const allRejected = admissionDetails.every(admission => admission.adm_approval === 'reject');

    if (hasApprovedOrPending) {
        res.render("user/admission_details.ejs", obj);
    } else if (allRejected) {
        res.render("user/admission.ejs", obj);
    } else {
        res.render("user/admission.ejs", obj);
    }
} 
catch (error) {
    console.error("Error in /admission route: ", error);
    res.status(500).send("Internal Server Error");
}
    
    
    
    // console.log(req.session.student_id)
})

// router.post("/update_admission",async function(req,res){

    // var data = await exe(`CREATE TABLE  admission (admission_id INT PRIMARY KEY AUTO_INCREMENT,student_id int ,selected_class VARCHAR(100))`);
    
//  var data = await exe(`INSERT INTO admission(student_id, selected_class) 
//     VALUES ('${student_id}','${req.body.selected_class}')`);
//     res.send(data);

    // res.redirect("/update_admission2")
    

// console.log(data)
// })


router.post("/update_admission/:id", async function(req, res) {
    try {
        const userId = req.session.student_id;
        if (!userId) {
            return res.status(401).send("Unauthorized: No session found");
        }
        const social_info = await exe(`select * from social_links`);
        const important_links_info = await exe(`select * from important_links`);
        const userName = await exe(`SELECT * FROM student_registration WHERE student_id='${userId}'`);
        const alumini = await exe(`select * from alumini`);
        const principal_info = await exe(`select * from principal_message`);
        const about_info = await exe(`select * from about_us`);
        const notic_info = await exe(`select * from notic_board`);
        const events_info = await exe(`select * from recent_events`);
        const teacher_info = await exe(`select * from teacher_info`);
        const contact_data = await exe(`select * from contact where contact_id=1`);
        const student_info = await exe(`select * from student_registration WHERE student_id='${userId}'`);

        const id = req.params.id;

        const obj = {"principal_info": principal_info[0],"about_info": about_info[0],"notic_info": notic_info,"events_info": events_info,"teacher_info": teacher_info,"social_info": social_info[0],"important_links_info": important_links_info[0],"contacts": contact_data[0],"userName": userName,"alumini": alumini,"stud_class": id,"admission": student_info[0]
        };

        res.render("user/update_admission2.ejs", obj);
    } catch (error) {
        console.error("Error in /update_admission route: ", error);
        res.status(500).send("Internal Server Error");
    }
});

// router.post("/confirm_up_admission",async function(req,res){
// function formatAddress(address) {
// return address ? address.replace(/\r\n/g, ' ').trim() : '';
// }

// // Format the addresses in req.body
// if (req.body.adm_localaddress) {
// req.body.adm_localaddress = formatAddress(req.body.adm_localaddress);
// }
// if (req.body.adm_permentaddress) {
// req.body.adm_permentaddress = formatAddress(req.body.adm_permentaddress);
// }

// var admissionn = await exe(`select * from student_registration where student_registration.student_id `) 

//  var data = await exe(`create table std_admission( admission_no int primary key auto_increment, student_id int ,
//                         stud_class varchar(20) not null,admfull_name varchar(200) not null,admfull_mobile varchar(100) not null,
//                         admfull_email varchar(100),adm_localaddress varchar(200), adm_permentaddress varchar(200),adm_country varchar(50),
//                         adm_state varchar(50),adm_city varchar(50), adm_village varchar(50),adm_pincode varchar(50),gender varchar(50),
//                          adm_birth_date varchar(50), adm_birht_place varchar(50), adm_prev_class varchar(50),adm_lastyear_percent varchar(50) , adm_religion varchar(50), adm_cat_caste varchar(50), adm_caste varchar(50),
//                          adm_minority varchar(50),  foreign key (student_id)  references student_registration(student_id)
//  )`)
// var d = req.body;

//  var data = await exe(`insert into std_admission(student_id ,stud_class ,admfull_first,admfull_middle,admfull_last ,admfull_mobile ,admfull_email ,adm_localaddress,adm_permentaddress,adm_country,adm_state,adm_city,adm_village,adm_pincode,gender,adm_bloodg,adm_birth_date,adm_birht_place,adm_prev_class,adm_lastyear_percent,adm_religion,adm_cat_caste,adm_caste,adm_minority)values('${d.student_id}','${d.stud_class}','${d.admfull_first}','${d.admfull_middle}','${d.admfull_last}','${d.admfull_mobile}','${d.admfull_email}','${d.adm_localaddress}','${d.adm_permentaddress}','${d.adm_country}','${d.adm_state}','${d.adm_city}','${d.adm_village}','${d.adm_pincode}','${d.gender}','${d.adm_bloodg}','${d.adm_birth_date}','${d.adm_birht_place}','${d.adm_prev_class}','${d.adm_lastyear_percent}','${d.adm_religion}','${d.adm_cat_caste}','${d.adm_caste}','${d.adm_minority}')`)

// res.send(`<script>alert('Admission Form Submited Successfully...!');location="/admission"</script>`)
// })



router.get("/department",async function(req,res){
    
    
    const social_info=await exe(`select * from social_links`);
    const important_links_info=await exe(`select * from important_links`);
    const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)
    var data = await exe(`select * from alumini `)

    const principal_info=await exe(`select * from principal_message`);
    const about_info=await exe(`select * from about_us`);
    const notic_info=await exe(`select * from notic_board`);
    const events_info=await exe(`select * from recent_events`)
    const teacher_info=await exe(`select * from teacher_info`);
    var data = await exe(`select * from contact where contact_id=1`);
    var data = await exe(`select * from department `)

    const obj={"principal_info":principal_info[0],"about_info":about_info[0],"notic_info":notic_info,"events_info":events_info,"teacher_info":teacher_info,"social_info":social_info[0],"important_links_info":important_links_info[0],"contacts":data[0],"userName":userName,"alumini":data,"depart":data};

    res.render("user/department.ejs",obj);

});

router.get("/alumini",async function(req,res){

    const social_info=await exe(`select * from social_links`);
    const important_links_info=await exe(`select * from important_links`);
    const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)
    var data = await exe(`select * from alumini `)

    const principal_info=await exe(`select * from principal_message`);
    const about_info=await exe(`select * from about_us`);
    const notic_info=await exe(`select * from notic_board`);
    const events_info=await exe(`select * from recent_events`)
    const teacher_info=await exe(`select * from teacher_info`);
    var data = await exe(`select * from contact where contact_id=1`);

    const obj={"principal_info":principal_info[0],"about_info":about_info[0],"notic_info":notic_info,"events_info":events_info,"teacher_info":teacher_info,"social_info":social_info[0],"important_links_info":important_links_info[0],"contacts":data[0],"userName":userName,"alumini":data};
    
    res.render("user/alumini.ejs",obj);
});


router.get("/facility",async function(req,res){
    const social_info=await exe(`select * from social_links`);
    const important_links_info=await exe(`select * from important_links`);
    const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)

    const principal_info=await exe(`select * from principal_message`);
    const about_info=await exe(`select * from about_us`);
    const notic_info=await exe(`select * from notic_board`);
    const events_info=await exe(`select * from recent_events`)
    const teacher_info=await exe(`select * from teacher_info`);
    var data = await exe(`select * from contact where contact_id=1`);

    const obj={"principal_info":principal_info[0],"about_info":about_info[0],"notic_info":notic_info,"events_info":events_info,"teacher_info":teacher_info,"social_info":social_info[0],"important_links_info":important_links_info[0],"contacts":data[0],"userName":userName};
    res.render("user/facility.ejs",obj)
})


router.post("/contact_form",async function(req,res){
    var d = req.body
    var aa = new Date;
        var h = aa.getHours();
        var m = aa.getMinutes();
        var s = aa.getSeconds();
        var ap = h >= 12 ? ' PM' : ' AM';
    var today = new Date().toISOString().slice(0, 10).split("-").reverse().join("-") +" "+ h + ":" + m + ap;
    // res.send(req.body)
    // var data = await exe(`create table contactform(contactform_id int primary key auto_increment,name varchar(50),
    //     subject varchar(50),email varchar(50),mobile_no varchar(20),message text     )`);
  

    var data = await exe(`insert into contactform(name,subject,email,mobile_no,message,date)values('${d.name}','${d.subject}','${d.email}','${d.mobile_no}','${d.message}','${today}')`)

    res.send(`<script>alert('Thank you for contacting with us');location="/contact"</script>`)
});

router.post("/payment",async function(req,res){

    function formatAddress(address) {
        return address ? address.replace(/\r\n/g, ' ').trim() : '';
        }
        
        // Format the addresses in req.body
        if (req.body.adm_localaddress) {
        req.body.adm_localaddress = formatAddress(req.body.adm_localaddress);
        }
        if (req.body.adm_permentaddress) {
        req.body.adm_permentaddress = formatAddress(req.body.adm_permentaddress);
        }
        


    const {aca_year,student_id ,stud_class,admfull_first,admfull_middle,admfull_last ,admfull_mobile ,admfull_email ,admfull_aadhar_no,adm_localaddress,adm_permentaddress,adm_country,adm_state,adm_city,adm_village,adm_pincode,gender,adm_bloodg,adm_birth_date,adm_birht_place,adm_prev_class,adm_lastyear_percent,adm_religion,adm_cat_caste,adm_caste,adm_minority,adm_approval} = req.body;

    req.session.formdata = {aca_year,student_id ,stud_class,admfull_first,admfull_middle,admfull_last ,admfull_mobile ,admfull_email,admfull_aadhar_no,adm_localaddress,adm_permentaddress,adm_country,adm_state,adm_city,adm_village,adm_pincode,gender,adm_bloodg,adm_birth_date,adm_birht_place,adm_prev_class,adm_lastyear_percent,adm_religion,adm_cat_caste,adm_caste,adm_minority,adm_approval} 
    

    res.redirect("/payment_continue")
})

router.get("/payment_continue",async function(req,res){

    function formatAddress(address) {
        return address ? address.replace(/\r\n/g, ' ').trim() : '';
        }
        
        // Format the addresses in req.body
        if (req.body.adm_localaddress) {
        req.body.adm_localaddress = formatAddress(req.body.adm_localaddress);
        }
        if (req.body.adm_permentaddress) {
        req.body.adm_permentaddress = formatAddress(req.body.adm_permentaddress);
        }

    const formdata = req.session.formdata
    // console.log(formdata)
    const social_info=await exe(`select * from social_links`);
    const important_links_info=await exe(`select * from important_links`);
    const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)

    const principal_info=await exe(`select * from principal_message`);
    const about_info=await exe(`select * from about_us`);
    const notic_info=await exe(`select * from notic_board`);
    const events_info=await exe(`select * from recent_events`)
    const teacher_info=await exe(`select * from teacher_info`);
    var data = await exe(`select * from contact where contact_id=1`);

    const obj={"principal_info":principal_info[0],"about_info":about_info[0],"notic_info":notic_info,"events_info":events_info,"teacher_info":teacher_info,"social_info":social_info[0],"important_links_info":important_links_info[0],"contacts":data[0],"userName":userName,"formdata":formdata};

    res.render("user/payment_continue.ejs",obj)
})

router.post("/payment_process",async function(req,res){
    function formatAddress(address) {
        return address ? address.replace(/\r\n/g, ' ').trim() : '';
        }
        
        // Format the addresses in req.body
        if (req.body.adm_localaddress) {
        req.body.adm_localaddress = formatAddress(req.body.adm_localaddress);
        }
        if (req.body.adm_permentaddress) {
        req.body.adm_permentaddress = formatAddress(req.body.adm_permentaddress);
        }


        var d = req.body;

        var data = await exe(`insert into std_admission(aca_year,student_id ,stud_class,admfull_first,admfull_middle,admfull_last ,admfull_mobile ,admfull_email,admfull_aadhar_no,adm_localaddress,adm_permentaddress,adm_country,adm_state,adm_city,adm_village,adm_pincode,gender,adm_bloodg,adm_birth_date,adm_birht_place,adm_prev_class,adm_lastyear_percent,adm_religion,adm_cat_caste,adm_caste,adm_minority,payment_mode,dateTime,razorpay_payment_id,transactionDateTime,adm_approval)values('${d.aca_year}','${d.student_id}','${d.stud_class}','${d.admfull_first}','${d.admfull_middle}','${d.admfull_last}','${d.admfull_mobile}','${d.admfull_email}','${d.admfull_aadhar_no}','${d.adm_localaddress}','${d.adm_permentaddress}','${d.adm_country}','${d.adm_state}','${d.adm_city}','${d.adm_village}','${d.adm_pincode}','${d.gender}','${d.adm_bloodg}','${d.adm_birth_date}','${d.adm_birht_place}','${d.adm_prev_class}','${d.adm_lastyear_percent}','${d.adm_religion}','${d.adm_cat_caste}','${d.adm_caste}','${d.adm_minority}','${d.payment_mode}','${d.dateTime}','${d.razorpay_payment_id}','${d.transactionDateTime}','${d.adm_approval}')`)
       
       res.send(`<script>alert('Admission Form Submited Successfully...!');location="/admission"</script>`)
            // res.send(req.body)
  
})

    router.post('/razorpay/callback', async function(req, res) {
        const { razorpay_payment_id, transactionDateTime, ...hiddenData } = req.body;
      
        console.log({
          paymentId: razorpay_payment_id,
          transactionDateTime: transactionDateTime
        });
      
        console.log('Hidden Data:', hiddenData);

        res.send({ status: 'success' }); 

    })

    router.get("/student_monitor",async function(req,res){

        const social_info=await exe(`select * from social_links`);
    const important_links_info=await exe(`select * from important_links`);
    const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)

    const principal_info=await exe(`select * from principal_message`);
    const about_info=await exe(`select * from about_us`);
    const notic_info=await exe(`select * from notic_board`);
    const events_info=await exe(`select * from recent_events`)
    const teacher_info=await exe(`select * from teacher_info`);

    const obj={"principal_info":principal_info[0],"about_info":about_info[0],"notic_info":notic_info,"events_info":events_info,"teacher_info":teacher_info,"social_info":social_info[0],"important_links_info":important_links_info[0],"userName":userName};


        res.render("user/student_monitor.ejs",obj)
    })
      
   router.get("/text",(req,res)=>{
    res.render("user/text.ejs")

   });
   router.post("/test_data",(req,res)=>{
    res.send(req.body)
    const fi=req.files &req.files.file;
    console.log(fi)
   })

module.exports = router; 