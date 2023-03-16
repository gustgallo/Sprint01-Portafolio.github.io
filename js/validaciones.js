const form = document.querySelector('form');
const inputs = document.querySelectorAll('#form .input');

const expresiones = {
    name: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-A0-9-.]+$/,
    issue: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,40}$/,
    message: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{10,100}$/,
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(campo).classList.add('input');
        document.getElementById(campo).classList.remove('input-invalid');
        document.getElementById(`error__${campo}`).classList.add('input-message-error');
        document.getElementById(`error__${campo}`).classList.remove('input-message-error-active');
        campos[campo] = true
    } else {
        document.getElementById(campo).classList.remove('input');
        document.getElementById(campo).classList.add('input-invalid');
        document.getElementById(`error__${campo}`).classList.remove('input-message-error');
        document.getElementById(`error__${campo}`).classList.add('input-message-error-active');
        campos[campo] = false;
    }
}

const campos = {
    name: false,
    email: false,
    issue: false,
    message: false
}

const validarForm = (e) => {
    switch (e.target.name) {
        case "name":
            validarCampo(expresiones.name, e.target, 'name');
            break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
            break;
        case "issue":
            validarCampo(expresiones.issue, e.target, 'issue');
            break;
        case "message":
            validarCampo(expresiones.message, e.target, 'message');
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(campos.name && campos.email && campos.issue && campos.message){
        form.reset()
    }
})