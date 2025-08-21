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
        console.log("Formik Submitted:", values);
      }}
    >
      <Form className="max-w-md mx-auto p-4 border rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Register with Formik</h2>

        <div className="mb-2">
          <Field name="username" placeholder="Username" className="w-full p-2 border rounded" />
          <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
        </div>

        <div className="mb-2">
          <Field name="email" type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
        </div>

        <div className="mb-4">
          <Field name="password" type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
