import { Box, Button } from "@mui/material";
import { Menu, MenuCard } from "./components/MenuCard";
import { useState } from "react";
// import { MenuCard } from "./components/MenuCard";

const App = () => {
  const [menus, setMenus] = useState<Menu[]>([]);

  // function handleClick() {
  //   setNum(num + 1);
  // }

  // const menu = { id: 1, name: "Mote Hin Khar", price: 1000 };

  const getMenus = async () => {
    const res = await fetch("http://localhost:5000");
    const menus = await res.json();
    setMenus(menus);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* <h1>{num}</h1> */}
      <MenuCard menus={menus} />
      <Button variant="contained" onClick={getMenus}>
        Click Me
      </Button>
    </Box>
  );
};

export default App;
