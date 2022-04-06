import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ViewListIcon from "@mui/icons-material/ViewList";
import HomeIcon from "@mui/icons-material/Home";

interface Props {
  open: boolean;
  closeDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const AppDrawer: React.FC<Props> = ({ open, closeDrawer }: Props) => {
  let navigate = useNavigate();

  const navigateToHome = () => navigate("/");
  const navigateToProducts = () => navigate("/products");

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
    >
      <List>
        <ListItem button onClick={navigateToHome}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={navigateToProducts}>
          <ListItemIcon>
            <ViewListIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer open={open} onClose={closeDrawer}>
      {list()}
    </Drawer>
  );
};
