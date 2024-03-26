import { Box } from "@mui/material";
import { ReactNode } from "react";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const accessToken = localStorage.getItem("accessToken");
  return (
    <Box>
      <TopBar />
      <Box sx={{ display: "flex" }}>
        {accessToken && <SideBar />}
        <Box sx={{ p: 2, bgcolor: "#8b5641", width: "100%", color: "#e2d5cf" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
