
import * as header from "../src/include/header.js";

import * as footer from "../src/include/footer.js";


$(window).load(function(){$("#loader-wrapper").delay(1500).fadeOut("slow");});
document.querySelector("#loading").innerHTML = `
<style>
    #loader-wrapper {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
	background: #0c111f
    }

    #preloader {
	display: block;
	position: relative;
	left: 50%;
	top: 50%;
	width: 150px;
	height: 150px;
	margin: -75px 0 0 -75px;
	border-radius: 50%;
	border: 3px solid transparent;
	border-top-color: #dc7612;
	-webkit-animation: spin 2s linear infinite;
	animation: spin 2s linear infinite;
	z-index: 1001
    }

    #preloader:before {
	content: "";
	position: absolute;
	top: 5px;
	left: 5px;
	right: 5px;
	bottom: 5px;
	border-radius: 50%;
	border: 3px solid transparent;
	border-top-color: #dc7612;
	-webkit-animation: spin 3s linear infinite;
	animation: spin 3s linear infinite
    }

    #preloader:after {
	content: "";
	position: absolute;
	top: 15px;
	left: 15px;
	right: 15px;
	bottom: 15px;
	border-radius: 50%;
	border: 3px solid transparent;
	border-top-color: #dc7612;
	-webkit-animation: spin 1.5s linear infinite;
	animation: spin 1.5s linear infinite
    }

    @-webkit-keyframes spin {
	0% {
		-webkit-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		transform: rotate(0deg)
	}
	100% {
		-webkit-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		transform: rotate(360deg)
	}
    }

    @keyframes spin {
	0% {
		-webkit-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		transform: rotate(0deg)
	}
	100% {
		-webkit-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		transform: rotate(360deg)
	}
    }
    </style>
    <div id="loader-wrapper">
        <div id="preloader"></div>
    </div>

`

document.querySelector("#scalar").innerHTML = `

<style>
        .scalar{position:fixed;bottom:50px;z-index:9;right:20px;padding: 2px 10px;color: #fff;font-size: 30px;border-radius: 20px;}
        .scalar .bi-arrow-up-circle-fill{color: #ffffff; font-size: 50px;}
        .scalar .bi-arrow-up-circle-fill:hover{color: #dc7612;cursor: pointer;}
</style>
<div class="scalar"><i class="bi-arrow-up-circle-fill" id="bot-arriba"></i></div>
`
