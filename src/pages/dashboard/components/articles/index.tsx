import { useState } from "react";
import Header from "./components/Header";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col gap-4 mt-4 pb-2 px-8">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {/* <ManageProducts
        products={data?.products}
        selectAll={selectAll}
        handleSelectAll={handleSelectAll}
        selectedRows={selectedRows}
        handleRowCheckboxChange={handleRowCheckboxChange}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      /> */}
    </div>
  );
};

export default Articles;
