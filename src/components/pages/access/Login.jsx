import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import {
  setCredentials,
  setError,
  setIsLogin,
  setMessage,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import useSystemLogin from "../../custom-hook/useSystemLogin";
import { InputText } from "../../helpers/FormInputs";
import { PageTitle, apiVersion, setStorageRoute } from "../../helpers/functions-general";
import ModalError from "../../partials/modals/ModalError";
import SpinnerButton from "../../partials/spinners/SpinnerButton";
import SpinnerWindow from "../../partials/spinners/SpinnerWindow";
import { queryData } from "../../helpers/queryData";

const Login = () => {
  PageTitle("Login - Portfolio Dashboard");

  const { store, dispatch } = useContext(StoreContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigate();
  const { loginLoading } = useSystemLogin();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`/${apiVersion}/user/login`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        if (store.isLogin) {
          delete data.data[0].user_system_password;
          // delete data.data[0].role_description;
          // delete data.data[0].role_created;
          // delete data.data[0].role_datetime;

          dispatch(setCredentials(data.data[0]));
          setStorageRoute(data.data[1]);
          dispatch(setIsLogin(false));
          // checkRoleToRedirect(navigate, data.data[0]);
          navigation("/database");
        }
      }
    },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const initVal = {
    user_email: "",
    password: "",
  };

  const yupSchema = object({
    user_email: string().required("Required").email("Invalid email"),
    password: string().required("Required"),
  });

  return (
    <>
      {loginLoading ? (
        <SpinnerWindow />
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <div className="max-w-[450px] w-full px-4 py-8 bg-darkGray rounded-[10px] f-col gap-6">
            <div className="f-col-center w-full text-center">
              <h2 className="text-termGreen font-text-firacode font-bold">
                @ron
              </h2>
              <h3>Portfolio Management Login</h3>
            </div>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                // mutate data
                mutation.mutate(values);
              }}
            >
              {(props) => {
                return (
                  <Form className="w-full f-col gap-4">
                    <div className="input-wrap">
                      <InputText label="Email" type="text" name="user_email" required />
                    </div>
                    <div className="input-wrap">

                      <InputText
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        disabled={mutation.isPending}
                        required
                      />
                      {props.values.password && (
                        <span
                          className="absolute text-base cursor-pointer ty-a right-4"
                          onClick={togglePassword}
                        >
                          {showPassword ? (
                            <FaRegEyeSlash className="fill-gray-400" />
                          ) : (
                            <FaRegEye className="fill-gray-400" />
                          )}
                        </span>
                      )}
                    </div>
                    <div className="f-col gap-2">
                      <button
                        className="btn btn--termGreen w-full py-3"
                        type="submit"
                      >
                        {mutation.isPending ? <SpinnerButton /> : "Sign In"}
                      </button>
                      <Link
                        to={"/forgot-password"}
                        className="btn italic w-full py-1"
                      >
                        Forgot Password
                      </Link>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
          {store.error && <ModalError position={"center"} />}
        </div>
      )}
    </>
  );
};

export default Login;
