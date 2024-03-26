import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MenuCategory {
  id: number;
  name: string;
  isAvailable: boolean;
}

interface MenuCategorySlice {
  menusCategories: MenuCategory[];
  isLoading: boolean;
  Error: Error | null;
}

const initialState: MenuCategorySlice = {
  menusCategories: [],
  isLoading: false,
  Error: null,
};

export const menuCategorySlice = createSlice({
  name: "menuCategory",
  initialState,
  reducers: {
    setMenusCategory: (state, action: PayloadAction<MenuCategory[]>) => {
      state.menusCategories = action.payload;
    },
    addMenusCategory: (state, action: PayloadAction<MenuCategory>) => {
      state.menusCategories = [...state.menusCategories, action.payload];
    },
    removeMenusCategory: (state, action: PayloadAction<MenuCategory>) => {
      state.menusCategories = state.menusCategories.filter((menuCategory) =>
        menuCategory.id === action.payload.id ? false : true
      );
    },
  },
});

export const { setMenusCategory, addMenusCategory, removeMenusCategory } =
  menuCategorySlice.actions;
export default menuCategorySlice.reducer;
