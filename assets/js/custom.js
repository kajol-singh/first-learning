

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

const colors = document.getElementById("rainbow");
const  array = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

for(var i = 0; i < array.length; i ++;){
  colors[i].style.color = array[i];
}
