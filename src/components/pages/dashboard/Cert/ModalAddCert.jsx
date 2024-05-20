import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { object, string } from "yup";
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

const ModalAddCert = ({ itemEdit }) => {
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
        itemEdit ? `/v1/certs/${itemEdit.cert_aid}` : `/v1/certs`,
        itemEdit ? "put" : "post",
        // `/v1/certs`,
        // `post`,
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["certs"] });
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
    cert_title: itemEdit ? itemEdit.cert_title : "",
    cert_org: itemEdit ? itemEdit.cert_org : "",
    cert_date: itemEdit ? itemEdit.cert_date : "",
    cert_image: itemEdit ? itemEdit.cert_image : ""
  };
  const yupSchema = object({
    cert_title: string().required("Title Required*"),
    cert_org: string().required("Organization Required*"),
    cert_date: string().required("Certificate Date Required*")
    // cert_image: string().required("Image Required*"),
  });

  return (
    <ModalWrapper>
      <div className="main-modal">
        <div className="modal-header">
          <h4>
            {store.isEdit ? "Edit" : "New"} Certificate Entry
          </h4>
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
                cert_image:
                  (itemEdit && itemEdit.cert_image === "") || photo
                    ? photo === null
                      ? itemEdit.cert_image
                      : photo.name
                    : values.cert_image,
              });
            }}
          >
            <Form action="">
              <div className="grow overflow-y-auto">
                <div className="input-wrap input-photo">
                  {photo || (itemEdit && itemEdit.cert_image !== "") ? (
                    <img
                      src={
                        photo
                          ? URL.createObjectURL(photo) // preview
                          : itemEdit.cert_image // check db
                          ? baseImgUrl + "/" + itemEdit.cert_image
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
                    (itemEdit && itemEdit.cert_image !== "")) && (
                    <span className="upload-box-alt">
                      <FaUpload className="text-2xl" />
                      Replace the Current Image?
                    </span>
                  )}
                  <InputFileUpload
                    label="Photo"
                    name="cert_photo"
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
                    label="Certificate Title"
                    type="text"
                    name="cert_title"
                  />
                </div>
                <div className="input-wrap">
                  <InputText
                    label="Certificate Organization"
                    type="text"
                    name="cert_org"
                  />
                </div>
                <div className="input-wrap">
                  <InputText
                    label="Certificate Date"
                    type="text"
                    name="cert_date"
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

export default ModalAddCert;
