
const sobre = document.querySelectorAll(".visual")


window.onscroll = function() {verificaHeader()}

verificaPagina()

function verificaPagina(){
    for(let i = 0; i < sobre.length; i++){
    
        const observer = new IntersectionObserver(entry =>{//Verifica se o item está visível na tela
            entry.forEach((entries) => {
    
                const menu = document.querySelectorAll(".navegacao")
    
                if(entries.isIntersecting === true){//aplicada a borda na nav, respectiva parte do site
                    
                    for(i; i < menu.length; i){
                        menu[i].style.borderBottom = "3px solid #B4846C"
                        break
                    }
                }else if(entries.isIntersecting === false){//Retira a borda ao sair de resapectiva parte do site
    
                    for(i; i < menu.length; i){
                        menu[i].style.border = "none"
                        break
                    }
    
                }
            })
    
    
        })
    
        observer.observe(sobre[i])
    
    }

}

function verificaHeader(){

    let menuNavegacao = document.querySelector("nav")

    if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
        //Verificação para que a nav pare de ser transparente
        menuNavegacao.classList.add("fundoNav")
    }else if(document.body.scrollTop < 350 || document.documentElement.scrollTop < 350){
        menuNavegacao.classList.remove("fundoNav")
    }
} 



//Script para Scroll Suave

const menuItems = document.querySelectorAll('nav ul li a')

menuItems.forEach(item =>{
    item.addEventListener('click', scrollSuave)
})

function scrollSuave(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to,
        behavior: "smooth"
    })

}

const fimItems = document.querySelectorAll('#fim ul li a')

fimItems.forEach(item =>{
    item.addEventListener('click', scrollSuave)
})

function scrollSuave(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to,
        behavior: "smooth"
    })

}


//Configuração menu mobile

const ativ = document.querySelector('.ativa-menu-mobile i')
const item = document.querySelector('.menu-mobile')
const navBar = document.querySelector('nav')

function criaMenu(){
    if(item.style.display == 'none'){
        navBar.classList.add('mobile')
        item.style.display = 'flex'
        ativ.style.margin = "40px 25px"
        ativ.style.transform = "rotate(90deg)"



    }else{
        item.style.display = 'none'
        navBar.classList.remove('mobile')
        ativ.style.margin = "5px 25px"
        ativ.style.transform = "rotate(0deg)"
    }

}




