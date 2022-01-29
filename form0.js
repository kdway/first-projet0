function val() {
    var val = 0;
    var firstname = document.forms["formReg"]["firstname"].value;
    var lastname = document.forms["formReg"]["lastname"].value;

    if (firstname.value == "") {
        window.alert("Please enter your name.");
        firsname.focus();
        return false;
    }
}