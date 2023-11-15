import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComprasPage from "./pages/ComprasPage";
import CarritoPage from './pages/CarritoPage';
import { ProductosProvider } from "./context/ProductosProvider";
import Navbar from "../src/components/Navbar";


export const App = () => {
  return (
    <Router>
      <ProductosProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ComprasPage />} />
            <Route path="/carrito" element={<CarritoPage />} />

          </Routes>
        </div>
      </ProductosProvider>
    </Router>
  );
};

export default App;
