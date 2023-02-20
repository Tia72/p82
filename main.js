var mouseEvent=""
var color=""
var radius=""
var width=""

canvas
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventlistener("mousedown", my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}

canvas.addEventlistener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventlistener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventlistener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        console.log("Current position of x and y coordinatetes = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    mouseEvent="mousemove";
}