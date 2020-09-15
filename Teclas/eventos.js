var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
var shift = SHIFT: 16

document.addEventListener("keydown", dibujarTeclado);
  console.log();

var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("blue", 149, 149, 151, 151, papel);

//function estaPulsadoShift(event)
//{
  //dibujarLinea("blue", x, y, x + 10, y - 10, papel, event.shiftKey)
  //y = y - 10
  //x = x + 10
//}

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

if(shift)
  {
    alert(shift)
  }

function dibujarTeclado(evento)
{
  var coulor = "red";
  var movimiento = 10;

    switch(evento.keyCode)
    {
      case teclas.UP:
        dibujarLinea(coulor, x, y, x, y - movimiento, papel);
        y = y - movimiento;
      break;
      case teclas.DOWN:
        dibujarLinea(coulor, x, y, x, y + movimiento, papel);
        y = y + movimiento;
      break;
      case teclas.LEFT:
        dibujarLinea(coulor, x, y, x - movimiento, y, papel);
        x = x - movimiento;
      break;
      case teclas.RIGHT:
        dibujarLinea(coulor, x, y, x + movimiento, y, papel);
        x = x + movimiento;
      break;
  }
  console.log(evento.keyCode)
}


// espacio de la linea de movimiento a traves de el numero de la resultante de el movimiento hecho hacia arriba en y y del hecho a la derecha en x para generar una diagonal
