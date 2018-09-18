// Main Script file

var bubbles = "O";
var blowBtn = document.getElementById("blowBtn");
var bubblesArea = document.getElementById("bubblesArea");
var body = document.getElementsByTagName("body")[0];

blowBtn.addEventListener("click",blow);
function blow(){
	bubblesArea.innerHTML += '<div style="color:' + getRandomColor() + ';animation-duration:' + Number(Math.round(Math.random() * 8) + 2) + 's; font-size:' + Number(Math.round(Math.random() * 200) + 50) + 'px; top:' + Number(Math.round(Math.random() * 50) + 100) + '%; left:' + Math.round(Math.random() * 100) + '%;" class="bubbles float">' + bubbles + '</div>';
	//blow code
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}