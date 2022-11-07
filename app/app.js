alert("BIENVENIDO AL ÁREA DE COMPRAS DE CERVEZA TEXCOCO");

let edad = prompt("Ingresa tu edad");

const verificacionEdad = () => {
  while (isNaN(edad)) {
    edad = prompt("Ingresa tu edad");
  }
  while (edad == "") {
    edad = prompt("Ingresa tu edad");
  }

  if (edad >= 18) {
    alert("Bienvenido");
  } 
  else {
    alert("Venta prohibida a menores de edad");
    location.reload();
    throw new Error("Venta prohibida a menores de edad");
  }
};
verificacionEdad();

alert(`Te mostramos nuestra carta de cervezas artesanales`);


let carta = [
  {
    articulo: "Cerveza Pale Ale",
    precio: 40,
  },
  {
    articulo: "Cerveza Sweet Stout",
    precio: 45,
  },
  {
    articulo: "Cerveza Porter",
    precio: 55,
  },
];

let carrito = [];


const mostrarCarta = () => {
  let precios = "";
  for (let i = 0; i < carta.length; i++) {
    precios += `${i} - ${carta[i].articulo} - $${carta[i].precio} \n`;
  }
  return precios;
};
let seleccion = prompt(mostrarCarta());


const verificacionSeleccion = () => {
  while (isNaN(seleccion)) {
    alert("Ingrese un numero");
    seleccion = prompt(mostrarCarta());
  }
  while (seleccion == "") {
    alert("Ingrese un numero");
    seleccion = prompt(mostrarCarta());
  }
  while (seleccion < 0 || seleccion > carta.length - 1) {
    alert("Producto no existente");
    seleccion = prompt(mostrarCarta());
  }
};
verificacionSeleccion();

carrito.push(carta[seleccion]);

alert(`${carta[seleccion].articulo} agregado al carrito de compras`);

let continuarCompra = prompt("¿Quieres agregar otro producto a tu carrito? \n si para seguir comprando \n no para proceder al pago");
const verificacionRespuesta = () => {
  while (continuarCompra != "si" && continuarCompra != "no") {
    continuarCompra = prompt("¿Quieres agregar otro producto a tu carrito? \n si para seguir comprando \n no para proceder al pago");
  }
  while (continuarCompra == "") {
    continuarCompra = prompt("¿Quieres agregar otro producto a tu carrito? \n si para seguir comprando \n no para proceder al pago");
  }
};
verificacionRespuesta();

const agregarProducto = () => {
  if (continuarCompra == "si") {
    seleccion = prompt(mostrarCarta());
    verificacionSeleccion();
    carrito.push(carta[seleccion]);
    alert(`${carta[seleccion].articulo} agregado al carrito de compras`);
    continuarCompra = prompt("¿Quieres agregar otro producto a tu carrito? \n si para seguir comprando \n no para proceder al pago");
    verificacionRespuesta();
    agregarProducto();
  } 
  else { 
    const compra = () => {
      let resumenCompra = `Resumen de compra: \n`;
      carrito.forEach((producto) => {
        resumenCompra += `${producto.articulo} - $${producto.precio} \n`;
      });
      const total = carrito.reduce((acc, item) => acc + item.precio, 0);
      resumenCompra += `Su total es de $${total}`;
      return resumenCompra;
    };
    alert(compra());
  }
};
agregarProducto();