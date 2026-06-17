import "./styles.css";
import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";
import { renderAboutPage } from "./about.js";

renderHomePage()

const nav = document.querySelector('header > nav');
const contentSection = document.querySelector('#content');

nav.addEventListener('click', (e) => {
    clearContent(contentSection);
    switch (e.target.textContent) {
        case 'About':
            renderAboutPage();
            break;
        case 'Menu':
            renderMenuPage();
            break;
        case 'Home':
            renderHomePage();
            break;
    }
})

function clearContent(parentElement) {
    parentElement.innerHTML = '';
}