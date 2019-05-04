import "./App.css";
import React, { useState, useEffect } from "react";
import ProductGrid from "./Components/ProductGrid";
import Sizes from "./Components/Sizes";

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
      <div>
        <div className="sizes">
          <Sizes />
        </div>
        <ProductGrid products={products} />
      </div>
    </section>
  );
};

export default App;
