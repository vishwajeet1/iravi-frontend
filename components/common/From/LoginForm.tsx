import { FunctionComponent } from "react";
import { Button, Paper } from "@mui/material";
import { Form, Field } from "react-final-form";
import InputField from "components/common/Input/TextField";

interface Props {
  onSubmit: Function;
}

const LoginForm: FunctionComponent<Props> = ({ onSubmit }) => {
  return (
    <div>
      <Form onSubmit={(values) => onSubmit(values)}>
        {({
          handleSubmit,
          form,
          values,
          errors,
          touched,
          submitting,
          active,
          ...rest
        }) => {
          return (
            <div className="min-w-full">
              <div className="flex pb-6">
                <div className="w-full">
                  <Field
                    name="username"
                    label="Username"
                    component={InputField}
                    validate={(v) => {
                      if (!v) return "This is a mandatory field";
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="w-full pb-6">
                  <Field
                    name="password"
                    label="password"
                    type="password"
                    component={InputField}
                    validate={(v) => {
                      if (!v) return "This is a mandatory field";
                    }}
                  />
                </div>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={handleSubmit}
                  fullWidth
                >
                  SignUp
                </Button>
              </div>
            </div>
          );
        }}
      </Form>
    </div>
  );
};
export default LoginForm;
