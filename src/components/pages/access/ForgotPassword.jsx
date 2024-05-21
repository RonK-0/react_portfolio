import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { queryData } from "../../helpers/queryData";
import { FaCheckCircle } from "react-icons/fa";
import { object, string } from "yup";
import { setError, setMessage } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import { InputText } from "../../helpers/FormInputs";
import ModalError from "../../partials/modals/ModalError";
import SpinnerButton from "../../partials/spinners/SpinnerButton";
import { Link } from "react-router-dom";
import { PageTitle } from "../../helpers/functions-general";

const ForgotPassword = () => {
  PageTitle("Create Password - Portfolio Dashboard");

  const { dispatch, store } = React.useContext(StoreContext);

  const [verifySuccess, setVerifySuccess] = React.useState(false);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(`/v1/user/reset`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        setVerifySuccess(true);
      }
    },
  });

  const initVal = { item: "" };
  const yupSchema = object({
    item: string().required("Required").email("Invalid Email"),
  });

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="max-w-[450px] w-full px-4 py-8 bg-darkGray rounded-[10px] f-col gap-6">
          <div className="f-col-center w-full text-center">
            <h2 className="text-termGreen font-text-firacode font-bold">
              @ron
            </h2>
            <h3>Portfolio Management: Fogot Password</h3>
          </div>

          {verifySuccess ? (
            <div className="text-center f-col-center gap-2">
              <FaCheckCircle className="text-termGreen block mx-auto my-2 text-h3" />
              <h3>Reset Email Sent</h3>
              <p className="text-balance">
                Plase check your email for the reset password instruction
              </p>
              <Link to={"/login"} className="btn btn--termGreen w-full py-1">Back to Login</Link>
            </div>
          ) : (
            <>
              <Formik
                initialValues={initVal}
                validationSchema={yupSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  mutation.mutate(values);
                }}
              >
                {(props) => {
                  return (
                    <Form className="w-full f-col gap-4">
                      <div className="input-wrap">
                        <InputText
                          label="Registered Email"
                          name="item"
                          type="text"
                          disabled={mutation.isPending}
                          required
                        />
                      </div>

                      <div className="f-col gap-2">
                        <button
                          className="btn btn--termGreen w-full py-3"
                          type="submit"
                        >
                          {mutation.isPending ? (
                            <SpinnerButton />
                          ) : (
                            "Reset Password"
                          )}
                        </button>
                        <Link to={"/login"} className="btn btn--cancel w-full py-1">
                          Return To Login
                        </Link>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </>
          )}
        </div>
      </div>
      {store.error && <ModalError position={"center"} />}
    </>
  );
};

export default ForgotPassword;
