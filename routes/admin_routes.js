var express = require("express");
var exe = require("./../connection");
var router = express.Router();
var url = require("url");

const { route } = require("./user_routes");
// about page ----

function admin_login(req, res, next) {
        // req.session.admin_register_id = 1
    if(req.session.admin_register_id  == undefined)
    res.redirect("/admin/login");
    else{
    next()
    }
}
router.get("/",admin_login,async function(res,res){
    
    res.render("admin/home.ejs");
});
router.post("/admin_login",async function(req,res){
    // res.send(req.body)
    const d = req.body;
    const sql = `SELECT * FROM admin_register WHERE admin_user_id  = '${d.admin_user_id}' AND admin_password = '${d.admin_password}'`;
    const data = await exe(sql);

    if (data.length > 0) {
        req.session.admin_register_id  = data[0].admin_register_id;
        res.redirect("/admin/")
    }
    else {
        res.redirect("/admin/login");
    }
})
router.get("/login",async function (req,res){
    
    const social_info=await exe(`select * from social_links`);
    const important_links_info=await exe(`select * from important_links`);
    const userName=await exe(`SELECT * FROM student_registration WHERE student_id='${req.session.student_id}';`)

    var data = await exe(`select * from contact where contact_id=1`);
    const obj={"social_info":social_info[0],"important_links_info":important_links_info[0],"userName":userName};
    
    res.render("admin/login.ejs",obj);
});

router.get("/add_principal_message",async function(req,res){
    const principal_info=await exe(`select * from principal_message`);
    const obj={"principal_info":principal_info[0]}
    res.render("admin/add_principal_message.ejs",obj);  
});

router.post("/update_principal_message",async function(req,res){
    // res.send(req.body)
    var d=req.body;
    if (req.files && req.files.principal_photo) {
        var principal_photo = new Date().getTime() + req.files.principal_photo.name;
        req.files.principal_photo.mv('public/admin/uploads/' + principal_photo);
        var data = await exe(`update principal_message set principal_photo='${principal_photo}' where principal_message_id ='1'`)
    }
    const data2 = await exe(`
    UPDATE principal_message 
    SET 
        principal_name='${d.principal_name}',
        principal_post='${d.principal_post}',
        principal_par1='${d.principal_par1}',
        principal_par2='${d.principal_par2}',
        principal_par3='${d.principal_par3}'
    WHERE 
        principal_message_id='1'
`);
res.redirect("/admin/add_principal_message");
});
router.get("/about_us",async function(req,res){
    const about_info=await exe(`select * from about_us`);
    const obj={"about_info":about_info[0]}
    res.render("admin/about_us.ejs",obj);
})



router.get("/teacher",async function(req,res){
    const teacher_info=await exe(`select * from teacher_info`);
    const obj={"teacher_info":teacher_info};
    res.render("admin/teacher.ejs",obj);
});
router.post("/add_teacher",async function(req,res){
    // res.send(req.body)
    const d=req.body;
    if(req.files.teacher_photo){
        var teacher_photo = new Date().getTime() + req.files.teacher_photo.name;
        req.files.teacher_photo.mv('public/admin/uploads/'+teacher_photo);
    }
    const sql = await exe(`insert into teacher_info (teacher_photo, teacher_name, teacher_qul, teacher_id, teacher_mobile, teacher_email) values ('${teacher_photo}', '${d.teacher_name}', '${d.teacher_qul}', '${d.teacher_id}', '${d.teacher_mobile}', '${d.teacher_email}')`);
    res.redirect("/admin/teacher");
});
router.get("/edit_teacher_info/:teacher_info_id",async function(req,res){
    const teacher_info=await exe(`select * from teacher_info`);
    const obj={"teacher_info":teacher_info};   
     res.render("admin/edit_teacher_info.ejs",obj);
});
router.post("/update_teacher",async function(req,res){
    const d=req.body;
    if (req.files && req.files.teacher_photo) {
        var teacher_photo = new Date().getTime() + req.files.teacher_photo.name;
        req.files.teacher_photo.mv('public/admin/uploads/' + teacher_photo);
        var data = await exe(`update teacher_info set teacher_photo='${teacher_photo}' where teacher_info_id ='${d.teacher_info_id}'`)
    }
    const data2 = await exe(`UPDATE teacher_info SET teacher_name='${d.teacher_name}',teacher_qul='${d.teacher_qul}',teacher_id='${d.teacher_id}',teacher_mobile='${d.teacher_mobile}',teacher_email='${d.teacher_email}' WHERE teacher_info_id ='${d.teacher_info_id}'`);
        // res.send(data2);
        res.redirect("/admin/teacher");
    });
