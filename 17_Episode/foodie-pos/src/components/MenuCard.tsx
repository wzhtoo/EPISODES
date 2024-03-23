import { Box, Typography } from "@mui/material";

export interface Menu {
  id: number;
  name: string;
  price: number;
}

interface Props {
  menus: Menu[];
}

export function MenuCard({ menus }: Props) {
  return (
    <Box>
      {menus.map((menu) => {
        return (
          <Box
            sx={{
              m: 5,
              width: 250,
              display: "flex",
              justifyContent: "space-between",
            }}
            key={menu.id}
          >
            <Typography>{menu.name}</Typography>
            <Typography>{menu.price}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}
