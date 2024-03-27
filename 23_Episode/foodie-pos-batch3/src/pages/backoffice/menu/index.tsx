import BackofficeLayout from "@/components/BackofficeLayout";
import { NewMenuDialog } from "@/components/NewMenuDialog";
import { NewMenu } from "@/types/menu";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [newMenu, setNewMenu] = useState<NewMenu>({ name: "", price: 0 });
  return (
    <BackofficeLayout>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            sx={{ bgcolor: "#4C4C6D", "&:hover": { bgcolor: "#66667c" } }}
            onClick={() => setOpen(true)}
          >
            New Menu
          </Button>
        </Box>
        <NewMenuDialog
          open={open}
          setOpen={setOpen}
          newMenu={newMenu}
          setNewMenu={setNewMenu}
        />
      </Box>
    </BackofficeLayout>
  );
};

export default Menu;
