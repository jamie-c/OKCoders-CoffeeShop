const navMenuBg = document.getElementsByClassName('links');
const navCheckBox = document.getElementById('menuIcon');
const body = document.getElementsByTagName('body');
const hamRotate = document.getElementsByClassName('hamRotate');

// clear menu overlay if clicked outside a link
navMenuBg[0].addEventListener('click', () => navChecked(navCheckBox));

// check state of checkbox to only run if checked - it should never be checked outside of responsie layout
const navChecked = (chkBx) => {
    if (chkBx.checked == true) {
        chkBx.checked = false;
        hamRotate[0].classList.remove('active');
        startStopScrolling(body[0]);
    }
}

// prevent background scrolling in responsive menu mode
navCheckBox.addEventListener('click', () => startStopScrolling(body[0]));

const startStopScrolling = (el) => {
    if (navCheckBox.checked == true) {
        el.classList.add('remove-scroll');
    } else if (navCheckBox.checked == false) {
        el.classList.remove('remove-scroll');
    }
}