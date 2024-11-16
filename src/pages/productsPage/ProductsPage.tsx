import { useGetAllProductQuery } from "../../redux/api/productApi/ProductApi";

const ProductsPage = () => {
  const { data: products, error, isLoading } = useGetAllProductQuery(undefined);
  console.log("product page BACK", products);
  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-10">All Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {/* {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
