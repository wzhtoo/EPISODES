import { Box, TextField } from "@mui/material";

interface NewMenu {
  name: string;
  price: number;
}

interface Props {
  newMenu: NewMenu;
  setNewMenu: React.Dispatch<React.SetStateAction<NewMenu>>;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const NewMenu = ({ newMenu, setNewMenu }: Props) => {
  return (
    <Box>
      <TextField
        placeholder="name"
        sx={{
          width: "100%",
          mb: 2,
        }}
        onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
      />
      <TextField
        placeholder="price"
        sx={{ width: "100%", mb: 2.5 }}
        onChange={(e) => setNewMenu({ ...newMenu, price: +e.target.value })}
      />
    </Box>
  );
};

export default NewMenu;
