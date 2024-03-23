import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface NewUser {
  email: string;
  password: string;
}

const Register = () => {
  const [newUser, setNewUser] = useState<NewUser>({ email: "", password: "" });
  const navigate = useNavigate();

  const registerUser = async () => {
    const res = await fetch("http://localhost:5000/register", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newUser),
    });
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
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
          onChange={(evt) =>
            setNewUser({ ...newUser, email: evt.target.value })
          }
        />
        <TextField
          placeholder="password"
          type="password"
          onChange={(evt) =>
            setNewUser({ ...newUser, password: evt.target.value })
          }
        />

        <Button
          variant="contained"
          sx={{
            width: "fit-content",
            mt: 3,
            display: "flex",
          }}
          onClick={registerUser}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
