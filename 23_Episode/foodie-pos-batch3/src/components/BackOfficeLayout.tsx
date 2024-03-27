import { Box } from "@mui/material";
import { ReactNode } from "react";
import AppSnackbar from "./AppSnackbar";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Box>
      <TopBar />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Box sx={{ bgcolor: "#E8F6EF", p: 2, width: "100%" }}>{children}</Box>
      </Box>
      <AppSnackbar />
    </Box>
  );
};

export default Layout;