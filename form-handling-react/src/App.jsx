import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div>
      <RegistrationForm />
      <hr style={{ margin: "2rem 0" }} />
      <FormikForm />
    </div>
  );
}

export default App;
