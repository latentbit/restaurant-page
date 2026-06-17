function renderAboutPage() {
    const contentSection = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const img = document.createElement('img');

    h1.textContent = "About us";
    p.textContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    img.src = "https://i.pinimg.com/736x/38/8f/17/388f17c7e7cb37940ae6015749385ca3.jpg";
    img.alt = "";

    contentSection.appendChild(h1);
    contentSection.appendChild(p);
    contentSection.appendChild(img);
}

export {renderAboutPage};