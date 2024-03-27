import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Menu, NewMenuParams } from "../../types/menu";

interface MenuSlice {
  menus: Menu[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MenuSlice = {
  menus: [],
  isLoading: false,
  error: null,
};

export const createMenu = createAsyncThunk(
  "menu/createMenu",
  async (newMenu: NewMenuParams) => {
    const { onSuccess, ...payload } = newMenu;
    const response = await fetch("http://localhost:5000/menu", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const dataFromServer = await response.json();
    const { menus } = dataFromServer;
    onSuccess && onSuccess();
    return menus;
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(createMenu.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createMenu.fulfilled, (state, action) => {
        state.menus = action.payload;
        state.isLoading = false;
      })
      .addCase(createMenu.rejected, (state) => {
        state.isLoading = false;
        const err = new Error("createMenu error occurred");
        state.error = err.message;
      });
  },
});

export const { setMenus, addMenu, removeMenu } = menuSlice.actions;

export default menuSlice.reducer;
