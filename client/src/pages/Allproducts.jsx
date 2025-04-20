import React, { useEffect, useState } from "react";
import { useAppContext } from "../contex/AppContext";
import ProductCard from "../components/ProductCard";

const Allproducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filterProduct, setfilterProduct] = useState([]);
  useEffect(() => {
    if (searchQuery.length > 0) {
      setfilterProduct(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setfilterProduct(products);
    }
  }, [products, searchQuery]);

  return (
    <div className="mt-6 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">All Product</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {filterProduct
          .filter((product) => product.inStock)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Allproducts;
