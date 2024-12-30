const footer = document.querySelector("#footer")

footer.innerHTML = `

<div class="footer col-12 flexrow-c">
<div class="col-12 flexrow-c">
    <div class="col-12 flexrow-c"><p class="colore">From - B!LOA</p></div>
    <div class="col-12 flexrow-c"><p class="colore">© 2024 Video 360p. All rights reserved.</p></div>
</div>
</div>
<style>
html, body{height: 100%;margin: 0;display: flex;flex-direction: column;}
.footer .flexrow-c{
    padding: 0px;
}

#footer{padding: 0px;}
.footer .flexrow-c .colore{
margin-bottom: 0px;
font-size: 12px;
}
.footer{
    background:#242424;
    padding: 10px;
  
}
/*
@media screen and (max-width:800px ) {
    .footer{
        position: fixed;
        bottom: 0;
        z-index: 991;
  
    }
}
*/
</style>



`