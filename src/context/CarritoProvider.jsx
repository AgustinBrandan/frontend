import React, { useState, useEffect } from 'react';
import { CarritoContext } from './CarritoContext';

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState();

  
  const cargarCarrito = async () => {
    try {
        const response = await fetch(`http://localhost:5000/api/carrito`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      const data = await response.json(); 
    //   console.log(data._id)
      setCarrito(data);
    } catch (error) {
      console.error('Error al cargar el carrito:', error);
    }
  };

  useEffect(() => {
    return () => {
      cargarCarrito()
    }
  }, [])

  const agregarProducto = async (productoId, cantidad) => {
    try {
        console.log("CARRITO: ",carrito._id)
        console.log("Producto: ",productoId)
      const response = await fetch(`http://localhost:5000/api/carrito/${carrito._id}/productos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productoId, cantidad }),
      });

      const carritoActualizado = await response.json();
      console.log(carritoActualizado)
      setCarrito(carritoActualizado)
    } catch (error) {
      console.error('Error al agregar el producto al carrito:', error);
    }
  };

  

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

