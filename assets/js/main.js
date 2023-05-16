// let carousel = document.querySelector('.carousel');
// let url = carousel.style.backgroundImage;
// console.log(url);
// var lista = [];
// // lista.push(url.substring(5, url.length - 2));
// lista.push(carousel.style.backgroundImage.substring(5, url.length - 2));
// lista.push('https://images.unsplash.com/photo-1681797485212-7491d3f3619c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
// lista.push('https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
// console.log(lista);
// console.log(carousel);
// let i = 1;
// setInterval(() => {
//     carousel.style.backgroundImage = 'url(' + lista[i] + ' )';

//     i++;
//     if (i > 2) i = 0;
// }, 1000);



let navegador = document.getElementById('mobile');
console.log(navegador.children[1]);
let opened = false;
let orHe = navegador.style.height;
navegador.children[0].addEventListener('click', function() {
    if (opened) cerrar();
    else abrir();
})

for (let nn of navegador.children[1].children) {
    nn.addEventListener('click', function() {
        cerrar();
    })
}

function cerrar() {
    navegador.style.height = orHe;
    navegador.children[0].children[0].classList.replace('lni-plus', 'lni-menu');
    navegador.children[0].children[0].style.transform = 'rotate(0deg)';
    navegador.children[1].style.display = 'none';
    opened = false;
}

function abrir() {
    navegador.style.height = '100%';
    navegador.children[0].children[0].style.transform = 'rotate(135deg)';
    navegador.children[0].children[0].classList.replace('lni-menu', 'lni-plus');
    opened = true;
    navegador.children[1].style.display = 'flex';
}



const url = 'https://api.twitch.tv/helix/users?login=twitchdev';
const token = 'gsuyf62y4vpg8kgd97tx1ov8fpua3g';
const clientId = 'izhk15bjxodkvz33zs6unif4dq7at2';

fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Client-Id': clientId
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));