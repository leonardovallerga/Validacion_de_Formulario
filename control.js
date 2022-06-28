const form = document.querySelector('form');
const user = document.querySelector('#user_input');
const password = document.querySelector('#pass_input');
const submit = document.querySelector('#submit');

function verifyAtSymbol() {
    let atCount = 0;
    for(let i = 0; i < user.value.length; i++) {
        if (user.value[i] == '@') {
            atCount++;
        }
    }
    if (atCount == 1) return true;
    else return false;
}

function verifyEmptiness(input) {
    if (input != '') return true;
    else return false;
}

form.onsubmit = function(e) {
    if (!verifyEmptiness(user.value)) {
        alert("El campo de usuario no puede estar vacío.");
        e.preventDefault();
    }

    if (!verifyEmptiness(password.value)) {
        alert("El campo de contraseña no puede estar vacío.");
        e.preventDefault();
    }

    if (!verifyAtSymbol()) {
        alert("El campo de usuario debe contener un arroba.");
        e.preventDefault();
    }
  }
