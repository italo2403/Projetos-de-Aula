


//Modo Claro e Escuro do Template
/**/


function claro(){
	document.getElementById('myImage').src='./img/1815485.png'
}
function escuro(){
	document.getElementById('myImage').src='./img/702814.png'
}
let seletor_escuro = document.querySelector("button");

function Escuro(){
	document.body.style.backgroundColor= "#000";
	document.querySelector('#img').innerHTML=claro();
	
}

let seletor_claro = document.querySelector("button");
let texto_claro = document.querySelector("p")
function Claro(){
	document.body.style.backgroundColor= "#FFF";
	document.querySelector('#img').innerHTML=escuro();
	
}

























