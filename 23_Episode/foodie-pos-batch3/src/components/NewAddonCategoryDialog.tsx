import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NewAddonCategoryDialog({ open, setOpen }: Props) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>New Addon Category</DialogTitle>
      <DialogContent sx={{ width: 300 }}>
        <Typography>New Addon Category Component here</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} sx={{ color: "#4C4C6D" }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#4C4C6D",
            width: 100,
            height: 38,
            "&:hover": { bgcolor: "#66667c" },
          }}
          onClick={() => {}}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
