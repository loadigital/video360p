const index = document.querySelector("#index")

index.innerHTML = `
<section class="peliculas-online col-12 flexrow-c">
    
        <div class="contenedor-cards-main col-12 flexrow-c">
            
    
            <div class="col-12">
                <div class="text-t col-3 flexrow-de"><h1>Películas Online</h1></div>
                <div class="menu-page col-8 flexrow-de">
                    <p class="active-" data-target="#ultimas">ÚLTIMAS</p>
                    <p data-target="#tendencias">PUNTUACIÓN MAS ALTA</p>
                    <p data-target="#estrenos">ESTRENOS 2024</p>
                </div>
            </div>
           
        
                <div class="active" data-content id="ultimas">
                    <div class="co-cardss grid-1" id="co-cardss"></div>
                </div>
        
                <div data-content id="tendencias">
                    <div class="co-cardss grid-1" id="co-cardss-tendencias"></div>
                </div>
        
                <div data-content id="estrenos">
                    <div class="co-cardss grid-1" id="co-cardss-estrenos"></div>
                </div>
        
        
                <div class="bo-vermas col-12 flexrow-c">
                    <a class="bot-1 flexrow-c" href="https://360p.biloa.store/peliculas"><i class="bi-cone-striped"></i> Cargar mas películas</a>
                </div>
    
                
        </div>
    </section>
    
    <section class="series-online col-12 flexrow-c">
        
        <div class="contenedor-cards-main col-12 flexrow-c">
            
    
            <div class="col-12">
                <div class="text-t col-3 flexrow-de"><h1>Series Online</h1></div>
                <div class="menu-page- col-8 flexrow-de">
                    <p class="active--">ÚLTIMAS</p>
                </div>
            </div>
                <div>
                    <div class="co-cardss grid-1" id="co-cardss-series"></div>
                    
                </div>
        
                <div class="bo-vermas col-12 flexrow-c">
                    <a class="bot-1 flexrow-c" href="https://www.biloa.store/series"><i class="bi-tv"></i>Cargar mas series</a>
                </div>
    
            
        </div>
       
    </section>

`

    const ultimas = document.getElementById("co-cardss");
    const tendencias = document.getElementById("co-cardss-tendencias");
    const estrenos = document.getElementById("co-cardss-estrenos");
    const ultimasSeries = document.getElementById("co-cardss-series");

    document.addEventListener('DOMContentLoaded', () => {
        fetchData();
    });
    
    const fetchData = async () => {
       try{
           const res = await fetch('https://loadigital.github.io/video360p/js/movies.json');
           const data = await res.json();
           pintarIndex(data);
       }catch (error) {
           console.log(error);
       }
    }
    const pintarIndex = data => {
        function pintar(data){
            return [...data].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 8)
          }
          
        const newArrayNew = data.toReversed().slice(0, 8);
        newArrayNew.forEach(element => {

            const  API_URL  =  BASE_URL  +  '/movie/' + element.id + '?' + API_KEY + '&language=es-ES';//CODIGO TMBD
            
            getMovie(API_URL);

            function getMovie(url){
            fetch(url).then(res => res.json()).then(data =>{
                 console.log(data)
                 pintar(data);
                });
            };

        function pintar(data){
            
        const card = document.createElement("div");
            
            card.innerHTML += `
            <div class="card">
                <div class="card-img">
                    <a href="${linkMovies + element.id + '&v_id=' + element.video + '&cal=' + element.calidad}"><img class="img-card" src="${IMG_URL + data.poster_path}" alt=""></a>
                </div>
                <div class="card-body">
    
               <div class="title-card"><h1 class="colore">${element.title}</h1></div>
                </div>
            </div> 
            `
            ultimas.appendChild(card)
        
        } 
     
    })
 
    data.toReversed().forEach(element => {
    if(element.puntuacion >= "7.9"){
    
            const  API_URL_P  =  BASE_URL  +  '/movie/' + element.id + '?' + API_KEY + '&language=es-ES';//CODIGO TMBD
            
            getMoviep(API_URL_P);

            function getMoviep(url){
            fetch(url).then(res => res.json()).then(data =>{
                 console.log(data)
                 pintar(data);
                });
            };

        function pintar(data){
    
    const cardTendencias = document.createElement("div");
    
    cardTendencias.innerHTML += `
    <div class="card">
        <div class="card-img">
            <a href="${linkMovies + element.id + '&v_id=' + element.video + '&cal=' + element.calidad}"><img class="img-card" src="${IMG_URL + data.poster_path}" alt=""></a>
        </div>
        <div class="card-body">
       
        <div class="title-card"><h1 class="colore">${element.title}</h1></div>
        
        </div>
    </div> 
    `
    tendencias.appendChild(cardTendencias)
    }
    }
    })
    
    
    data.toReversed().forEach(element => {
        if(element.año === "2024"){
    
            const  API_URL_A  =  BASE_URL  +  '/movie/' + element.id + '?' + API_KEY + '&language=es-ES';//CODIGO TMBD
            
            getMoviea(API_URL_A);

            function getMoviea(url){
            fetch(url).then(res => res.json()).then(data =>{
                 console.log(data)
                 pintar(data);
                });
            };

        function pintar(data){
    const cardEstrenos = document.createElement("div");
    
    cardEstrenos.innerHTML += `
    <div class="card">
        <div class="card-img">
            <a href="${linkMovies + element.id + '&v_id=' + element.video + '&cal=' + element.calidad}"><img class="img-card" src="${IMG_URL + data.poster_path}" alt=""></a>
        </div>
        <div class="card-body">
       
        <div class="title-card"><h1 class="colore">${element.title}</h1></div>
        
        </div>
    </div> 
    `
    estrenos.appendChild(cardEstrenos)
    };
    };
    });
    };//end peiculas

    document.addEventListener('DOMContentLoaded', () => {
        fetchSeries();
    });
    
    const fetchSeries = async () => {
       try{
           const res = await fetch('https://loadigital.github.io/video360p/js/series.json');
           const data = await res.json();
           pintarSeries(data);
       }catch (error) {
           console.log(error);
       }
    }

    
    const pintarSeries = data => {     
    const newJson = data.toReversed().slice(0, 8);
    newJson.forEach(element => {
        const cardSeriesUltimas = document.createElement("div");
    
    cardSeriesUltimas.innerHTML += `
    <div class="card">
        <div class="card-img">
            <a href="${linkSeries + element.id + '&v_id=' + element.video}"><img class="img-card" src="${element.img}" alt=""></a>
        </div>
        <div class="card-body">
       
        <div class="title-card"><h1 class="colore">${element.title}</h1></div>
        
        </div>
    </div> 
    `
    ultimasSeries.appendChild(cardSeriesUltimas)
    })
    }
