
/** mostrar/esconder senha */
const passwordInput = document.getElementById("password")
const eyeSvg =document.getElementById("eyeSvg")

function eyeClick() {
    let inputTypeIsPassword = passwordInput.type = "password"

    if(inputTypeIsPassword){
        showPassword()
    }
    else{
        hidePassword()
    }
}

function showPassword(){
    passwordInput.setAttribute("type","text")
    eyeSvg.setAttribute("src","eye-off.svg")
}
function hidePassword(){
    passwordInput.setAttribute("type","password")
    eyeSvg.setAttribute("src","eye.svg")
}

//validação do email e senha
function validar() {
var email= document.getElementById("email").value
var senha = document.getElementById("password").value

if (email.length == 0) {
    alert("O email não foi preenchido!");
    //email_erro.innerHTML = "O email não foi preenchido!";
    return false;
} else {
   if (email.indexOf("@") <= 0) {
    alert("O email não foi preenchido corretamente!");
       //email_erro.innerHTML = "O email não está no formato correto";
       return false;
   }


}
return true
}
