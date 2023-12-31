import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/CarritoPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export const CarritoPage = () => {
  const {
    carrito,
    eliminarProducto,
    eliminarCarrito,
    actualizarProducto,
  } = useContext(CarritoContext);

  if (!carrito.productos || carrito.productos.length === 0) {
    return <p>Carrito Vacío.</p>;
  }

  const handleEliminarProducto = (productoId) => {
    eliminarProducto(productoId);
  };

  const handleEliminarCarrito = () => {
    eliminarCarrito();
  };

  const BtnEliminarProducto = (productoId, cantidadActualProducto) => {
    const nuevaCantidad = cantidadActualProducto - 1;
    actualizarProducto(productoId, nuevaCantidad);
  };

  const BtnAgregarProducto = (productoId, cantidadActualProducto) => {
    const nuevaCantidad = cantidadActualProducto + 1;
    actualizarProducto(productoId, nuevaCantidad);
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Total</th>
            <th scope="col">Quitar/Agregar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {carrito.productos.map((producto) => {
            if (producto.cantidad > 0) {
              return (
                <tr key={producto._id}>
                  <td>{producto.nombreProducto}</td>
                  <td>{producto.precioUnitario}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.precioTotalProducto}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() =>
                        BtnEliminarProducto(
                          producto.producto,
                          producto.cantidad
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() =>
                        BtnAgregarProducto(
                          producto.producto,
                          producto.cantidad
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleEliminarProducto(producto.producto)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      <p>Precio Total: {carrito.precioTotal}</p>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          disabled={carrito.productos.length < 1}
        >
          COMPRAR
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleEliminarCarrito()}
          disabled={carrito.productos.length === 0}
        >
          Eliminar Carrito
        </button>
      </div>
    </>
  );
};

export default CarritoPage;