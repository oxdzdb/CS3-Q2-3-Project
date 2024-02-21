let x = 

function bitcoinGraph(value) {

  if (value == "bitcoin") {
    document.getElementById("cryptocurrency").innerHTML = '<img id="cryptoImage" src="images/cryptoImage.png">' + 
      '<br> <br> <h1> 1 Bitcoin = 2,238,287.42 Philippine Peso </h1> <br> ' + 
      '<h2 id="cc-text"> Input value: </h2> <input id="ccinput" type="number"> ' +
      '<button onclick="bcToPhp(Number(ccinput.value))"> Enter </button> <br> <h2> In Philippine Peso: </h2>';
  }
  else {
    document.getElementById("cryptocurrency").innerHTML = '  ';
  }
}

function bcToPhp(value) {
  document.getElementById("ccoutput").innerHTML =  value*2238287.42 + ' Php' ;
}

function price(x , y){
  
  alert(x + y + " is a great choice!");
}

function cartDisplay(){
	let x = document.getElementById("bdgQuant").value
	
	document.getElementById("inputInfo").innerHTML = "Quantity: " + x + "<br>" + "Price: " + 39.99*x;
}


