function validate(){
    var name = document.getElementById("user_name").value;
    var email = document.getElementById("user_email").value;
    var password = document.getElementById("user_password").value;
    var gender = document.getElementById("user_gender").value;
    var city = document.getElementById("user_city").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/;

    if (name == '' || password == '' || email == '' || gender == '' || city == '' || confirmPassword == '') {
        alert("All fields must be filled!");
    }else if(password != confirmPassword){
        alert("Password and Confirm Password must be the same!");
    }else if(!regex.test(password)){
        alert("Password must contain at least one capital letter, one number and at least 8 characters!");
    }else{
        console.log(name);
        console.log(email);
        console.log(gender);
        console.log(city);
        console.log(password);
        console.log(confirmPassword);
    }
}
        