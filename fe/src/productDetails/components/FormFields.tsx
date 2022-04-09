import { Grid } from "@mui/material";
import { DatePicker, TextField } from "mui-rff";

const formFields: JSX.Element[] = [
  <TextField name="name" label="Product name" />,
  <TextField name="price" label="Price $" />,
  <DatePicker
    name="availableFrom"
    label="Available from"
    required={true}
    inputFormat="yyyy-MM-dd"
    mask="____-__-__"
  />,
];

const FormFields: React.FC = () => {
  return (
    <Grid container direction="column" alignContent="stretch" spacing={5}>
      {formFields.map((item, idx) => (
        <Grid item key={idx}>
          {item}
        </Grid>
      ))}
    </Grid>
  );
};

export default FormFields;
