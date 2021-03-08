var mouseEvent="";
var last_position_of_x,last_position_of_y;
var canvas = document.getElementById("myCanvas");
var CTX =canvas.getContext("2d");
var color="black"
var width_of_line=1;


canvas.addEventListener("mousedown",md);
function md(e){
    color=document.getElementById("colorText").value;
    width_of_line=document.getElementById("WidthText").value;
    radius=document.getElementById("Radius").value;
    
    mouseEvent="mousedown";
    console.log(mouseEvent)
}
canvas.addEventListener("mousemove",mm);
function mm(e){
    var current_position_of_x=e.clientX-canvas.offsetLeft;
    var current_position_of_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        
        CTX.beginPath();
        CTX.strokeStyle=color;
        CTX.lineWidth=width_of_line;
        CTX.arc(current_position_of_x,current_position_of_y,radius,0,2*Math.PI);
        CTX.stroke();
    }
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
    console.log("mousemove")
}
canvas.addEventListener("mouseup",mu);
function mu(e){
    mouseEvent="mouseup";
    console.log(mouseEvent)

}
canvas.addEventListener("mouseleave",ml);
function ml(e){
    mouseEvent="mouseleave";
    console.log(mouseEvent)

}
function clear_area(){
    CTX.clearRect(0,0,canvas.width,canvas.height);
    
}


