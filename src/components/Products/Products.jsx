import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const Products = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (product) => product.category == category
      );
      setProducts(filteredByCategory);
    } else {
      setProducts(data);
    }
  }, [data, category]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products?.map((product, idx) => (
          <Card key={idx} product={product}></Card>
        ))}
      </div>
    </>
  );
};

export default Products;
