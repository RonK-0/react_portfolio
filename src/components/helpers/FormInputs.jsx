import { useField } from "formik";
import React from "react";

export const InputText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-msg" : ""}
        autoComplete="off"
      />
      <label
        htmlFor={props.id || props.name}
        className={meta.touched && meta.error ? "error-msg" : ""}
      >
        {label}
      </label>
      {meta.touched && meta.error ? (
        <small className="error-msg">{meta.error}</small>
      ) : (
        null
      )}
    </>
  );
};
export const InputTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea
        {...field}
        {...props}
        className={meta.touched && meta.error ? "error-msg" : ""}
        autoComplete="off"
      />
      <label
        htmlFor={props.id || props.name}
        className={meta.touched && meta.error ? "error-msg" : ""}
      >
        {label}
      </label>
      {meta.touched && meta.error ? (
        <small className="error-msg">{meta.error}</small>
      ) : (
        null
      )}
    </>
  );
};