function validate() {
    var email = document.getElementById("email_user").value;
    var password = document.getElementById("password_user").value;

    if (password == '' || email == '') {
        alert("All fields must be filled!");
    }else{
        console.log(email);
        console.log(password);
    }
}
