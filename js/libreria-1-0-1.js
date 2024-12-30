//:::::MENU::::::

const close_ = document.querySelector("nav");
document.querySelector("#menu_bar").addEventListener("click", ()=>{
    close_.classList.toggle("close-menu");
})

const next = document.querySelectorAll('.next a[data^="next"')
    next.forEach(next =>{
        next.addEventListener("click", function(){
            close_.classList.toggle("close-menu");
			
        });
});


//::::SUBMENU:::::

const desplegar = document.querySelectorAll('#btn--');
let hidden = document.querySelectorAll('#hidden');
let vanDesplegar = true;
for (let x = 0; x < desplegar.length; x++){
desplegar[x].addEventListener("click", function(){
    console.log(desplegar.length)
    
        if (hidden[x].classList.contains("hidden")){
            hidden[x].classList.add('sub_menu')
            hidden[x].classList.remove('hidden');

            //desplegar[x].classList.add('arriba');
            //desplegar[x].classList.remove('abajo');

            vanDesplegar = false;
        } else{

            hidden[x].classList.remove('sub_menu')
            hidden[x].classList.add('hidden');

            //desplegar[x].classList.remove('arriba');
            //desplegar[x].classList.add('abajo');

            vanDesplegar = true;
        }
    });

}
//####. MENU DE NAVEGACION MISMA PAGINA
const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')

targets.forEach(target => {
	target.addEventListener('click', () => {
		content.forEach(c => {
			c.classList.remove('active')
		})
		const t = document.querySelector(target.dataset.target)
		t.classList.add('active')
	})
})
//####. VOLVER MENU ATRAS EN MOVIL
document.getElementById("main--").addEventListener("touchstart", () => {
    const heanav = document.querySelector("nav");
     heanav.classList.remove("close-menu");
     //heanav.classList.add("clos",window.scrollY>0);
   });

//####. CLASE ACTIVA

$(function() {
    var botones = $(".menu-page p");
    botones.click(function() {
      botones.removeClass('active-');
      $(this).addClass('active-');
    });
  });

/*  const clos = window.addEventListener("scroll", function(){
    const heanav = document.querySelector("nav");
    heanav.classList.remove("close-menu",window.scrollY>0);
    heanav.classList.add("clos",window.scrollY>0);
});*/



//####. SUBIR ARRIBA
const botArriba = document.querySelectorAll('#bot-arriba');
let subArriba = true;
for (let i = 0; i < botArriba.length; i++){
    botArriba[i].addEventListener("click", function(){
        if (botArriba[i].classList.contains("boton-arriba")){
            console.log(botArriba.length)
            window.scrollTo(0, 0);
            subArriba = false;
        } else{
            window.scrollTo(0, 0);
            subArriba = true;
        };
    });
};

//window.scrollTo(0, 0)


//buscador
/*
document.querySelector(".bi-x").addEventListener("click", ()=>{
    document.querySelector(".main-buscador").style.top="-250%";
    
})

document.querySelector("#bot-search").addEventListener("click", ()=>{
    document.querySelector(".main-buscador").style.top="0";
    alert("hola")
})
*/