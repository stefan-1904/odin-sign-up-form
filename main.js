function passwordMatch() {
    let pass1 = document.getElementById('password').value;
    let pass2 = document.getElementById('confirmPassword').value;

    if (pass1 === pass2) {
        console.log('match')
    } else if (pass1 != pass2) {
        console.log('no match')
    }
}