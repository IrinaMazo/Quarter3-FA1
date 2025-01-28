var fn = prompt("Input first name", "0");
var ln = prompt("Input last name", "0");
var by = prompt("Input Birth year", "0");

	by= 2025-by;

document.getElementById("greeting").innerHTML = "Hello " + fn + " " + ln + "! How does it feel to be " + by + " years old?";