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
import { FaUpload } from "react-icons/fa";

const ModalAddProjSkill = ({ itemEdit }) => {
  const { dispatch, store } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/projects/skill/${itemEdit.project_skill_aid}` : `/v1/projects/skill`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["projects/skill"] });
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
    project_skill: itemEdit ? itemEdit.project_skill : "",
    project_skill_label: itemEdit ? itemEdit.project_skill_label : "",
    project_skill_publish_date: itemEdit ? itemEdit.project_skill_publish_date : "",
    project_id: itemEdit ? itemEdit.project_id : "",
  };
  const yupSchema = object({
    project_skill: string().required("Skill Name Required*"),
    project_skill_label: string().required("Skill Label Required*"),
    project_skill_publish_date: string().required("Publishing Date Required*"),
    project_id: number().required("Related Project ID Required*"),
  });

  return (
    <ModalWrapper>
      <div className="main-modal">
        <div className="modal-header">
          <h4>{store.isEdit ? "Edit" : "Add"} Project Skill</h4>
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
                    label="Skill Name"
                    type="text"
                    name="project_skill"
                  />
                </div>
                <div className="input-wrap">
                  <InputText
                    label="Skill Label"
                    type="text"
                    name="project_skill_label"
                  />
                </div>
                <div className="input-wrap">
                  <InputText
                    label="Skill Publishing Date"
                    type="text"
                    name="project_skill_publish_date"
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

export default ModalAddProjSkill;
