import { Navigate, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import { Button } from "@mui/material";

const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  if (!isLoggedIn) return <Navigate to={"/login"} />;

  return (
    <Layout>
      <h1>User Home Page</h1>
      <Button
        variant="contained"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        LogOut
      </Button>
    </Layout>
  );
};

export default App;
