import { Box, Button, TextField } from "@mui/material";
import { NewUser } from "./Register";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

interface User extends NewUser {}

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const loginUser = async () => {
    const res = await fetch("http://localhost:5000/login", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    });
    const dataFromServer = await res.json();
    const { token } = dataFromServer;
    localStorage.setItem("token", token);
    navigate("/");
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            m: 2,
          }}
        >
          <TextField
            placeholder="email"
            sx={{ mb: 2 }}
            onChange={(evt) => setUser({ ...user, email: evt.target.value })}
          />
          <TextField
            placeholder="password"
            type="password"
            onChange={(evt) => setUser({ ...user, password: evt.target.value })}
          />

          <Button
            variant="contained"
            sx={{
              width: "fit-content",
              mt: 3,
              display: "flex",
              bgcolor: "#6E2C11",
              color: "#e2d5cf",
              "&:hover": { bgcolor: "#7d4129" },
            }}
            onClick={loginUser}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Login;
