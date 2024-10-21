import Header from "./components/Header";
import ManageProducts from "./components/ManageProducts";
import { useGetAllProductsQuery } from "../../../../app/api/private/product";
import { useEffect, useState } from "react";

const Products = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [totalData, setTotalData] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(totalData / 10);
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useGetAllProductsQuery({
    title: searchQuery,
    currentPage: currentPage,
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    if (totalData > 10) {
      setTotalPages(Math.ceil(totalData / 10));
    } else {
      setTotalPages(1);
    }
  }, [totalData]);

  useEffect(() => {
    setTotalData(data?.totalCount);
  }, [data]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const allRows = data?.products.map((product) => product._id);
    setSelectedRows(selectAll ? [] : allRows);
  };

  const handleRowCheckboxChange = (index: number) => {
    const newSelectedRows = [...selectedRows];
    const selectedIndex = newSelectedRows.indexOf(index);

    if (selectedIndex !== -1) {
      newSelectedRows.splice(selectedIndex, 1);
    } else {
      newSelectedRows.push(index);
    }

    setSelectedRows(newSelectedRows);
  };

  return (
    <div className="flex flex-col gap-4 mt-4 pb-2 px-8">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ManageProducts
        products={data?.products}
        selectAll={selectAll}
        handleSelectAll={handleSelectAll}
        selectedRows={selectedRows}
        handleRowCheckboxChange={handleRowCheckboxChange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Products;
