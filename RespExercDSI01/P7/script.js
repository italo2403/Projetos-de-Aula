

//resposta 9
function Salario(){
	let salario = parseFloat(document.querySelector("#salario").value)
	
	if( salario >= 280){
		document.querySelector('#resultado').innerHTML="O salário é:" +((salario * 0.02)+salario);
	}else if ( salario >= 280 && salario < 700){
		document.querySelector('#resultado').innerHTML="O salário é:" +((salario * 0.15)+salario);
}else if ( salario >= 700 && salario < 1500){
		document.querySelector('#resultado').innerHTML="O salário é:" +((salario * 0.10)+salario);
}else if ( salario >= 1500){
		document.querySelector('#resultado').innerHTML="O salário é:" +((salario * 0.05)+salario);
}else{
	document.querySelector('#resultado').innerHTML="O valor informado não é passível de leitura.";
}

}






















