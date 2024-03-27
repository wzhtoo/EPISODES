import BackofficeLayout from "@/components/BackofficeLayout";
import { NewTableDialog } from "@/components/NewTableDialog";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Table = () => {
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
            New table
          </Button>
        </Box>
      </Box>
      <NewTableDialog open={open} setOpen={setOpen} />
    </BackofficeLayout>
  );
};

export default Table;
