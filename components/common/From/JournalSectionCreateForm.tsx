import { FunctionComponent } from "react";
import { Button, Paper } from "@mui/material";
import { Form, Field } from "react-final-form";
import InputField from "components/common/Input/TextField";

interface Props {
  onSubmit: (values: Record<string, any>) => void;
}

const JournalSectionCreateForm: FunctionComponent<Props> = ({ onSubmit }) => {
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
                    name="name"
                    label="Title"
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
                    name="description"
                    label="Description"
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
                  Submit
                </Button>
              </div>
            </div>
          );
        }}
      </Form>
    </div>
  );
};
export default JournalSectionCreateForm;
