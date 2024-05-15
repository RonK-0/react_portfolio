import React from "react";
import ModalWrapper from "./ModalWrapper";
import { LiaTimesSolid } from "react-icons/lia";
import { BiErrorCircle } from "react-icons/bi";
import { StoreContext } from "../../../store/StoreContext";
import { setError } from "../../../store/StoreAction";

const ModalError = ({ position }) => {
  const { dispatch } = React.useContext(StoreContext);
  const handleErrorClose = ()=>{
    dispatch(setError(false));
  }
  return (
    <>
      <ModalWrapper position={position}>
        <div className="modal-main max-w-[400px] w-full rounded-[15px] overflow-hidden">
          <div className="modal-header flex between-center bg-red-500 text-white p-3 px-4">
            <h4 className="mb-0 text-white">Alert</h4>
            <button type="button" onClick={handleErrorClose}>
              <LiaTimesSolid />
            </button>
          </div>
          <div className="modal-body p-4 bg-dark text-content text-center">
            <BiErrorCircle className="text-4xl mx-a text-red-500 mb-3" />
            <h3 className="mb-2 text-white">Server Error</h3>
            <p className="mb-5 text-white">Something went wrong!</p>
            <button className="btn bg-red-500 text-white w-full" onClick={handleErrorClose}>
              Okay
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalError;
