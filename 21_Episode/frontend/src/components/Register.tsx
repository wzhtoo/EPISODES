import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import Layout from "./Layout";
import { registerUser } from "../store/slices/registerUser";
import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router-dom";

export interface NewUser {
  email: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [newUser, setNewUser] = useState<NewUser>({ email: "", password: "" });

  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "center", height: "100vh" }}>
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
            disabled={!newUser.email || !newUser.password}
            variant="contained"
            sx={{
              width: "fit-content",
              mt: 3,
              display: "flex",
              bgcolor: "#6E2C11",
              color: "#e2d5cf",
              "&:hover": { bgcolor: "#7d4129" },
            }}
            onClick={() =>
              dispatch(
                registerUser({
                  ...newUser,
                  onSuccess: () => {
                    navigate("/login");
                  },
                })
              )
            }
          >
            Register
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default Register;
