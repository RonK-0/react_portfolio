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
import { InputText, InputTextArea } from "../../../helpers/FormInputs";
import { queryData } from "../../../helpers/queryData";
import ModalWrapper from "../../../partials/modals/ModalWrapper";
import SpinnerButton from "../../../partials/spinners/SpinnerButton";

const ModalAddPortfolioInfo = ({ itemEdit }) => {
  const { dispatch, store } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v1/projects/info/${itemEdit.project_aid}`
          : `/v1/projects/info`,
        itemEdit ? "put" : "post",
        // `/v1/projects/info`,
        // `post`,
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["projects/info"] });
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(
          setMessage("Successfully " + [store.isEdit ? "updated." : "added."])
        );
      } else {
        dispatch(setError(true));
        dispatch(setMessage(`Failed updating database.`));
      }
    },
  });

  const initVal = {
    project_title: itemEdit ? itemEdit.project_title : "",
    project_year: itemEdit ? itemEdit.project_year : "",
    project_description: itemEdit ? itemEdit.project_description : "",
    project_category: itemEdit ? itemEdit.project_category : "",
    project_publish_date: itemEdit ? itemEdit.project_publish_date : "",
  };
  const yupSchema = object({
    project_title: string().required("Title Required*"),
    project_year: string().required("Year Required*"),
    project_description: string().required("Description Required*"),
    project_category: string().required("Category Required*"),
    project_publish_date: string().required("Publishing Date Required*"),
  });

  return (
    <ModalWrapper>
      <div className="main-modal">
        <div className="modal-header">
          <h4>{store.isEdit ? "Edit" : "New"} Project Info Entry</h4>
          <button onClick={handleClose}>
            <LiaTimesSolid />
          </button>
        </div>
        <div className="modal-body">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              mutation.mutate(values);
            }}
          >
            <Form action="">
              <div className="grow overflow-y-auto">
                <div className="input-wrap">
                  <InputText
                    label="Project Title"
                    type="text"
                    name="project_title"
                  />
                </div>
                <div className="input-wrap">
                  <InputText
                    label="Project Year"
                    type="text"
                    name="project_year"
                  />
                </div>
                <div className="input-wrap">
                  <InputTextArea
                    label="Project Description"
                    name="project_description"
                    cls="h-[200px]"
                  />
                </div>
                <div className="input-wrap">
                  <InputText
                    label="Project Category"
                    type="text"
                    name="project_category"
                  />
                </div>
                <div className="input-wrap">
                  <InputText
                    label="Project Publishing Date"
                    type="text"
                    name="project_publish_date"
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

export default ModalAddPortfolioInfo;
