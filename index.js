const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')

form.addEventListener('submit', (e) => {
    e.preventDefault() /* preventDefault cancela o comportamento padra do navegador */

    checkInputs()
})

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if(usernameValue === '') {
        //mostrar o erro 
        //adicionar a classe error
        errorValidation(username, 'Preencha esse campo')
    } else {
        //adicionar a classe de sucesso
        sucessValidation(username)
    }

    if (emailValue === '') {
        errorValidation(email, 'Preencha esse campo')
    } else {
        sucessValidation(email)
    }

    if (passwordValue === '') {
        errorValidation(password, 'Preencha esse campo')
    } else if (passwordValue.length < 8) {
            errorValidation(password, 'A senha deve ter mais de 8 caracteres')
        } else {
        sucessValidation(password)
        }
    
    if (passwordtwoValue === '') {
        errorValidation(passwordtwo, 'Preencha esse campo')
    } else if (passwordtwoValue.length < 8) {
        errorValidation(passwordtwo, 'A senha deve ter mais de 8 caracteres')
    } else {
        sucessValidation(passwordtwo)
    }
}
function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message

    formControl.className = 'form-control error'
}

function sucessValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}