router.get("/delete_teacher_info/:teacher_info_id",async function(req,res){
    const id=req.params.teacher_info_id;
    const sqlString = await exe(`DELETE FROM teacher_info WHERE teacher_info_id = '${id}'`);
    res.redirect("/admin/teacher")
});








router.post("/update_about_info",async function(req,res){
    const d=req.body;
    const data=await exe(`update about_us set about_info='${d.about_info}' where about_us_id ='1'`);
    res.redirect("/admin/about_us");
});
router.get("/notice_board",async function(req,res){
    const notic_info=await exe(`select * from notic_board`);
    const obj={"notic_info":notic_info};
    res.render("admin/notice_board.ejs",obj);
});
router.post("/add_notic_board",async function(req,res){
    const d=req.body;
    const sql=await exe(`insert into notic_board(notice_title,notice_subtitle)values('${d.notice_title}','${d.notice_subtitle}')`);
    res.redirect("/admin/notice_board");
});
router.get("/edit_notic_info/:notic_board_id", async function(req, res) {
    const id = req.params.notic_board_id;
    const notic_info=await exe(`select * from notic_board`);
    const obj={"notic_info":notic_info[0]}; 
    res.render("admin/edit_notic_info.ejs",obj);
    // Your logic here
});
router.post("/update_notic_board",async function(req,res){
    const d=req.body;
    const data = await exe(`UPDATE notic_board SET notice_title = '${d.notice_title}', notice_subtitle = '${d.notice_subtitle}' WHERE notic_board_id ='${d.notic_board_id}'`);
    res.redirect("/admin/notice_board");    
});
router.get("/delete_notic_info/:notic_board_id",async function(req,res){
    const id = req.params.notic_board_id;
    const sqlString = await exe(`DELETE FROM notic_board WHERE notic_board_id = '${id}'`);
    res.redirect("/admin/notice_board");
});


//  a bout us end 

router.get("/events",async function (req,res){
    const events_info=await exe(`select * from recent_events`)
    const obj={"events_info":events_info}
    res.render("admin/events.ejs",obj);
});
router.post("/add_events",async function(req,res){
    //  res.send(req.body);
    const d=req.body;
    if (req.files.events_img) {
        var events_img = new Date().getTime() + req.files.events_img.name;
        req.files.events_img.mv('public/admin/uploads/'+ events_img);
    }
    const sql=await exe(`insert into recent_events(events_name,events_img)values('${d.events_name}','${events_img}')`);
    //  res.send(sql);
    res.redirect("/admin/events")
});
router.get("/edit_events_info/:recent_events_id",async function(req,res){
    const events_info=await exe(`select * from recent_events`);
    const obj={"events_info":events_info[0]}
   res.render("admin/edit_events_info.ejs",obj);
});
router.post("/update_events",async function(req,res){
    const d=req.body;
    if (req.files && req.files.events_img) {
        var events_img = new Date().getTime() + req.files.events_img.name;
        req.files.events_img.mv('public/admin/uploads/' + events_img);
        var data = await exe(`update recent_events set events_img='${events_img}' where recent_events_id ='${d.recent_events_id}'`)
    }
    const data2 = await exe(`UPDATE recent_events SET events_name='${d.events_name}' WHERE recent_events_id ='${d.recent_events_id}'`);
res.redirect("/admin/events")
// res.send(data2)  
});
router.get("/delete_events_info/:recent_events_id",async function(req,res){
    const id=req.params.recent_events_id;
    const sqlString = await exe(`DELETE FROM recent_events WHERE recent_events_id = '${id}'`);
    res.redirect("/admin/events")
});


// ------- about page end -------------


// ------------------- department and alumini start -----------




router.get("/manage_department", async function(req,res){
    var data = await exe(`select * from department`)
    var obj = {"depart":data}
    res.render("admin/manage_department.ejs",obj);
});

router.post("/add_department",async function(req,res){
    // var data = await exe(`create table department(department_id int primary key auto_increment , department_text text , department_img text )`)
    if(req.files)
    {
        var file_name = new Date().getTime()+".png"
        req.files.department_img.mv("public/uploads/"+ file_name)
    }
    else
    {
        var file_name = ""
    }

    var data = await exe(`insert into department(department_text,department_img)values('${req.body.department_text}','${file_name}')`)
    // res.send(data)
    res.redirect("/admin/manage_department")
})

