const carrusel = document.querySelector("#include-carrusel")


document.addEventListener('DOMContentLoaded', () => {
    fetchDatac();
});

const fetchDatac = async () => {
   try{
       const res = await fetch('../../js/movies.json');
       const data = await res.json();
       pintarCarrusel(data);
   }catch (error) {
       console.log(error);
   }
}
const pintarCarrusel = data => {

    function carrusel(data){
        return [...data].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 1)
      }

   
      carrusel(data).forEach(element => {

        const  API_URL_C  =  BASE_URL  +  '/movie/' + element.id + '?' + API_KEY + '&language=es-ES';//CODIGO TMBD
        
        getMoviec(API_URL_C);

        function getMoviec(url){
        fetch(url).then(res => res.json()).then(data =>{
             console.log(data)
             pintar(data);
            });
        };

    function pintar(data){

document.getElementById("main-carrusel").innerHTML = `
<style>
        .button-carrusel {padding: 0px;}
        .button-carrusel .bot-1{width: 20%;font-size: 18px; background: #dc7612;}
        .button-carrusel a{text-decoration: none;}
        ._pgenres{margin-right: 4px;}
        @media screen and (max-width:800px ) {
            .button-carrusel .bot-1{width: 30%;font-size: 14px;}
        }
    </style>
<style>
 #main-carrusel{
  background: linear-gradient(rgba(0,0,0,0.2) 0%,rgb(0, 0, 0) 100%),
  url(${IMG_URL + data.backdrop_path});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 30.62em;
  align-items: center;
    }
@media screen and (max-width:800px ) {
#main-carrusel{
    height: 15.62em;
}
}
</style>
<div class="col-12 flexrow-c">
    <div class="title-carrusel col-12 flexrow-c"><h2>${data.title}</h2></div>
    <div class="genres-carrusel col-12 flexrow-c"></div>
    <div class="col-12 flexrow-c"><i class="bi-star-fill"></i><i class="bi-star-half"></i><i class="bi-star"></i><p class="puntuacion"> ${data.vote_average.toFixed(1)}</p></div>
    <div class="resumen-carrusel col-12 flexrow-c"><p>${element.año}</p></div>
    <div class="button-carrusel col-12 flexrow-c"><a class="col-12 flexrow-c" href="${linkMovies + element.id + '&v_id=' + element.video + '&cal=' + element.calidad}"><button class="bot-1">Ver Ahora</button></a></div>
</div>

`
const _div = document.querySelector(".genres-carrusel");

data.genres.forEach(genres =>{
const _pgenres = document.createElement("p");
_pgenres.className="_pgenres"
_pgenres.innerHTML = `${genres.name + ","}`
    _div.appendChild(_pgenres);
    
});
};
});
}
