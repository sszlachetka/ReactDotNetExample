import { Button } from "@mui/material";
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
}

async function validate(values: ProductDetailsFormState) {
  if (!values.name) {
    return { name: "Name is mandatory." };
  }
  return;
}

const ProductDetailsForm: React.FC<Props> = ({ initialState, onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialState}
      validate={validate}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <FormFields />
          <Button type="submit">Submit</Button>
          <pre>{JSON.stringify(values)}</pre>
        </form>
      )}
    />
  );
};

export default ProductDetailsForm;
