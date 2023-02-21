

//Resposta 02
function Calcular(){
	let base = parseFloat(document.querySelector("#base").value);
	let altura = parseFloat(document.querySelector("#altura").value);
	document.querySelector("#resultado").innerHTML="O resultado é:" + ((base * altura )/2);
}