router.get("/edit_department", async function(req,res){
    var url_data = url.parse(req.url,true).query;
    var data = await exe(`select * from department where department_id = '${url_data.department_id}' `)
    var obj = {"depart":data[0]}
    res.render("admin/edit_depart.ejs",obj)
 
})

router.post("/update_department",async function(req,res){
    if(req.files)
    {
        var file_name = new Date().getTime()+ ".png"
        req.files.department_img.mv("public/uploads/"+file_name)
        var data2 = await exe(`update department set department_img = '${file_name}' where department_id = '${req.body.department_id}'  `)
    }
    else
    {
        var file_name = "";
    }
    var d = req.body
    var data = await exe(`update department set department_text = '${d.department_text}' where
         department_id ='${d.department_id}' `)
    res.send(`<Script>alert("updated Successfully...!");location="/admin/manage_department"</Script>`)

})

router.get("/ad_department",function(req,res){
    res.render("admin/ad_department.ejs");
})

router.get("/delete_department",async function(req,res){
    var url_data = url.parse(req.url,true).query;
    var data = await exe(`delete from department where department_id = '${url_data.department_id}' `)
    res.send(`<script>alert('Department Deleted Successfully...!');location="/admin/manage_department"</script>`)

})


router.get("/manage_alumini",async function(req,res){
    var data = await exe(`select * from alumini`)
    var obj = {"alumini":data}
    res.render("admin/manage_alumini.ejs",obj);
});

router.get("/add_alumini", function(req,res){
    
    res.render("admin/add_alumini.ejs")
})

router.post("/add_alumini",async function(req,res){
if(req.files)
{
    var file_name= new Date().getTime()+".png";
    req.files.alumini_img.mv("public/uploads/"+file_name)
}
else{
    file_name = "";
}
    var d = req.body;

    var data = await exe(`insert into alumini(alumini_img,alumini_name,alumini_std,alumini_percent)values
    ('${file_name}','${d.alumini_name}','${d.alumini_std}','${d.alumini_percent}')`)
    // res.send(data)
    res.redirect("/admin/manage_alumini")

})

router.get("/edit_alumini", async function(req,res){
    var url_data = url.parse(req.url,true).query
    var data = await exe(`select * from alumini where alumini_id = '${url_data.alumini_id}' `)
    var obj = {"alumini":data[0]}
    res.render("admin/edit_alumini.ejs",obj)
})

router.post("/update_alumini",async function(req,res){
    if(req.files)
    {
        var file_name = new Date().getTime() + ".png";
        req.files.alumini_img.mv("public/uploads/" + file_name)
        var sql = await exe(`update alumini set alumini_img = '${file_name}' where alumini_id = '${req.body.alumini_id}'  `)
    }
    else{
        var file_name = "";
    }
    var d = req.body;
    var data = await exe(`update alumini set alumini_name = '${d.alumini_name}',alumini_std = '${d.alumini_std}',
        alumini_percent = '${d.alumini_percent}' where alumini_id = '${d.alumini_id}'  `)
        res.send(`<script>alert('Updated Successfully...!');location="/admin/manage_alumini"</script>`)
        
})

router.get("/delete_alumini",async function(req,res){
        var url_data = url.parse(req.url,true).query
        var data = await exe(`delete from alumini where alumini_id = ${url_data.alumini_id} `)
        res.send(`<script>alert('Deleted Successfully...!');location="/admin/manage_alumini"</script>`)
        
})




// ------------------- department and alumini end -----------


// ------------------------------news & events  start -------------------------



router.get("/news_event",async function(req,res){
   
    res.redirect("/admin/add_news_event");
    // res.send("hello event");
});


router.get("/event&news",function(req,res){
    res.render("admin/event&news.ejs")
})

router.post("/card" , async function(req,res){
    if(req.files)
    {

        var file_name = new Date().getTime()+".png";
        req.files.card_img.mv("public/uploads/"+ file_name)
    }
    else
    {
        
        var file_name = " "
    }
    var d = req.body;
    var data = await exe(`insert into card(card_img, card_title,card_descrip)values('${file_name}','${d.card_title}','${d.card_descrip}')`)
    // res.send(data)
    res.redirect("/admin/event&news")
})


