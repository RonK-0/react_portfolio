import React from "react";
import ModalWrapper from "./ModalWrapper";
import { LiaTimesSolid } from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../helpers/queryData";
import { StoreContext } from "../../../store/StoreContext";
import {
  setMessage,
  setSuccess,
  setError,
  setIsActive,
} from "../../../store/StoreAction";

const ModalConfirm = ({ position, queryKey, endpoint }) => {
  const { dispatch, store } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsActive(false));
  const isArchiving = store.isArchive;
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) => queryData(endpoint, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });

      if (data.success) {
        dispatch(setIsActive(false));
        dispatch(setSuccess(true));
        dispatch(
          setMessage(
            `Record successfully ${isArchiving ? "Restored" : "Archived"}.`
          )
        );
      } else {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const handleConfirm = async () => {
    mutation.mutate({
      isActive: isArchiving,
    });
  };
  return (
    <>
      <ModalWrapper position={position}>
        <div className="modal-main max-w-[401px] w-full rounded-[15px] overflow-hidden">
          <div className="modal-header flex between-center bg-warning text-white p-3 px-4">
            <h4 className="mb-0 text-white">Confirm</h4>
            <button type="button" onClick={handleClose}>
              <LiaTimesSolid />
            </button>
          </div>
          <div className="modal-body p-4 bg-dark text-content">
            <div className="f-col-center gap-4 py-2">
              <PiArchive className="text-4xl text-warning mb-3" />
              <h3 className="mb-2 text-white">
                {isArchiving === 0
                  ? "Archive "
                  : isArchiving === 1
                  ? "Restore "
                  : "[UNSPECIFIED FUNCTION]"}
                Record
              </h3>
              <p className="mb-5 text-white">
                Are you sure you want to
                {isArchiving === 0
                  ? " archive "
                  : isArchiving === 1
                  ? " restore "
                  : " [UNSPECIFIED FUNCTION] "}
                this record?
              </p>
            </div>

            <div className="flex gap-2 center">
              <button
                className="btn btn--warning w-1/2"
                onClick={handleConfirm}
              >
                Confirm
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

export default ModalConfirm;
