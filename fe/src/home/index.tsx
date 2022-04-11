import { Container, Grid, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Typography variant="h3" component="div">
          Home page
        </Typography>
      </Grid>
    </Grid>
  );
};

export { Home };
