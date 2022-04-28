const form = document.getElementById('form');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs()
})

function checkInputs(){
    const emailValue = email.value.trim();
    const senhaValue = senha.value.trim();

    if(emailValue === ''){
        errorValidation(email, 'Preencha esse campo');
    }else{
        sucessValidation(email)
    }

    if(senhaValue === ''){
        errorValidation(senha, 'Preencha esse campo');
    }else{
        sucessValidation(senha)
    }
    
}

function errorValidation(input, errorMessage){
    const formGroup = input.parentElement;



    formGroup.className = 'form-group error'
}

function sucessValidation(input){
    const formGroup = input.parentElement;

    formGroup.className = 'form-group sucess'
}




