window.onscroll = function(){
    scroll();
}

function scroll(){
    let btn = document.querySelector('.btn-topo');
    if(document.documentElement.scrollTop > 300){
        btn.style.display = 'block';
    }else{
        btn.style.display = 'none';
    }
}

// Função para subir ao topo
function backToTop(){
    document.documentElement.scrollTop = 0;
}

document.querySelector('#submit').addEventListener('click',function(){
    let cliente = document.querySelector('#nome').value;
    let sobrenome = document.querySelector('#sobrenome').value;
    let email = document.querySelector('#email').value;
    let telefone = document.querySelector('#telefone').value;
    
   let url = ("https://api.whatsapp.com/send?phone=5585986816280&text= Bem vindo a SAMI -->> %0A Qual é o seu nome? %0A " + cliente + " %0A Qual o seu sobrenome ?%0A" + 
   sobrenome + "%0A Qual o seu e-mail %0A "+ email +" %0A Qual é o seu telefone ? %0A "+ telefone);
   
   window.open(url);
   
   });