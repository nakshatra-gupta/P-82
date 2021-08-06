var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouseEvent = "Empty";
var last_position_of_x ;
var last_position_of_y ;
var color = "Black";
var width = 5;
var radius_Value = 20;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
     current_position_mouse_x = e.clientX-canvas.offsetLeft;
     current_position_mouse_y = e.clientY-canvas.offsetTop;

    if (mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        
        console.log("last position of x and y is =");
        console.log("x = " + last_position_of_x + "and y =" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current position of x and y is =");
        console.log("x = " + current_position_mouse_x + "and y =" + current_position_mouse_y);
        ctx.lineTo(current_position_mouse_x, current_position_mouse_y);
        ctx.arc(current_position_mouse_x, current_position_mouse_y, radius_Value, 0, 2 * Math.PI);
        ctx.stroke();
    }
    last_position_of_x = current_position_mouse_x;
    last_position_of_y = current_position_mouse_y;
}
function ClearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}