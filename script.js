var nameInput = document.getElementById("name");
var name = nameInput.value;

function entrar(){
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    var keyInput = document.getElementById("key");
    var key = keyInput.value;
    
    if (name === "admin" , key === "admin") {
        window.location.href = "./home.html";
    } else {
        alert("Acesso Negado");
    }
}
    
    