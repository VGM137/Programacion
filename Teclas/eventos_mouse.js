var isDrawing = false;
var mouseDown = true;
var mouseMove = true;
var mouseUp = true;


document.addEventListener("mousedown", dibujarMouse);
document.addEventListener("mousemove", dibujarMouse);
document.addEventListener("mouseup", dibujarMouse);
var cuadro = document.getElementById("area_de_dibujo");
var lienzo = cuadro.getContext("2d");
var rect = cuadro.getBoundingClientRect();
var x = 0;
var y = 0;

function empezarDibujo () {
  isDrawing = true;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarMouse(evento)
{
  var coulor = "red";

  switch(evento.dibujarMouse)
  {
    case mouseDown:
      isDrawing = true;
      alert("mouseDown")
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      break;
    case mouseDown:
      isDrawing === true;
      dibujarLinea(coulor, x, y, e.clientX - rect.left, e.clientY - rect.top, lienzo)
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    break;
    case mouseDown:
      isDrawing === true;
      dibujarLinea(coulor, x, y, e.clientX - rect.left, e.clientY - rect.top, lienzo)
      x = 0
      y = 0
    break;
  }
//      console.log(evento)
}

// espacio de la linea de movimiento a traves de el numero de la resultante de el movimiento hecho hacia arriba en y y del hecho a la derecha en x para generar una diagonal
