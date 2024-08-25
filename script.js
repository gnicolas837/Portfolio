const button = document.createElement('button');
button.innerText = 'click me';
button.style = 'background: red';

button.addEventListener('click', () =>{
    alert("Bienvenido al mundo de la paja");
})

document.body.append(button);