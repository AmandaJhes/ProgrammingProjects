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