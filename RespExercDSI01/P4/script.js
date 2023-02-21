

//Resposta 04

function Maior(){
	let v1 = document.querySelector("#v1").value;
	let v2 = document.querySelector("#v2").value;
	let v3 = document.querySelector("#v3").value;
	
	if( v1 > v2 && v1 > v3){
		document.querySelector("#resultado").innerHTML="Valor 1 é maior" +" "+ v1;
	}else if(v2 > v3 && v2 > v1){
		document.querySelector("#resultado").innerHTML="Valor 2 é maior" +" "+ v2;
	}else if(v3 > v2 && v3 > v1){
		document.querySelector("#resultado").innerHTML="Valor 3 é maior" +" "+ v3;
	}else{
		document.querySelector("#resultado").innerHTML="Por favor, insira um número";
	}
}



