import { Box, Container, Grid } from "@mui/material";
import { Header } from "./Header";

export const Layout: React.FC = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Box style={{ paddingTop: "20px" }}>
          <Container maxWidth="md">{children}</Container>
        </Box>
      </Grid>
    </Grid>
  );
};
