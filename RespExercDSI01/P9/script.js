
function Desconto(){
	let salario = parseFloat(document.querySelector('#desc').value);
	const desconto = (salario * 0.11) 
	
	
	if( desconto >= 334.29){
		document.querySelector('#resultado').innerHTML="O desconto foi de :" +desconto;	
		alert("Desconto maior do que a taxa pode conceder")
	}else{
		document.querySelector('#resultado').innerHTML="O desconto foi de :" +desconto;	
		alert('Desconto Concedido');
	}
}

























