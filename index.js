"use strict"
const correctEmail = `admin@test.io`;
const correctPassword = `admin1234`;
const loginUser = () => {
    const email = prompt(`Enter your email`);
    if (email === correctEmail) {
        const password = prompt(`Enter your password`);
        if (password === correctPassword) {
            alert(`Your login is sucsessful`)
        } else {
            alert(`Your password incorrect`)
        }
    } else {
        alert('Your email is incorrect')
    }
}
loginUser();