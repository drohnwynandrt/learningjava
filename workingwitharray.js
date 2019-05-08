var cat = ["hoefdier", "vis", "vogel"];
var dier = ["paard", "goudvis", "mus"];
var textone;
var texttwo;
var i;

for (i=0; i < dier.length; i++){
textone = dier[i];
}

for (i=0; i < cat.length; i++){
texttwo = cat[i];
}

document.getElementById("output").innerHTML += "de " + textone + " behoort tot de " + texttwo+" <br>";