var h3=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("grad");


function set(){
    body.style.background= "linear-gradient(to right ,"+color1.value+","+color2.value+")";
    h3.textContent=body.style.background+";";
}


color1.addEventListener("input",set);


color2.addEventListener("input",set);


var a=1;
var b=2;

function add(a,b){
    return a+b;
    
};