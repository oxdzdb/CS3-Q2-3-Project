

/* 
  do not forget to add comments and follow good coding standards 
*/

function bitcoinGraph(value) {
	
	if (value == "bitcoin") {
		document.getElementById("cryptocurrency").innerHTML = '<img id="cryptoImage" src="Images/cryptoImage.png">';
	}
	else {
		document.getElementById("cryptocurrency").innerHTML = " ";
	}
}

