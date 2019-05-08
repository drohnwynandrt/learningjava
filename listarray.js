var fruit = ["Apple", "Banana", "Pear", "Orange", "Lemon", "Grape"];
var text = "<ol>";
var f;

for (f=0; f < fruit.length; f++){
text +="<li>" + fruit[f] + "</li>";
}
document.getElementById("fruit").innerHTML = text+= "</ol>";
