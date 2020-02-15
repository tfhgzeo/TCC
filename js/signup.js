var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {        
        onLoadFunction();
    }
};

app.initialize();

document.addEventListener("DOMContentLoaded", function(event) { 
    var estilo = document.getElementsByClassName('load');
    estilo[0].style.visibility = "hidden";
 });

var voltar = document.querySelector("i");

voltar.addEventListener('click', function () {
    window.location.href = "index.html";
})


var cadastrar = document.querySelector("#btnCadastrar");

cadastrar.addEventListener("click", function (){
    var nome = document.querySelector("#nome");
    var email = document.querySelector("#email");
    var senha = document.querySelector("#senha");
    var senhaC = document.querySelector("#senhaC");

    var emailValue = email.value;

    if(emailValue.length == 0) {
        document.querySelector(".email").classList.add("elementoIncorreto");
    }else {
        document.querySelector(".email").classList.remove("elementoIncorreto");
    }
})

