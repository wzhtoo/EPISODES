import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Layout from "./Layout";
import { useState } from "react";
import NewMenu from "./NewMenu";

const MenuPage = () => {
  const [open, setOpen] = useState(false);
  const [newMenu, setNewMenu] = useState<NewMenu>({ name: "", price: 0 });

  const handleCreateMenu = () => {
    console.log(newMenu);
  };
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#6E2C11",
            "&:hover": { bgcolor: "#7d4129" },
            color: "#e2d5cf",
          }}
          onClick={() => setOpen(true)}
        >
          New Menu
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>New Menu</DialogTitle>
          <DialogContent sx={{ width: 300 }}>
            <NewMenu newMenu={newMenu} setNewMenu={setNewMenu} />
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                "&:hover": { transform: "translateY(-2px)" },
                color: "#6E2C11",
              }}
              onClick={() => setOpen(false)}
            >
              Cancle
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#6E2C11",
                "&:hover": { bgcolor: "#7d4129" },
                color: "#e2d5cf",
              }}
              onClick={handleCreateMenu}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  );
};

export default MenuPage;
