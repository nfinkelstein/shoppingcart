import React, { useState, useEffect } from "react";
import Button from "./Button";

const Sizes = () => {
  const [sizes, setSizes] = useState([]);

  const allSizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
  return allSizes.map((size, i) => <Button key={i} content={size} />);
};

export default Sizes;
