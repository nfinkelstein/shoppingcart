import React, { useState, useEffect } from "react";
import ProductGrid from "./ProductGrid";
import Sizes from "./Sizes";
import CartMenu from "./CartMenu";

const MasterStatus = props => {
  const [inCart, setCart] = useState([]);

  const addItem = item => {
    var cartCopy = inCart.slice();
    var flag = false;

    for (var i = 0; i < cartCopy.length; i++) {
      if (cartCopy[i].sku == item.sku) {
        flag = true;
      }
    }

    if (flag) {
      for (var i = 0; i < cartCopy.length; i++) {
        if (cartCopy[i].sku == item.sku) {
          cartCopy[i].qty += 1;
        }
      }
    } else {
      item.qty = 1;
      cartCopy.push(item);
    }
    setCart(cartCopy);
  };

  const deleteItem = item => {
    var cartCopy = inCart.slice();

    for (var i = 0; i < cartCopy.length; i++) {
      if (cartCopy[i].sku == item.sku) {
        cartCopy.splice(i, 1);
        console.log("SLICING");
        console.log(cartCopy);
      }
    }

    setCart(cartCopy);
  };

  const add = (accumulator, a) => {
    return accumulator + a.price * a.qty;
  };

  const cost = inCart.reduce(add, 0);

  return (
    <section>
      <div>
        <div className="viewCart">
          <CartMenu items={inCart} cost={cost} deleteItem={deleteItem} />
        </div>
        <div className="sizes">
          <Sizes />
        </div>
        <ProductGrid products={props.products} addItem={addItem} />
      </div>
    </section>
  );
};

export default MasterStatus;
