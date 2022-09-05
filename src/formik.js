import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const handleBlur = (e) => {
    console.log("e");
  };
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            className={formik.errors.firstName ? "border border-danger" : ""}
            {...formik.getFieldProps("firstName")}
          />
          {/* {console.log(formik.handleBlur)} */}
          {/* {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null} */}
          <ErrorMessage name="firstName" />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};
export default SignupForm;
