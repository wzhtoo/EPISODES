import "./App.css";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { addMenu } from "./store/slices/menuSlice";

function App() {
  const dispatch = useAppDispatch();
  const { menus } = useAppSelector((state) => state.menu);

  return (
    <Box>
      <Typography variant="h3">{menus.length}</Typography>
      <Button
        variant="contained"
        onClick={() =>
          dispatch(addMenu({ id: 1, name: "Shan Khout Swe", price: 1000 }))
        }
      >
        Add Menu
      </Button>
    </Box>
  );
}

export default App;
