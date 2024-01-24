

/* 
  do not forget to add comments and follow good coding standards 
*/

function bitcoinGraph(value) {
	
	if (value == "bitcoin") {
		document.getElementById("cryptocurrency").innerHTML = '<img id="cryptoImage" src="Images/cryptoImage.png" <br> <br> <h1> 1 Bitcoin = 2,238,287.42 Philippine Peso </h1>' +
		'<br> <h2 id="cc-text"> Input value: </h2> <input id="ccinput" type="number"> <button onclick="bcToPhp(Number(ccinput.value))"> Enter </button> ';
	}
	else {
		document.getElementById("cryptocurrency").innerHTML = " ";
	}
}

function bcToPhp(value) {
	document.getElementById("ccoutput").innerHTML =  value*2238287.42 + ' Php' ;
}