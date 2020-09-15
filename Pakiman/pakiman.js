var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var victorios of coleccion)
{
  victorios.mostrar(victorios);
}

console.log(coleccion);

//var cauchin = new Pakiman("Cauchin", 100, 30);
//var pokacho = new Pakiman("Pokacho", 80, 50);
//var tocinauro = new Pakiman("Tocinauro", 120, 40);

//cauchin.mostrar();
//pokacho.mostrar();
//tocinauro.mostrar();
