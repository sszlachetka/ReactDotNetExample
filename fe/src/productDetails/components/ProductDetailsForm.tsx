import { Button, Grid } from "@mui/material";
import { Form } from "react-final-form";
import FormFields from "./FormFields";

export interface ProductDetailsFormState {
  id: string;
  name: string;
  price: number;
  availableFrom: Date;
}

interface Props {
  initialState: ProductDetailsFormState;
  onSubmit: (values: ProductDetailsFormState) => void;
  onCancel: () => void;
}

async function validate(values: ProductDetailsFormState) {
  if (!values.name) {
    return { name: "Name is mandatory." };
  }
  return;
}

const ProductDetailsForm: React.FC<Props> = ({
  initialState,
  onSubmit,
  onCancel,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialState}
      validate={validate}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Grid container>
            <Grid item xs={12} marginBottom={3}>
              <FormFields />
            </Grid>
            <Grid container item xs={12} justifyContent="flex-end">
              <Grid item>
                <Button onClick={onCancel}>Cancel</Button>
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
    />
  );
};

export default ProductDetailsForm;
