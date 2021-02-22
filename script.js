let quadrados = document.querySelectorAll (".quadrado");
let botao = document.querySelector(".resetar");
let resposta = document.querySelector ("h3");
let jogador1 = "X";
let jogador2 = "O";
let i = 0;
let inputJogador1 = document.querySelector(".jogador1");
let inputJogador2 = document.querySelector(".jogador2");
let comeca = document.querySelector(".comeca");
let nomeJogador1 = document.querySelector(".nomeJogador1");
let nomeJogador2 = document.querySelector(".nomeJogador2");
let header = document.querySelector("header");
let divForm = document.querySelector(".cadastroJogadores");


function iniciar (){
    if(inputJogador1.value != "" && inputJogador2.value != ""){
        divForm.style.display = "none";
        header.style.display = "block";
        nomeJogador1.innerHTML = inputJogador1.value ;
        nomeJogador2.innerHTML = inputJogador2.value;
    }else{
        alert("preencha todos os campos");
    }
}

function jogada (){
   
    if (this.innerHTML == ""){
        if(i %2 == 0){
            this.innerHTML = `${jogador1}`;
            this.style.color = "white";
            this.style.fontSize = "35pt";
            this.style.fontWeight = "bold";
            i ++;
            ValidarGanhador();
     
        } 
        else {

            this.innerHTML = `${jogador2}`;
            this.style.color = "black";
            this.style.fontSize = "35pt";
            this.style.fontWeight = "bold";
            i ++;
            ValidarGanhador();

        }
    }
}

for(let quadrado of quadrados){
    quadrado.onclick = jogada;
}

function ValidarGanhador (){
    if(quadrados[0].innerHTML != "" && quadrados[0].innerHTML == quadrados[1].innerHTML && quadrados[1].innerHTML == quadrados[2].innerHTML){
        resposta.innerHTML = "Você Ganhou !!";
        resposta.style.color = "limegreen";
        blockJogada();
    }
    else if (quadrados[3].innerHTML != "" && quadrados[3].innerHTML == quadrados[4].innerHTML && quadrados[4].innerHTML == quadrados[5].innerHTML){
        resposta.innerHTML = "Você Ganhou !!";
        resposta.style.color = "limegreen";
        blockJogada();
    }
    else if (quadrados[6].innerHTML != "" && quadrados[6].innerHTML == quadrados[7].innerHTML && quadrados[7].innerHTML == quadrados[8].innerHTML){
        resposta.innerHTML = "Você Ganhou !!";
        resposta.style.color = "limegreen";
        blockJogada();
    }
    else if (quadrados[0].innerHTML != "" && quadrados[0].innerHTML == quadrados[3].innerHTML && quadrados[3].innerHTML == quadrados[6].innerHTML){
        resposta.innerHTML = "Você Ganhou !!";
        resposta.style.color = "limegreen";
        blockJogada();
    }
    else if (quadrados[1].innerHTML != "" && quadrados[1].innerHTML == quadrados[4].innerHTML && quadrados[4].innerHTML == quadrados[7].innerHTML){
        resposta.innerHTML = "Você Ganhou !!";
        resposta.style.color = "limegreen";
        blockJogada();
    }
    else if (quadrados[2].innerHTML != "" && quadrados[2].innerHTML == quadrados[5].innerHTML && quadrados[5].innerHTML == quadrados[8].innerHTML){
        resposta.innerHTML = "Você Ganhou !!";
        resposta.style.color = "limegreen";
        blockJogada();
    }
    else if (quadrados[0].innerHTML != "" && quadrados[0].innerHTML == quadrados[4].innerHTML && quadrados[4].innerHTML == quadrados[8].innerHTML){
        resposta.innerHTML = "Você Ganhou !!";
        resposta.style.color = "limegreen";
        blockJogada();
    }
    else if (quadrados[2].innerHTML != "" && quadrados[2].innerHTML == quadrados[4].innerHTML && quadrados[4].innerHTML == quadrados[6].innerHTML){
        resposta.innerHTML = "Você Ganhou !!";
        resposta.style.color = "limegreen";
        blockJogada();
    }
    else if (i === 9){
        resposta.innerHTML = "velha";
        resposta.style.color = 'red';
    }
    else{
        resposta.innerHTML = "";
        
    }  
}

function blockJogada(){
    if(jogada)
    for(quadrado of quadrados){
        quadrado.onclick = null;
    }
}

function resetar (){

    for( let quadrado of quadrados){
        quadrado.innerHTML = "";
        quadrado.onclick = jogada;
    }
    i = 0;
    resposta.innerHTML = "";
    
}

comeca.onclick = iniciar;


botao.onclick = resetar;