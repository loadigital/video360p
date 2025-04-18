const lin = "https://video360p.site";
const header = document.querySelector("#include-header");

let divHeader = document.createElement("div")
divHeader.innerHTML = `
<header>
    
    <div class="menu_bar">
        <div class="bt-menu"><img src="${lin}/img/LOGO12.png" alt=""><span class="bi-list" id="menu_bar"></span></div>
     </div>
        
        <nav>
            <ul class="ul-main">
                
                <div class="contenedor_list flexrow-c col-12">
                    <a class="flexrow-c a-lo" href="#" data="next"><img class="img-logo" src="${lin}/img/LOGO12.png" alt=""></a>
                    
                    <li class="next"><a href="${lin}" data="next"><span class="bi-house"></span>Inicio</a></li>
                    <li class="next"><a href="${lin}/src/page/tv" data="next"><span class="bi-tv-fill"></span>TV En vivo</a></li>
                    <li class="next"><a href="/peliculas" data="next"><span class="bi-cone-striped"></span>Películas</a></li>
                    <li class="next"><a href="/series" data="next"><span class="bi-tv"></span>Series</a></li>
                    
                    <li class="btn--"  id="btn--"><a href="#" data="next"><span class="bi-collection-play-fill"></span>Genero</a>
                        <ul class="hidden" id="hidden">
                            <li class="next"><a href="/src/genres/genero?g=28" data="next"><span class="bi-folder2-open"></span>Acción</a></li>
                            <li class="next"><a href="/src/genres/genero?g=16" data="next"><span class="bi-folder2-open"></span>Animación</a></li>
                            <li class="next"><a href="/src/genres/genero?g=12" data="next"><span class="bi-folder2-open"></span>Aventura</a></li>
                            <li class="next"><a href="/src/genres/genero?g=10752" data="next"><span class="bi-folder2-open"></span>Bélico</a></li>
                            <li class="next"><a href="/src/genres/genero?g=878" data="next"><span class="bi-folder2-open"></span>Ciencia ficción</a></li>
                            <li class="next"><a href="/src/genres/genero?g=35" data="next"><span class="bi-folder2-open"></span>Comedia</a></li>
                            <li class="next"><a href="/src/genres/genero?g=80" data="next"><span class="bi-folder2-open"></span>Crimen</a></li>
                            <li class="next"><a href="/src/genres/genero?g=99" data="next"><span class="bi-folder2-open"></span>Documental</a></li>
                            <li class="next"><a href="/src/genres/genero?g=18" data="next"><span class="bi-folder2-open"></span>Drama</a></li>
                            <li class="next"><a href="/src/genres/genero?g=10751" data="next"><span class="bi-folder2-open"></span>Familia</a></li>
                            <li class="next"><a href="/src/genres/genero?g=14" data="next"><span class="bi-folder2-open"></span>Fantasia</a></li>
                            <li class="next"><a href="/src/genres/genero?g=36" data="next"><span class="bi-folder2-open"></span>Historia</a></li>
                            <li class="next"><a href="/src/genres/genero?g=9648" data="next"><span class="bi-folder2-open"></span>Misterio</a></li>
                            <li class="next"><a href="/src/genres/genero?g=10749" data="next"><span class="bi-folder2-open"></span>Romance</a></li>
                            <li class="next"><a href="/src/genres/genero?g=53" data="next"><span class="bi-folder2-open"></span>Suspenso</a></li>
                            <li class="next"><a href="/src/genres/genero?g=27" data="next"><span class="bi-folder2-open"></span>Terror</a></li>   
                            
                        </ul>
                    </li>                  
                    

                    <li class="btn-- class-web"><a id="btn--" href="#" data="next"><span class="bi-three-dots-vertical"></span>Mas</a>
                        <ul class="hidden" id="hidden">
        
                            <li class="next"><a target="_blank" href="https://loadigital.github.io/video360p/app/descargarApp.html" data="next"><span class="bi-android2"></span>Descargar App</a></li>
                            <li class="next"><a target="_blank" href="https://wa.me/573151412445" data="next"><span class="bi-whatsapp"></span>Soporte</a></li>
                            <li class="next"><a target="_blank" href="https://t.me/vid360p" data="next"><span class="bi-telegram"></span>Grupo Telegram</a></li>
                            <li class="next"><a target="_blank" href="${lin}" data="next"><span class="bi-link-45deg"></span>Web Oficial</a></li>
                            <li class="next oculto-0"><a class="ocul-0 ocul" href="#" data="next"><span class="bi-stickies"></span>Copy Link</a></li>
                            <li class="next"><a  href="#" data="next"><span class="bi-gear-fill"></span>Versión 0.6</a></li>
                        </ul>
                    
                    </li>
                    
                    <li class="btn--"><a id="btn--" href="#" data="next"><span class="bi-search"></span>Buscador...</a>
                        <ul class="hidden" id="hidden">
                            <li class="next"><a href="/search&id=uno" data="next"><span class="bi-folder2-open"></span>Películas</a></li>
                            <li class="next"><a href="/search&id=dos" data="next"><span class="bi-folder2-open"></span>Series</a></li>
                        </ul>
                    
                    </li>

                    <li class="next class-mo"><a target="_blank" href="https://loadigital.github.io/video360p/app/descargarApp.html" data="next"><span class="bi-android2"></span>Descargar App</a></li>
                    <li class="next class-mo"><a target="_blank" href="https://wa.me/573151412445" data="next"><span class="bi-whatsapp"></span>Soporte</a></li>
                    <li class="next class-mo"><a target="_blank" href="https://t.me/vid360p" data="next"><span class="bi-telegram"></span>Grupo Telegram</a></li>
                    <li class="next class-mo"><a target="_blank" href="${lin}" data="next"><span class="bi-link-45deg"></span>Web Oficial</a></li>
                    <li class="next oculto-1 class-mo"><a class="ocul-1 ocul" href="#" data="next"><span class="bi-stickies"></span>Copy Link</a></li>
                    <li class="next class-mo"><a  href="#" data="next"><span class="bi-gear-fill"></span>Versión 0.6</a></li>
                </div>
                
            </ul>
        </nav>
</header>

<div class="content-menu-f flexrow-c col-12">
<div class="menu-f flexrow-c col-12">
    <div class="m-f flexrow-c"><a href="${lin}/peliculas"><span class="bi-cone-striped"></span> Películas</a></div>
    <div class="m-f flexrow-c"><a href="${lin}/src/page/tv"><span class="bi-tv-fill"></span> TV En vivo</a></div>
    <div class="m-f flexrow-c"><a href="${lin}/series"><span class="bi-tv"></span> Series</a></div>
</div>
</div>

`

header.appendChild(divHeader);

let parametro = new URL(document.location).searchParams;
let existe = parametro.get('id');

if (existe === null) {
    document.querySelector(".oculto-0").style.display = "none";
    document.querySelector(".oculto-1").style.display = "none";
}if (screen.width > 800){
    document.querySelector(".oculto-0").style.display = "flex";
    document.querySelector(".oculto-1").style.display = "none";
}else{
    document.querySelector(".oculto-0").style.display = "flex";
    document.querySelector(".oculto-1").style.display = "flex";
}

let ocul_0 = document.querySelector(".ocul-0")
let ocul_1 = document.querySelector(".ocul-1")

if (screen.width < 1024) {
    ocul_0.classList.remove('ocul');
    ocul_1.classList.add('ocul');
}else{
    ocul_0.classList.add('ocul');
    ocul_1.classList.remove('ocul');
}
