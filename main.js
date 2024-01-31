function passwordMatch() {
    let pass1 = document.getElementById('password');
    let pass2 = document.getElementById('confirmPassword');
    let btn = document.getElementById('createBtn');
    let checkAlert = document.getElementById('passwordValidation');

    if (pass1 === '' || pass2 === '') {
        checkAlert.style.display = 'none';
        console.log('a field is empty')
    }

    if (pass1.value === pass2.value) {
        checkAlert.style.display = 'none';
        pass1.style.outlineColor = '#E5E7EB';
        pass2.style.outlineColor = '#E5E7EB';
        btn.disabled = false;
    } else if (pass1.value != pass2.value) {
        checkAlert.style.display = 'block';
        pass1.style.outlineColor = '#B91C1C';
        pass2.style.outlineColor = '#B91C1C';
        btn.disabled =  true;
    }
}