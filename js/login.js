function logar() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(email == "bruno@hotmail.com" && senha == "1234"){
        alert("Logado com sucesso");
        location.href = "home.html";
    }else{
        alert("Email ou senha ivalidos!")
    }
}

