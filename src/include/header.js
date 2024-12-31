const header = document.querySelector("#include-header");

let divHeader = document.createElement("div")
divHeader.innerHTML = `
<header>
    
    <div class="menu_bar">
        <div class="bt-menu"><img src="https://loadigital.github.io/video360p/img/LOGO12.png" alt=""><span class="bi-list" id="menu_bar"></span></div>
     </div>
        
        <nav>
            <ul class="ul-main">
                
                <div class="contenedor_list flexrow-c col-12">
                    <a class="flexrow-c a-lo" href="#" data="next"><img class="img-logo" src="https://loadigital.github.io/video360p/img/LOGO12.png" alt=""></a>
                    
                    <li class="next"><a href="https://loadigital.github.io/video360p/" data="next"><span class="bi-house"></span>Inicio</a></li>
            
                    <li class="next"><a href="/video360p/peliculas" data="next"><span class="bi-cone-striped"></span>Películas</a></li>
                    <li class="next"><a href="/video360p/series" data="next"><span class="bi-tv"></span>Series</a></li>
                    
                    <li class="btn--"  id="btn--"><a href="#" data="next"><span class="bi-collection-play-fill"></span>Genero</a>
                        <ul class="hidden" id="hidden">
                            <li class="next"><a href="/video360p/src/genres/genero?g=16" data="next"><span class="bi-folder2-open"></span>Animación</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=12" data="next"><span class="bi-folder2-open"></span>Aventura</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=10752" data="next"><span class="bi-folder2-open"></span>Bélico</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=878" data="next"><span class="bi-folder2-open"></span>Ciencia ficción</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=35" data="next"><span class="bi-folder2-open"></span>Comedia</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=80" data="next"><span class="bi-folder2-open"></span>Crimen</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=99" data="next"><span class="bi-folder2-open"></span>Documental</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=18" data="next"><span class="bi-folder2-open"></span>Drama</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=10751" data="next"><span class="bi-folder2-open"></span>Familia</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=14" data="next"><span class="bi-folder2-open"></span>Fantasia</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=36" data="next"><span class="bi-folder2-open"></span>Historia</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=9648" data="next"><span class="bi-folder2-open"></span>Misterio</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=10749" data="next"><span class="bi-folder2-open"></span>Romance</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=53" data="next"><span class="bi-folder2-open"></span>Suspenso</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=27" data="next"><span class="bi-folder2-open"></span>Terror</a></li>
                            <li class="next"><a href="/video360p/src/genres/genero?g=28" data="next"><span class="bi-folder2-open"></span>Acción</a></li>
    
                            
                        </ul>
                    </li>                  
                    

                    <li class="btn-- class-web"><a id="btn--" href="#" data="next"><span class="bi-three-dots-vertical"></span>Mas Opciones</a>
                        <ul class="hidden" id="hidden">
        
                            <li class="next"><a target="_blank" href="https://loadigital.github.io/video360p/app/descargarApp.html" data="next"><span class="bi-android2"></span>Descargar App</a></li>
                            <li class="next"><a target="_blank" href="https://t.me/vid360p" data="next"><span class="bi-telegram"></span>Grupo Telegram</a></li>
                            <li class="next"><a  href="#" data="next"><span class="bi-gear-fill"></span>Versión 0.1</a></li>
                        </ul>
                    
                    </li>
                    
                    <li class="btn--"><a id="btn--" href="#" data="next"><span class="bi-search"></span>Buscador...</a>
                        <ul class="hidden" id="hidden">
                            <li class="next"><a href="/video360p/search&id=uno" data="next"><span class="bi-folder2-open"></span>Películas</a></li>
                            <li class="next"><a href="/video360p/search&id=dos" data="next"><span class="bi-folder2-open"></span>Series</a></li>
                        </ul>
                    
                    </li>

                    <li class="next class-mo"><a target="_blank" href="https://loadigital.github.io/video360p/app/descargarApp.html" data="next"><span class="bi-android2"></span>Descargar App</a></li>
                    <li class="next class-mo"><a target="_blank" href="https://t.me/vid360p" data="next"><span class="bi-telegram"></span>Grupo Telegram</a></li>
                    <li class="next class-mo"><a  href="#" data="next"><span class="bi-gear-fill"></span>Versión 0.3</a></li>
                </div>
                
            </ul>
        </nav>
</header>


`

header.appendChild(divHeader);
