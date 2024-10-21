import { useState } from "react";
import { useGetAllUsersQuery } from "../../../../app/api/private/user";
import Header from "./components/Header";
import ManageUsers from "./components/ManageUsers";

const Users = () => {
  const [selectedRow, setSelectedRow] = useState<string>("");
  const { data } = useGetAllUsersQuery();

  const handleSelectRow = (index: string) => {
    if (index === selectedRow) {
      setSelectedRow("");
      return;
    }
    setSelectedRow(index);
  };

  return (
    <div className="flex flex-col gap-4 mt-4 pb-2 px-8">
      <Header />
      <ManageUsers
        users={data}
        handleSelectRow={handleSelectRow}
        selectedRow={selectedRow}
      />
    </div>
  );
};

export default Users;
