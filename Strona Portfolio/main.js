function slide() {

const adobeHeight = document.getElementById("adobe").clientHeight;
const adobeHeightFromTop = document.getElementById("adobe").offsetTop;
const languagesHeight = document.getElementById("languages").clientHeight;
const languagesHeightFromTop = document.getElementById("languages").offsetTop;
const responsiveHeight = document.getElementById("responsive").clientHeight;
const responsiveHeightFromTop = document.getElementById("responsive").offsetTop;

const scrollHeight = window.scrollY;

    if (scrollHeight > adobeHeightFromTop - adobeHeight*2) {
        document.querySelector("#adobe-div").classList.add("adobe-show");
    }

    if (scrollHeight > languagesHeightFromTop - languagesHeight*2) {
        document.querySelector("#languages-div").classList.add("languages-show");
    }

    if (scrollHeight > responsiveHeightFromTop - responsiveHeight) {
        document.querySelector("#responsive-div").classList.add("responsive-show");
    }
}

window.addEventListener("scroll", slide);