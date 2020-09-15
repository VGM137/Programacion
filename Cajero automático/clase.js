class Billete
{
  constructor(v, c, n)
  {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.nombre = n;

    this.imagen.src = imagenes[this.nombre];
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles, bi.nombre));
      dinero = dinero - (bi.valor * papeles);
    }
  }

  if(dinero > 0)
  {
    resultado.innerHTML = "No hay dinero"
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
        resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + " " + e.nombre + " " + e.mostrar(e.imagen) + "<hr />"
      }
    }
  }

}


var imagenes = [];
imagenes["cincuenta"] = "50-dollar-bill-png-4.png";
imagenes["veinte"] = "20bill.png";
imagenes["diez"] = "US-Dollar-PNG-Download-Image.png";

var caja = [];

var entregado = []
caja.push(new Billete(50, 20, "cincuenta"));
caja.push(new Billete(20, 30, "veinte"));
caja.push(new Billete(10, 10, "diez"));
var dinero = 0
var div = 0
var papeles = 0

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);


console.log(caja);
