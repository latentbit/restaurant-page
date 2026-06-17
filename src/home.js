function renderHomePage() {
    const contentSection = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const img = document.createElement('img');

    h1.textContent = "Aenean commodo ligula eget dolor.";
    p.textContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    img.src = "https://i.pinimg.com/736x/54/c7/00/54c700c32ee9881401de149e4116f25c.jpg";
    img.alt = "Restaurant";

    contentSection.appendChild(h1);
    contentSection.appendChild(p);
    contentSection.appendChild(img);
}

export {renderHomePage};