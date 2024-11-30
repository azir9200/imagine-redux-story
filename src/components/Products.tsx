/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "./ProductCard";
import { useGetAllProductQuery } from "../redux/api/productApi/ProductApi";

const Products = () => {
  const { data } = useGetAllProductQuery(undefined);
  const products = data?.data;

  return (
    <div className="w-full bg-blue-400">
      <h1 className="text-4xl font-bold my-6">Our All Products</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {products?.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
