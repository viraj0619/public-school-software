function vali() {
    var a = document.getElementById('fullname').value;
    var b = document.getElementById('mobile').value;
    var c = document.getElementById('userid').value;
    var d = document.getElementById('password').value;
    var e = document.getElementById('confirmpassword').value;

    if (a == '' || b == '' || c == '' || d == '' || e == '') {
        alert('All Fields are Mendatory !')
        return false;
    }
        else if (b.length<10||b.length>10) {
            alert('Number Should be of 10 Digits !')
            return false;
        }
        else if (isNaN(b)) {
            alert('Only Number Are Allowed !')
            return false;
        }
        else if (d!=e) {
            alert('Please Enter Same Password !')
            return false;
        }
        else if (d.length<5) {
            alert('Password Minimum length is 5 Digits  !')
            return false;
        }
    else{
        true;
    }
}

// function loginvali() {
//     var a = document.getElementById('loginuserid').value;
//     var b = document.getElementById('loginpassword').value;

//     if (a == '' || b == '' ) {
//         alert('All Fields are Mendatory !')
//         return false;
//     }
//     else if (b!='ram') {
//         alert('Wrong Password !')
//         return false;
//     }
//     else if (b=='ram') {
//         alert('Login Success !')
//         return true;
//     }
//     else{
//         true;
//     }
// }