const img = document.querySelector('img');

img.addEventListener('click', () => {
    const src = img.getAttribute('src');

    if (src === 'images/fortnite-icon.jpg') {
        img.setAttribute('src', 'images/macaco-icon.webp');
    } else {
        img.setAttribute('src', 'images/fortnite-icon.jpg');
    }
})

let button = document.querySelector('button');
let titulo = document.querySelector('h1');

function setUserName() {
    const name = prompt('Digite o seu nome: ');
    if (!name) {
        setUserName();
    } else {
        localStorage.setItem('name', name);
        titulo.textContent = `Seja bem-vindo(a), ${name}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    titulo.textContent = `Seja bem-vindo(a), ${storedName}`;
}

button.addEventListener('click', () => {
    setUserName();
})
