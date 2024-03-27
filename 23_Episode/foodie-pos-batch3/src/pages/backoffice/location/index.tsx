import BackofficeLayout from "@/components/BackofficeLayout";
import { NewLocationDialog } from "@/components/NewLocationDialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Location = () => {
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
            New Location
          </Button>
        </Box>
      </Box>
      <NewLocationDialog open={open} setOpen={setOpen} />
    </BackofficeLayout>
  );
};

export default Location;
