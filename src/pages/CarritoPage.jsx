import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
  const { carrito } = useContext(CarritoContext);

  if (!carrito.productos || carrito.productos.length === 0) {
    return <p>Carrito Vacío.</p>;
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {carrito.productos.map((producto) => (
            <tr key={producto._id}>
              <th>{producto.nombre}</th>
              <td>{producto.precio}</td>
              <td>{producto.cantidad}</td>
              <td>
                <button className="btn btn-outline-primary">-</button>
                <button className="btn btn-outline-primary">+</button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  // onClick={() => eliminarCompra(producto.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          disabled={carrito.productos.length < 1}
        >
          COMPRAR
        </button>
      </div>
    </>
  );
};

export default CarritoPage;
