//cancel news

const cancel = document.getElementById("cancel");

const cancelField = () => {
    const field = document.querySelector(".welcome-news");
    field.style.visibility = "hidden";
}

cancel.addEventListener("click", cancelField);

//language change

const sr = document.getElementById("sr");
const en = document.getElementById("en");

const currentLanguage = (e) => {
    if (e.target.innerText === "EN") {
        e.target.style.color = "gray";
        sr.style.color = "white";
    } else {
        e.target.style.color = "gray";
        en.style.color = "white";
    }
}
sr.addEventListener("click", currentLanguage);
en.addEventListener("click", currentLanguage);


//burger menu

const button = document.getElementById("close-me");
const nav = document.getElementById("nav-close");

const burgerMenu = () => {
    nav.classList.toggle("open");
}

button.addEventListener("click", burgerMenu);