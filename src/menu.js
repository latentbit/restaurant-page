function renderMenuPage() {
    const contentSection = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const img = document.createElement('img');

    h1.textContent = "Kokonut";
    p.textContent = "Mango is a very gud fruit for yor health. Eat any time, preferably in da sumer."
    img.src = "https://i.pinimg.com/736x/c0/4b/f1/c04bf186184add9f53ed77d13fe3221a.jpg";
    img.alt = "Watermelon";

    contentSection.appendChild(h1);
    contentSection.appendChild(p);
    contentSection.appendChild(img);
}

export {renderMenuPage};