// define element that displays login text
const loginButton = document.getElementById('login');

// define element to hold initials
const loginText = document.getElementById('login-txt');

// define element to hold user icon
const loginUsrIcn = document.getElementsByClassName('login-user-icon');

// call prompt when login button is clicked and update the nav to display the text
loginButton.addEventListener('click', () => {
    const name = prompt('Please enter your full name:')
    if (name) {
        const [firstName, lastName] = name.split(' ');
        const initialString = ` ${firstName[0]}${lastName[0]}`;;
        loginText.textContent = initialString;
    }
});
