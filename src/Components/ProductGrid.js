import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";

const ProductGrid = props => {
  return (
    <div>
      <Grid
        alignItems="center"
        justify="center"
        container
        spacing={24}
        style={{ padding: 24 }}
      >
        {props.products.map((currentProduct, i) => (
          <Grid key={i} item xs={12} sm={6} lg={3} xl={3}>
            <Card item={currentProduct} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductGrid;
