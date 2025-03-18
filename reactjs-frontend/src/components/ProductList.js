import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-3 rounded-lg shadow-lg">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <p>{product.description}</p>
            <p className="text-red-500 font-bold">{product.price} VND</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
