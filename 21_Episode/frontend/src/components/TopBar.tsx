import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function TopBar() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#6E2C11" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#e2d5cf" }}
          >
            Foodie Pos
          </Typography>
          {accessToken && (
            <Button
              color="inherit"
              sx={{ color: "#e2d5cf" }}
              onClick={() => {
                localStorage.removeItem("accessToken");
                navigate("/login");
              }}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
