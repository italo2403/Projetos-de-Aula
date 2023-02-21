


//Resposta 5

function Temperatura(){
	
	let temp = parseFloat(document.querySelector("#temp").value);
	const conver= Math.round(5 * (temp-32) / 9)*1;
	
	document.querySelector("#resultado").innerHTML="A Temperatura é:" + conver;
	
}







