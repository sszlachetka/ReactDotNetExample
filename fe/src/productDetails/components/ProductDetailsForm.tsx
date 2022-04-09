import { Form } from "react-final-form";
import FormFields from "./FormFields";

export interface ProductDetailsFormState {
  id: string;
  name: string;
  unitPrice: number;
  availableFrom: Date;
}

interface Props {
  initialState: ProductDetailsFormState;
}

// yes, this can even be async!
async function onSubmit(values: ProductDetailsFormState) {
  console.log(values);
}

// yes, this can even be async!
async function validate(values: ProductDetailsFormState) {
  if (!values.name) {
    return { name: "Name is mandatory." };
  }
  return;
}

const ProductDetailsForm: React.FC<Props> = ({ initialState }) => {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialState}
      validate={validate}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <FormFields />
          <pre>{JSON.stringify(values)}</pre>
        </form>
      )}
    />
  );
};

export default ProductDetailsForm;
