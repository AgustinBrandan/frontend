import React, { useContext } from "react";
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/ComprasPage.css';

const ComprasPage = () => {
  const { productos } = useContext(ProductosContext);
  const { agregarProducto } = useContext(CarritoContext);

  const handleClickAgregar = (producto) => {
    console.log(producto)
    agregarProducto(producto, 1); 
  };

  return (
    <div className="container">
      <h1>Productos: </h1>
      <hr />
      <div className="row">
        {productos.map((producto) => (
          <div key={producto._id} className="col-md-4">
            <Card
              productoId={producto._id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              handleClickAgregar={handleClickAgregar}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComprasPage;
