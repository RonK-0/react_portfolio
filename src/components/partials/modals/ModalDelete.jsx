import React from "react";
import ModalWrapper from "./ModalWrapper";
import { LiaTimesSolid, LiaTrashAltSolid } from "react-icons/lia";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../helpers/queryData";
import { StoreContext } from "../../../store/StoreContext";
import {
  setIsDelete,
  setMessage,
  setSuccess,
  setError,
} from "../../../store/StoreAction";

const ModalDelete = ({ position, queryKey, endpoint }) => {
  const { dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsDelete(false));
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) => queryData(endpoint, "delete", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });

      if (data.success) {
        dispatch(setIsDelete(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Record Successfully Deleted"));
      } else {
        dispatch(setError(true));
        dispatch(setMessage("Delete failed!"));
      }
    },
  });
  const handleDelete = async () => {
    mutation.mutate();
  };
  
  return (
    <>
      <ModalWrapper position={position}>
        <div className="modal-main max-w-[400px] w-full rounded-[15px] overflow-hidden">
          <div className="modal-header flex between-center bg-alert text-white p-3 px-4">
            <h4 className="mb-0 text-white">Alert</h4>
            <button type="button" onClick={handleClose}>
              <LiaTimesSolid />
            </button>
          </div>
          <div className="modal-body p-4 bg-dark text-content">
            <div className="f-col-center gap-4 py-2">
              <LiaTrashAltSolid className="text-4xl text-alert mb-3" />
              <h3 className="mb-2 text-white">Removing Record</h3>
                <p className="mb-5 text-white">
                  Are you sure you want to trash this record?
                </p>
            </div>

            <div className="flex gap-2 justify-end">
              <button
                className="btn btn--alert w-1/2"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="btn btn--cancel w-1/2"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalDelete;
