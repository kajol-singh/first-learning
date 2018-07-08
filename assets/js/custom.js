

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

 var i = 0;
function myFunction(){
const listItems = document.getElementById('rainbow');
const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for(i = 0; i < colors.length; i ++) {
  listItems[i].style.color = colors[i];
}
}
