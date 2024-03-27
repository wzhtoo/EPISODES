import BackofficeLayout from "@/components/BackofficeLayout";
import { NewAddonCategoryDialog } from "@/components/NewAddonCategoryDialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const AddonCategory = () => {
  const [open, setOpen] = useState(false);
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
            New Addon Category
          </Button>
        </Box>
      </Box>
      <NewAddonCategoryDialog open={open} setOpen={setOpen} />
    </BackofficeLayout>
  );
};

export default AddonCategory;
