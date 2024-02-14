import Productos from './Components/Products';
import Menu from './Components/Menu';
import './index.css';
import { useEffect, useState } from "react";

export default function App() {
  const [productos, setProductos] = useState([]);

  const initialUrl = "https://fakestoreapi.com/products";

  const fetchProducts = (url) => {
    fetch(url)
      .then(res=>res.json())
      .then(json=>setProductos(json))
      .catch(error => console.error("Error fetching products:", error));
    };

  useEffect(() => {
    fetchProducts(initialUrl);
  }, []);

  return (
    <>
      <Menu titulo1="Store" subtitulo1="Products" href1="#container-cards"/>
      <div className="container-cards flex justify-center text-center px-10 py-[2%] sm:px-40 md:px-20 lg:px-52 xl:px-72" id='container-cards'>
        <Productos productos={productos} colorTitulo="#000" colorParrafo="#00009" tamañoParrafo="15px" fontCant="18px" fontSize="18px"/>
      </div>
    </>
  );
};