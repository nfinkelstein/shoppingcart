import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const url = "./products.json";

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      const { products: product } = json;
      const productList = Object.values(product);
      setProducts(productList);
    };
    fetchProducts();
  }, []);

  return (
    <section>
      <div className="container menu" />
      {products.map((item, index) => (
        <li>{item.title}</li>
      ))}
    </section>
  );
};

export default App;
