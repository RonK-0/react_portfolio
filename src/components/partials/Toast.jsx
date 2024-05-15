import React, {useContext} from "react";
import { FaCheckCircle } from "react-icons/fa";
import { setSuccess } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";

const Toast = () => {
  const { store, dispatch } = useContext(StoreContext);
  const handleClose = () => {
    setTimeout(() => {
      dispatch(setSuccess(false));
    }, 2000);
  };

  handleClose();
  return (
    <div
      className={`fixed top-16 left-1/2 -translate-x-1/2 p-1 px-3 z-[9999] bg-darkBlue rounded-md border ${
        store.error ? "border-red-500" : "border-green-500"
      }`}
    >
      <div className="flex gap-2 items-center text-2xl">
        <FaCheckCircle
          className={`${store.error ? "text-red-500" : "text-green-500"}`}
        />
        <p className="mb-0">{store.message}</p>
      </div>
    </div>
  );
};

export default Toast;
