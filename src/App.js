import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  //Crear listado de prodocutos
  const [productos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: "$50" },
    { id: 2, nombre: "Camisa VueJS", precio: "$40" },
    { id: 3, nombre: "Camisa Node.JS", precio: "$30" },
    { id: 4, nombre: "Camisa AngularJS", precio: "$20" },
  ]);

  // State para carrito de compras
  const [carrito, agregarProducto] = useState([]);

  //Obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" />
      <h1>Lista de Productos</h1>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}
      <Carrito carrito={carrito} />
      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
