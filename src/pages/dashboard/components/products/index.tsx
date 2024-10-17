import Header from "./components/Header";
import ManageProducts from "./components/ManageProducts";
import { useGetAllProductsQuery } from "../../../../app/api/public/product";

const Products = () => {
  const { data } = useGetAllProductsQuery();
  return (
    <div className="flex flex-col gap-4 my-4">
      <Header />
      <ManageProducts products={data} />
    </div>
  );
};

export default Products;
