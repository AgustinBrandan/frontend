import React, { useState, useEffect } from 'react';
import { CarritoContext } from './CarritoContext';

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState();

  
  const crearCarrito = async () => {
    try {
        const response = await fetch(`http://localhost:5000/api/carrito`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      const data = await response.json(); 
      setCarrito(data);
    } catch (error) {
      console.error('Error al cargar el carrito:', error);
    }
  };

  const productosCarrito = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/carrito/${carrito._id}/productos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setCarrito(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        await crearCarrito();
        await productosCarrito();
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };
  
    cargarDatos();
  }, []);


  const agregarProducto = async (productoId, cantidad) => {
    try {
      const response = await fetch(`http://localhost:5000/api/carrito/${carrito._id}/productos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productoId, cantidad }),
      });
      //Como tengo el get no necesito setear el carrito
      // const carritoActualizado = await response.json();
      // setCarrito(carritoActualizado)
      
    } catch (error) {
      console.error('Error al agregar el producto al carrito:', error);
    }
    productosCarrito()
  };

  const actualizarProducto = async (productoId, nuevaCantidad) => {
    try {
      await fetch(`http://localhost:5000/api/carrito/${carrito._id}/producto/${productoId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cantidad: nuevaCantidad }), 
      });

    } catch (error) {
    }
    productosCarrito()
  };

  const eliminarProducto = async (productoId) => {
    try {
      await fetch(`http://localhost:5000/api/carrito/${carrito._id}/producto/${productoId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
    }
    productosCarrito()
  };

  const eliminarCarrito = async () => {
    try {

       await fetch(`http://localhost:5000/api/carrito/${carrito._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
    }
    productosCarrito()
  };
  

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        actualizarProducto,
        eliminarProducto,
        eliminarCarrito
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

