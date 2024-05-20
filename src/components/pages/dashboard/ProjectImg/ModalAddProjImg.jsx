import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { object, string, number } from "yup";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { InputFileUpload, InputText } from "../../../helpers/FormInputs";
import { queryData } from "../../../helpers/queryData";
import ModalWrapper from "../../../partials/modals/ModalWrapper";
import SpinnerButton from "../../../partials/spinners/SpinnerButton";
import useUploadPhoto from "../../../custom-hook/useUploadPhoto";
import { FaUpload } from "react-icons/fa";
import { baseImgUrl } from "../../../helpers/functions-general";

const ModalAddProjImg = ({ itemEdit }) => {
  const { dispatch, store } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));
  const queryClient = useQueryClient();

  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    `/v1/upload/photo`,
    dispatch
  );

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/projects/img/${itemEdit.project_img_aid}` : `/v1/projects/img`,
        itemEdit ? "put" : "post",
        // `/v1/projects/img`,
        // `post`,
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["projects/img"] });
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(
          setMessage("Successfully " + [store.isEdit ? "updated." : "added."])
        );
      } else {
        dispatch(setError(true));
        // dispatch(setMessage(`Failed updating database.`));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    project_img: itemEdit ? itemEdit.project_img : "",
    project_img_publish_date: itemEdit ? itemEdit.project_img_publish_date : "",
    project_id: itemEdit ? itemEdit.project_id : "",
  };
  const yupSchema = object({
    // project_img: string().required("Image Required*"),
    project_img_publish_date: string().required("Publishing Date Required*"),
    project_id: number().required("Related Project ID Required*"),
  });

  return (
    <ModalWrapper>
      <div className="main-modal">
        <div className="modal-header">
          <h4>{store.isEdit ? "Edit" : "Add"} Project Image</h4>
          <button onClick={handleClose}>
            <LiaTimesSolid />
          </button>
        </div>
        <div className="modal-body">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              uploadPhoto();
              mutation.mutate({
                ...values,
                project_img:
                  (itemEdit && itemEdit.project_img === "") || photo
                    ? photo === null
                      ? itemEdit.project_img
                      : photo.name
                    : values.project_img,
              });
            }}
          >
            <Form action="">
              <div className="grow overflow-y-auto">
                <div className="input-wrap input-photo">
                {photo || (itemEdit && itemEdit.project_img !== "") ? (
                    <img
                      src={
                        photo
                          ? URL.createObjectURL(photo) // preview
                          : itemEdit.project_img // check db
                          ? baseImgUrl + "/" + itemEdit.project_img
                          : null
                      }
                      alt="Photo"
                    />
                  ) : (
                    <span className="upload-box">
                      <FaUpload className="text-4xl" />
                      Upload the Image file Here
                    </span>
                  )}

                  {(photo !== null ||
                    (itemEdit && itemEdit.project_img !== "")) && (
                    <span className="upload-box-alt">
                      <FaUpload className="text-2xl" />
                      Replace the Current Image?
                    </span>
                  )}
                  <InputFileUpload
                    label="Photo"
                    name="project_photo"
                    type="file"
                    id="myFile"
                    accept="image/*"
                    title="Upload photo"
                    onChange={(e) => handleChangePhoto(e)}
                    onDrop={(e) => handleChangePhoto(e)}
                  />
                </div>
                <div className="input-wrap">
                  <InputText
                    label="Image Publishing Date"
                    type="text"
                    name="project_img_publish_date"
                  />
                </div>
                <div className="input-wrap">
                  <InputText
                    label="Related Project's ID"
                    type="text"
                    name="project_id"
                  />
                </div>
              </div>
              <div className="form-action">
                <button className="btn btn-form bg-termGreen" type="submit">
                  {`${
                    mutation.isPending ? (
                      <SpinnerButton />
                    ) : store.isEdit ? (
                      "Update"
                    ) : (
                      "Add"
                    )
                  }`}
                </button>
                <button
                  className="btn btn-form btn--cancel"
                  type="button"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModalAddProjImg;
