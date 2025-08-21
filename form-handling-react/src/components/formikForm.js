import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // mock submit
        console.log("Submitted (Formik):", values);
      }}
    >
      <Form style={{ maxWidth: 420, margin: "2rem auto" }}>
        <h2>Register (Formik)</h2>

        <div style={{ marginBottom: 12 }}>
          <Field name="username" placeholder="Username" style={{ width: "100%", padding: 8 }} />
          <ErrorMessage name="username" component="div" style={{ color: "red" }} />
        </div>

        <div style={{ marginBottom: 12 }}>
          <Field name="email" type="email" placeholder="Email" style={{ width: "100%", padding: 8 }} />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </div>

        <div style={{ marginBottom: 16 }}>
          <Field name="password" type="password" placeholder="Password" style={{ width: "100%", padding: 8 }} />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
