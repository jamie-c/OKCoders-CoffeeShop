// define element that displays login text
const loginButton = document.getElementById('login');

// define element to hold initials
const loginText = document.getElementById('login-txt');

// define element to hold user icon
const loginUsrIcn = document.getElementsByClassName('login-user-icon');

// call prompt when login button is clicked, pass that to getUserInitials function and update the nav to display the text
loginButton.addEventListener('click', () => getUserInitials(prompt('Please enter your full name:')));
