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

const ModalAddSkills = ({ itemEdit }) => {
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
        itemEdit ? `/v1/skills/${itemEdit.skill_aid}` : `/v1/skills`,
        itemEdit ? "put" : "post",
        // `/v1/skills`,
        // `post`,
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["skills"] });
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
    skill_title: itemEdit ? itemEdit.skill_title : "",
    skill_image: itemEdit ? itemEdit.skill_image : "",
    skill_publish_date: itemEdit ? itemEdit.skill_publish_date : "",
  };
  const yupSchema = object({
    skill_title: string().required("Title Required*"),
    // skill_image: string().required("Image Required*"),
    skill_publish_date: string().required("Publishing Date Required*"),
  });

  return (
    <ModalWrapper>
      <div className="main-modal">
        <div className="modal-header">
          <h4>
            {store.isEdit ? "Edit" : "New"} Skill Entry
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
                skill_image:
                  (itemEdit && itemEdit.skill_image === "") || photo
                    ? photo === null
                      ? itemEdit.skill_image
                      : photo.name
                    : values.skill_image,
              });
            }}
          >
            <Form action="">
              <div className="grow overflow-y-auto">
                <div className="input-wrap input-photo">
                  {photo || (itemEdit && itemEdit.skill_image !== "") ? (
                    <img
                      src={
                        photo
                          ? URL.createObjectURL(photo) // preview
                          : itemEdit.skill_image // check db
                          ? baseImgUrl + "/" + itemEdit.skill_image
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
                    (itemEdit && itemEdit.skill_image !== "")) && (
                    <span className="upload-box-alt">
                      <FaUpload className="text-2xl" />
                      Replace the Current Image?
                    </span>
                  )}
                  <InputFileUpload
                    label="Photo"
                    name="skill_photo"
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
                    label="Skill Title"
                    type="text"
                    name="skill_title"
                  />
                </div>
                <div className="input-wrap">
                  <InputText
                    label="Skill Publishing Date"
                    type="text"
                    name="skill_publish_date"
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

export default ModalAddSkills;
