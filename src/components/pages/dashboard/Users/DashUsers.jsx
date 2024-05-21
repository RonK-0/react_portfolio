import { HiOutlinePlusCircle } from "react-icons/hi";
import React, { useContext, useState } from "react";
import { setIsAdd, setIsEdit } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../custom-hook/useQueryData";
import { PageTitle } from "../../../helpers/functions-general";
import Toast from "../../../partials/Toast";
import DashWrapper from "../../../partials/dashboard_partials/DashWrapper";
import ModalError from "../../../partials/modals/ModalError";
import DashUsersTable from "./DashUsersTable";
import ModalAddUser from "./ModalAddUser";

const DashUsers = () => {
  PageTitle("Users - Portfolio Dashboard");

  const { store, dispatch } = useContext(StoreContext);
  const [itemEdit, setItemEdit] = useState(null);

  const [isSearch, setIsSeach] = useState(false);
  const [keyword, setKeyword] = useState("");

  const handleAdd = () => {
    dispatch(setIsAdd(true)), dispatch(setIsEdit(false)), setItemEdit(null);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: user,
  } = useQueryData(
    isSearch ? "/v1/user/search" : "/v1/user", // endpoint
    isSearch ? "post" : "get", // method
    "user",
    { searchValue: keyword }
  );

  return (
    <>
      <DashWrapper>
        <div className="py-6 pl-2 pr-4">
          <div className="dash_heading">
            <div className="flex gap-6 items-center">
              <h3>Portfolio: Users</h3>{" "}
              <span className="text-white">
                ({user?.data.length} users)
              </span>
            </div>

            <button className="btn btn--blueGray dash-new" onClick={handleAdd}>
              New User
              <HiOutlinePlusCircle />
            </button>
          </div>
          
          <DashUsersTable
            isLoading={isLoading}
            user={user}
            isFetching={isFetching}
            setItemEdit={setItemEdit}
          />
        </div>
      </DashWrapper>
      {store.isAdd && <ModalAddUser itemEdit={itemEdit} />}
      {store.success && <Toast />}
      {store.error && <ModalError position={"center"} />}
    </>
  );
};

export default DashUsers;
