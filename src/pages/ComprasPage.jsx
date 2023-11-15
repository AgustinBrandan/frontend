import React, { useContext } from "react";
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/ComprasPage.css'; 


const ComprasPage = () => {
  const { productos } = useContext(ProductosContext);

  return (
    <div className="container">
      <h1>Productos: </h1>
      <hr />
      <div className="row">
        {productos.map((producto) => (
          <div key={producto._id} className="col-md-4">
            <Card
              titulo={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComprasPage;