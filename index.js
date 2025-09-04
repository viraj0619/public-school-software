var express = require("express");
var bodyparser = require("body-parser");
var upload = require("express-fileupload");
var session = require("express-session");
var user_route = require("./routes/user_routes");
var admin_route = require("./routes/admin_routes");
var parent_route = require("./routes/parent_routes");
var teacher_route = require("./routes/teacher_routes")
var cors = require('cors');
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var url = require("url")
var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(upload());
app.use(session({
    secret: "schoolsoftware public school management software system",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(express.static("public/"));
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: "746200466815-1flbuteen6hh299jdg9pavhl3op0oph6.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:1000/auth/google/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        cb(null, profile);
    }
));

passport.serializeUser(function(user, cb){
    cb(null, user);
});

passport.deserializeUser(function(obj, cb){
    cb(null, obj);
});

app.use("/", user_route);
app.use("/admin", admin_route);
app.use("/parent", parent_route);
app.use("/teacher", teacher_route);

app.listen(1001, () => {
    console.log("Server started on http://localhost:1001");
});
