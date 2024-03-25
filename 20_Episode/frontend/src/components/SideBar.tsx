import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SettingsIcon from "@mui/icons-material/Settings";

const sidebarItems = [
  { id: 1, name: "Menu", to: "/menu", icon: <LocalDiningIcon /> },
  {
    id: 2,
    name: "Menu Category",
    to: "/menu-category",
    icon: <MenuBookIcon />,
  },
];

export function SideBar() {
  return (
    <Box sx={{ height: "100vh", width: 280, bgcolor: "#7d4129" }}>
      <List sx={{ color: "#e2d5cf" }}>
        {sidebarItems.map((item) => (
          <Link key={item.id} to={item.to} style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#e2d5cf" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} sx={{ color: "#e2d5cf" }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider sx={{ border: "1px solid #a88070" }} />
      <List>
        <Link to={"/settings"} style={{ textDecoration: "none" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#e2d5cf" }}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"Settings"} sx={{ color: "#e2d5cf" }} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
}
