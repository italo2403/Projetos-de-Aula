






function Gorjeta(){
	const gorjeta = parseFloat(document.querySelector('#gorjeta').value);
	const valor = (gorjeta * 0.10)
	document.querySelector('#resultado').innerHTML="O valor da Gorjeta é:" + valor+" "+"e o valor total é"+" " + (gorjeta+valor);
}


























