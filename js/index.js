'use strict';

const loadAllProducts = async () => {
  const url = `https://fakestoreapi.com/products`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

loadAllProducts();
