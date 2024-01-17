

var nome = ''
function capturar(nome, intro, convite,  some, aparece){
    capturando = document.getElementById(nome).value;
    
    if (capturando === ""){
        alert('Eita! Acho que você esqueceu de digitar seu nome! kkkk')
    }
    else{
    
    muda_pagina_flex(some, aparece);
    muda_texto();
    document.getElementById(intro).innerHTML = capturando;
    document.getElementById(convite).innerHTML = capturando;
    
    
    }
}



function show_article(id){
    
    var infos = document.getElementById(id);
   
    if (infos.style.display === "none") {
        infos.style.display = "inline-block";
      } 
    else {
        infos.style.display = "none";
      }
    
}

function show_flex(id){
    
    var infos = document.getElementById(id);
   
    if (infos.style.display === "none") {
        infos.style.display = "flex";
      } 
    else {
        infos.style.display = "none";
      }
    
}


function muda_pagina(some, aparece){
    show_article(some);
    show_article(aparece);
    
    some = '';
    aparece = '';
    
}

function muda_pagina_flex(some, aparece){
    show_flex(some);
    show_flex(aparece);
    
    some = '';
    aparece = '';
    
}

function play_audio(song) {
    musica = document.getElementById(song);
    musica.play();
}

function pause_audio(song) {
    musica = document.getElementById(song);
    musica.pause();

}

function desativarMusica(){
    pause_audio('adventure');
    pause_audio('arcade')

}

nome = ''

function set_nome(){
    nome = document.getElementById('nome').value
    
}


function confirmar_presenca(){
    // Número de telefone para o qual você quer enviar a mensagem
    const phoneNumber = '+5571982962462'; // Lembre-se de incluir o código do país
    
    // Mensagem que você quer enviar
    const message = encodeURIComponent(
`Oi! Aqui é *${nome.toUpperCase()}*!

Quero dizer que estou feliz por participar desse momento com vocês! Pode confirmar minha presença.

Nos Vemos em breve!

Agradeço pelo convite!`);
    
    // URL para o WhatsApp Web
const url = `https://wa.me/${phoneNumber}?text=${message}`;


// Abrir WhatsApp Web
window.open(url);

}   



function typeWriter(elemento) {
   
    const texto = document.getElementById(elemento);
    const textoArray = texto.innerHTML.split('');
    texto.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => texto.innerHTML += letra, 30 * i);
    });
    

}

    var atual = "vazio";
    var prox = "prologo";

function muda_texto() {
    

    
    if (atual === "vazio") {
        document.getElementById(atual).style.display = "none";
        document.getElementById(prox).style.display = "flex";
        typeWriter(prox);
        atual = "prologo" 
        prox = "p1";
    }
    
    else if (atual === "prologo") {
        document.getElementById(atual).style.display = "none";
        document.getElementById(prox).style.display = "flex";
        typeWriter(prox);
        atual = "p1";
        prox = "p2";
    }

    else if (atual === "p1") {
        document.getElementById(atual).style.display = "none";
        document.getElementById(prox).style.display = "flex";
        typeWriter(prox);
        atual = "p2";
        prox = "p3";
    }

    else if (atual === "p2") {
        document.getElementById(atual).style.display = "none";
        document.getElementById(prox).style.display = "flex";
        document.getElementById('yan').style.display = "flex";
        document.getElementById('iasmin').style.display = "none";
        typeWriter(prox);
        atual = "p3";
        prox = "p4";
    }
    else if (atual === "p3") {
        document.getElementById(atual).style.display = "none";
        document.getElementById(prox).style.display = "flex";
        typeWriter(prox);
        atual = "p4";
        prox = "p5";
    }
    else if (atual === "p4") {
        document.getElementById(atual).style.display = "none";
        document.getElementById(prox).style.display = "flex";
        document.getElementById('iasmin').style.display = "flex";
        typeWriter(prox);
        atual = "p5";
        prox = "p6";
    }
    else if (atual === "p5") {
        document.getElementById(atual).style.display = "none";
        document.getElementById(prox).style.display = "flex";
        typeWriter(prox);
        atual = "p6";
    }
    else if (atual === "p6") {
        muda_pagina("historia", "intro")
        set_nome()
        
    }
}

var temp = "part1"
var seg = "part2" 

