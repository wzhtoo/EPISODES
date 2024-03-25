import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Menu {
  id: number;
  name: string;
  price: number;
}

interface MenuSlice {
  menus: Menu[];
  isLoading: boolean;
  Error: Error | null;
}

const initialState: MenuSlice = {
  menus: [],
  isLoading: false,
  Error: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenus: (state, action: PayloadAction<Menu[]>) => {
      state.menus = action.payload;
    },
    addMenu: (state, action: PayloadAction<Menu>) => {
      state.menus = [...state.menus, action.payload];
    },
    removeMenu: (state, action: PayloadAction<Menu>) => {
      state.menus = state.menus.filter((menu) =>
        menu.id === action.payload.id ? false : true
      );
    },
  },
});

export const { setMenus, addMenu, removeMenu } = menuSlice.actions;
export default menuSlice.reducer;
