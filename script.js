var nameInput = document.getElementById("name");
var name = nameInput.value;

function entrar(){
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    var keyInput = document.getElementById("key");
    var key = keyInput.value;
    
    if (name === "NewLocal" , key === "101020") {
        window.location.href = "./home.html";
    } else {
        alert("Acesso Negado");
    }
}
    
    