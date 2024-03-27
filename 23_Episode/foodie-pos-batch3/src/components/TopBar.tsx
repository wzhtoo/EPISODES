import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";

export function TopBar() {
  const router = useRouter();
  return (
    <AppBar position="static">
      <Toolbar sx={{ bgcolor: "#4C4C6D" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Foodie POS
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
