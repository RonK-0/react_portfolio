import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik, Form } from "formik";
import { PageTitle, getUrlParam } from "../../helpers/functions-general";
import { queryData } from "../../helpers/queryData";
import { object, string, ref } from "yup";
import { InputText } from "../../helpers/FormInputs";
import { StoreContext } from "../../../store/StoreContext";
import { setError, setMessage } from "../../../store/StoreAction";

const CreatePassword = () => {
  PageTitle("Create Password - Portfolio Dashboard");

  const { dispatch, store } = React.useContext(StoreContext);

  const [verifySuccess, setVerifySuccess] = React.useState(false);
  const [isPasswordNew, setIsPasswordNew] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);

  const paramKey = getUrlParam().get("key");

  const handleChange = () => console.log("123");

  const initVal = { new_password: "", confirm_password: "", key: paramKey };
  const yupSchema = object({
    new_password: string().required("Required"),
    // .min(8, "Password must be at least 8 characters.")
    // .matches(/[a-z]/, "At least one lowercase letter.")
    // .matches(/[A-Z]/, "At least one uppercase letter.")
    // .matches("(?=.*[@$!%*#?&])", "Atleast 1 special character.")
    // .matches("(?=.*[0-9])", "Atleast 1 number."),
    confirm_password: string()
      .required("Required")
      .oneOf([ref("new_password"), null], "Passwords does not match."),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData("/v1/user/password", "post", values),
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

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="max-w-[450px] w-full px-4 py-8 bg-darkGray rounded-[10px] f-col gap-6">
        <div className="f-col-center w-full text-center">
            <h2 className="text-termGreen font-text-firacode font-bold">
              @ron
            </h2>
            <h3>Portfolio Management: Create Password</h3>
          </div>

          {verifySuccess ? (
            <div className="text-center f-col-center gap-2">
              <FaCheckCircle className="text-termGreen block mx-auto my-2 text-h3" />
              <h3>New Password Set</h3>
              <p className="text-balance">
                Plase click the link below to login
              </p>
              <Link to={"/login"} className="btn btn--termGreen w-full py-1">Go to Login</Link>
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
                        {/* <label htmlFor="">New Password</label>
                        <input type="text" /> */}
                        <InputText
                          label="Password"
                          type={isPasswordNew ? "password" : "text"}
                          name="new_password"
                          onKeyUp={(e) => handleChange(e.target.value)}
                          disabled={mutation.isPending}
                          required
                        />
                        {props.values.new_password && (
                          <button
                            onClick={() => setIsPasswordNew(!isPasswordNew)}
                            className={`text-primary absolute top-7 right-3`}
                            type="button"
                          >
                            {isPasswordNew ? <FaRegEye  className="fill-gray-400" /> : <FaRegEyeSlash  className="fill-gray-400" />}
                          </button>
                        )}
                      </div>

                      <div className="input-wrap">
                        {/* <label htmlFor="">Confirm Password</label>
                        <input type="text" /> */}
                        <InputText
                          label="Confirm Password"
                          type={isPasswordConfirm ? "password" : "text"}
                          name="confirm_password"
                          disabled={mutation.isPending}
                          required
                        />
                        {props.values.confirm_password && (
                          <button
                            onClick={() =>
                              setIsPasswordConfirm(!isPasswordConfirm)
                            }
                            className={`text-primary absolute top-7 right-3`}
                            type="button"
                          >
                            {isPasswordConfirm ? (
                              <FaRegEye  className="fill-gray-400" />
                            ) : (
                              <FaRegEyeSlash  className="fill-gray-400" />
                            )}
                          </button>
                        )}
                      </div>

                      <div className="f-col gap-2">
                        <button
                          className="btn btn--termGreen w-full py-3"
                          type="submit"
                        >
                          Reset Password
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
    </>
  );
};

export default CreatePassword;
