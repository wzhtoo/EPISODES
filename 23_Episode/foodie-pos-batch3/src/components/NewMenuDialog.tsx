import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { showSnackbar } from "../store/slices/appSnackbarSlice";
import { createMenu } from "../store/slices/menuSlice";
import { NewMenu } from "../types/menu";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  newMenu: NewMenu;
  setNewMenu: React.Dispatch<React.SetStateAction<NewMenu>>;
}

export function NewMenuDialog({ open, setOpen, newMenu, setNewMenu }: Props) {
  const { isLoading } = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  const handleCreateMenu = async () => {
    const isValid = newMenu.name;
    if (!isValid) return;
    dispatch(
      createMenu({
        ...newMenu,
        onSuccess: () => {
          dispatch(
            showSnackbar({
              type: "success",
              message: "Menu created successfully",
            })
          );
          setOpen(false);
        },
        onError: () => {
          dispatch(
            showSnackbar({
              type: "error",
              message: "Error occurred when creating menu",
            })
          );
        },
      })
    );
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>New Menu</DialogTitle>
      <DialogContent sx={{ width: 300 }}>
        <Box>
          <TextField
            placeholder="name"
            sx={{ width: "100%", mb: 2 }}
            onChange={(evt) =>
              setNewMenu({ ...newMenu, name: evt.target.value })
            }
          />
          <TextField
            type="number"
            placeholder="price"
            sx={{ width: "100%" }}
            onChange={(evt) =>
              setNewMenu({ ...newMenu, price: Number(evt.target.value) })
            }
          />
        </Box>
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
          onClick={handleCreateMenu}
        >
          {isLoading ? (
            <CircularProgress size={20} sx={{ color: "#E8F6EF" }} />
          ) : (
            "Create"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
