let x = 0;

var themeButton = document.getElementById("theme-button");
if (themeButton) {themeButton.addEventListener("click", changeTheme);};

var lightMode = true;



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
	let amt = parseFloat(document.getElementById("amtQuant").value);
	let clc = parseFloat(document.getElementById("clcQuant").value);
	let pcb = parseFloat(document.getElementById("pcbQuant").value);
	let mmg = parseFloat(document.getElementById("mmgQuant").value);
	let aki = parseFloat(document.getElementById("akiQuant").value);
	let bdg = parseFloat(document.getElementById("bdgQuant").value);
	let totalQuant = amt + clc + pcb + mmg + aki + bdg;
	
	document.getElementById("inputInfo").textContent = "Quantity: " + totalQuant + "\nPrice: " + ((149.99*amt)+(199.99*clc)+(129.99*pcb)+(169.99*mmg)+(189.99*aki)+(39.99*bdg));
	return false;
}

function swapStyleSheet(sheet) {
    document.getElementById("pageStyle").setAttribute("href", sheet);
}

function changeTheme() {
	//let body = document.getElementsByTagName("body");
  
    /*var dark = document.getElementById("homeDarkSheet");

    light.onclick = swapStyleSheet("lightHome.css");
    dark.onclick = swapStyleSheet("darkHome.css");*/
	if (lightMode == true) {
		swapStyleSheet("darkHome.css");
		lightMode = false;
		themeButton.textContent = "Dark Mode";
	} else if (lightMode == false) {
		swapStyleSheet("lightHome.css");
		lightMode = true;
		themeButton.textContent = "Light Mode";
	}
	
}