router.get("/add_news_event",async function(req,res){
    var data = await exe(`select * from card `)
    var obj = {"card":data} 
    res.render("admin/add_news_event.ejs",obj)
})


router.get("/edit_card/:id",async function(req,res){

    var data = await exe(`select * from card where card_id = '${req.params.id}' `)
    var obj = {"cards":data[0]} 
    res.render("admin/edit_news_event.ejs",obj)
})

router.post("/update_card",async function(req,res){
    var d = req.body;
    if(req.files)
    {
        var file_name = new Date().getTime()+".png"
        req.files.card_img.mv("public/uploads/"+file_name)
        var data2 = await exe(`update card set card_img ='${file_name}' where card_id = '${d.card_id}'  `)
        console.log(d.card_id)
    }
    else
    {
        file_name = " ";
    }
    var data = await exe(`update card set card_title = '${d.card_title}', card_descrip='${d.card_descrip}' where 
        card_id = '${d.card_id}' `)
    console.log(d.card_id)


    // res.send(data)
    // res.send(d)
    res.redirect("/admin/add_news_event")

})



// ------------------------------news & events  end -------------------------







// ----------------------------------------contact page start dynamic----------------------------------------

router.get("/contact", async function(req, res) {
    try {
        var data = await exe(`SELECT * FROM contact WHERE contact_id = 1`);
        var obj = { "contacts": data };
        res.render("admin/contact.ejs", obj);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/enquiry_list", async function(req, res) {
    try {
        var data = await exe(`SELECT * FROM contactform`);
        var obj = { "enq_list": data };
        res.render("admin/enquiry_list.ejs", obj);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.post("/update_contactform", async function(req, res) {
    var d = req.body;
    try {
        await exe(`UPDATE contact 
                    SET first_con_no = '${d.first_con_no}', 
                        sec_con_no = '${d.sec_con_no}', 
                        fir_mail_id = '${d.fir_mail_id}', 
                        sec_mail_id = '${d.sec_mail_id}', 
                        address = '${d.address}', 
                        address2 = '${d.address2}', 
                        g_map_link = '${d.g_map_link}' 
                    WHERE contact_id = 1`);
        res.send("<script>alert('Updated Successfully!'); location='/admin/contact';</script>");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// ----------------------------------------contact page end dynamic----------------------------------------

router.get("/social_media",async function(req,res){
    const social_info=await exe(`select * from social_links`);
    const obj={"social_info":social_info[0]};
    res.render("admin/social_media.ejs",obj);
});
router.post("/update_social_media",async function(req,res){
    // res.send(req.body)
    const d=req.body;
    if (req.files && req.files.main_logo) {
        var main_logo = new Date().getTime() + req.files.main_logo.name;
        req.files.main_logo.mv('public/admin/uploads/'+ main_logo);
        var data = await exe(`update social_links set main_logo='${main_logo}' where social_links_id='1'`);
        res.send(data);
    }
    const data2 = await exe(`UPDATE social_links SET twiter_link='${d.twiter_link}',facebook_link='${d.facebook_link}',youtube_link='${d.youtube_link}',google_link='${d.google_link}',school_time='${d.school_time}',school_contact='${d.school_contact}',linkedin_link='${d.linkedin_link}',insta_link='${d.insta_link}',school_email='${d.school_email}',school_address='${d.school_address}'WHERE social_links_id='1'`);
    // res.send(data2);
    res.redirect("/admin/social_media")
// console.log(d)
});
router.get("/important_links",async function(req,res){
    const important_links_info=await exe(`select * from important_links`);
    const obj={"important_links_info":important_links_info[0]};
    res.render("admin/important_links.ejs",obj);
});
router.post("/update_important_links",async function(req,res){
    const d=req.body;
    // res.send(req.body);
    const  data= await exe(`UPDATE important_links SET School_ERP_link='${d.School_ERP_link}',College_ERP_link='${d.College_ERP_link}',University_ERP_link='${d.University_ERP_link}',Learning_Management_link='${d.Learning_Management_link}',Marketing_Services_link='${d.Marketing_Services_link}',FAQ_link='${d.FAQ_link}',Career_link='${d.Career_link}',Teachers_Login='${d.Teachers_Login}',Become_Partner_link='${d.Become_Partner_link}',About_Us_link='${d.About_Us_link}',Testimonials_link='${d.Testimonials_link}',Privacy_Policy_link='${d.Privacy_Policy_link}',Terms_Conditions_link='${d.Terms_Conditions_link}'WHERE important_links_id ='1'`);
    // res.send(data2);
    res.redirect("/admin/important_links");
});
router.get("/students_feedback",async function(req,res){
    const students_feedback_info=await exe(`select * from student_feedback`);
    const obj={"students_feedback_info":students_feedback_info[0]}
    res.render("admin/students_feedback.ejs",obj);
});
router.post("/update_student_feedback",async function(req,res){
    // res.send(req.body)
    const d=req.body;
    if (req.files && req.files.student_photo) {
        var student_photo = new Date().getTime() + req.files.student_photo.name;
        req.files.student_photo.mv('public/admin/uploads/'+ student_photo);
        var data = await exe(`update student_feedback set student_photo='${student_photo}' where student_feedback_id ='1'`);
    }
    const data2 = await exe(`UPDATE student_feedback SET top_des='${d.top_des}',student_name='${d.student_name}',student_feedback='${d.student_feedback}' WHERE student_feedback_id ='1'`);
    res.redirect("/admin/students_feedback");
});
router.get("/add_slider",async function(req,res){
    const hero_slider_info=await exe(`select * from hero_slider`)
    const obj={"hero_slider_info":hero_slider_info}
    res.render("admin/add_slider.ejs",obj);
});
router.post("/add_hero_slider",async function(req,res){
    // res.send(req.body)
    const d=req.body;
    if(req.files.slider_img){
        var slider_img = new Date().getTime() + req.files.slider_img.name;
        req.files.slider_img.mv('public/admin/uploads/'+ slider_img);
    }
    const sql=`insert into hero_slider(slider_name,slider_img,slider_des)values('${d.slider_name}','${slider_img}','${d.slider_des}') `;
    const data=await exe(sql);
    res.redirect("/admin/add_slider");
});
router.get("/edit_hero_slider_info/:hero_slider_id",async function(req,res){
    const hero_slider_info=await exe(`select * from hero_slider`)
    const obj={"hero_slider_info":hero_slider_info[0]}
    res.render("admin/edit_hero_slider_info.ejs",obj);
});
router.post("/update_hero_slider",async function(req,res){
    // res.send(req.body)
    const d=req.body;
    if (req.files && req.files.slider_img) {
        var slider_img = new Date().getTime() + req.files.slider_img.name;
        req.files.slider_img.mv('public/admin/uploads/'+ slider_img);
        var data = await exe(`update hero_slider set slider_img='${slider_img}' where hero_slider_id ='${d.hero_slider_id}'`);
    }
    const data2 = await exe(`UPDATE hero_slider SET slider_name='${d.slider_name}',slider_des='${d.slider_des}' WHERE hero_slider_id ='${d.hero_slider_id}'`);
    res.redirect("/admin/add_slider");

});
router.get("/delete_hero_slider_info/:hero_slider_id",async function(req,res){
    const id=req.params.hero_slider_id;
    const sqlString = await exe(`DELETE FROM hero_slider WHERE hero_slider_id = '${id}'`);
    res.redirect("/admin/add_slider");

});
router.get("/education_management",async function(req,res){
    const edu_manag_qty=await exe(`select * from education_management_qty`);
    const obj={"edu_manag_qty":edu_manag_qty[0]};
    res.render("admin/education_management.ejs",obj);
});
router.post("/update_education_management",async function(req,res){
     const d=req.body;
     if (req.files && req.files.education_img) {
        const education_img = new Date().getTime() + req.files.education_img.name;
        req.files.education_img.mv('public/admin/uploads/'+ education_img);
        const data = await exe(`update education_management_qty set education_img='${education_img}' where education_management_qty_id  ='1'`);
    }
    if (req.files && req.files.management_img) {
        const management_img = new Date().getTime() + req.files.management_img.name;
        req.files.management_img.mv('public/admin/uploads/'+ management_img);
        const data = await exe(`update education_management_qty set management_img='${management_img}' where education_management_qty_id  ='1'`);
    }
    if (req.files && req.files.qty_img) {
        const qty_img = new Date().getTime() + req.files.qty_img.name;
        req.files.qty_img.mv('public/admin/uploads/'+ qty_img);
        const data = await exe(`update education_management_qty set qty_img='${qty_img}' where education_management_qty_id  ='1'`);
    }
    const data2 = await exe(`UPDATE education_management_qty SET education_name='${d.education_name}',education_des='${d.education_des}',management_name='${d.management_name}',management_des='${d.management_des}',qty_name='${d.qty_name}',qty_des='${d.qty_des}' WHERE education_management_qty_id  ='1'`);
    res.redirect("/admin/education_management");
    
    // res.send(data2);
});
router.get("/add_video",async function(req,res){
    const youtube_link=await exe(`select * from youtube_links`);
    const obj={"youtube_link":youtube_link}
    res.render("admin/add_video.ejs",obj);
});
router.post("/add_video_links",async function(req,res){
    // res.send(req.body);
    const d=req.body;
    const sql=`insert into youtube_links(video_link1,video_link2,video_link3)values('${d.video_link1}','${d.video_link2}','${d.video_link3}')`
    const data=await exe(sql);
    // res.send(data);
    res.redirect("/admin/add_video");
});
router.get("/delete_youtube_link/:youtube_links_id",async function(req,res){
    const id=req.params.youtube_links_id;
    const sqlString = await exe(`DELETE FROM youtube_links WHERE youtube_links_id = '${id}'`);
    res.redirect("/admin/add_video");
});
router.get("/add_FAQ",async function(req,res){
    const FAQ_data=await exe(`select * from FAQ_det`);
    const obj={"FAQ_data":FAQ_data};
    res.render("admin/add_FAQ.ejs",obj);
});
router.post("/add_FAQs",async function(req,res){
    // res.send(req.body);
    const d=req.body;
    const sql=await exe(`insert into FAQ_det(faq_name) values('${d.faq_name}')`)
    res.redirect("/admin/add_FAQ");
});
router.get("/delete_FAQ_data/:FAQ_det_id",async function(req,res){
    const id=req.params.FAQ_det_id;
    const sqlString = await exe(`DELETE FROM FAQ_det WHERE FAQ_det_id = '${id}'`);
    res.redirect("/admin/add_FAQ");
})

router.get("/student_panel", async function(req, res) {
    var data = await exe(`select * from std_admission where adm_approval = 'approved'`);
    var approve = await exe(`select count(*) as count from std_admission where adm_approval = 'approved'`);
    var reject = await exe(`select count(*) as count from std_admission where adm_approval = 'rejected'`);
    var obj = { "student": data ,"approve":approve[0].count,"reject":reject[0].count };
    res.render("admin/student_panel.ejs",obj);
    // console.log(approve)
    // console.log(reject)
});

router.get("/approve_student",async function(req,res){    
    const data = await exe(`select * from std_admission where adm_approval ='pending' `)
    var obj = {"apro":data}
    res.render("admin/approve_students.ejs",obj)
})

router.get("/approved/:id",async function(req,res){
    
var data = await exe(`update std_admission set adm_approval = 'approved' where admission_no ='${req.params.id}' and 
    adm_approval = 'pending'`)
    // res.send(data)
    res.redirect("/admin/approve_student")
})


router.get("/reject/:id",async function(req,res){
    
    var data = await exe(`update std_admission set adm_approval = 'rejected' where admission_no ='${req.params.id}' and 
        adm_approval = 'pending'`)
        // res.send(data)
        res.redirect("/admin/approve_student")
    })


router.get("/approved_list",async function(req,res){
    const data = await exe(`select * from std_admission where adm_approval ='approved' `)
    var obj = {"apro":data}
    res.render("admin/approved_list.ejs",obj)
})

router.get("/rejected_list",async function(req,res){
    const data = await exe(`select * from std_admission where adm_approval ='rejected' `)
    var obj = {"apro":data}
    res.render("admin/rejected_list.ejs",obj)
})



// ---------------teacher panel------------------

router.get("/teacher_panel",async function(req,res){
    const coun = await exe(`select count(*) as count from teacher_info `);

    const teacher_info=await exe(`select * from teacher_info`);
    const obj={"teacher_info":teacher_info,"coun":coun[0].count};
    res.render("admin/teacher_panel.ejs",obj)
})

router.get("/teacher_approval_list",async function(req,res){

    var data = await exe(`select * from teacher_registration `)
    var obj = {"apro":data}
    res.render("admin/teacher_approval_list.ejs",obj)
})



//-----------log out----------
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
   
    res.redirect('/admin/login'); // Redirect to login or home page
  });
});



// ---------------------------------
module.exports = router;
