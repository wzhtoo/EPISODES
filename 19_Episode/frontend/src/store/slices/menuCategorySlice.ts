import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MenuCatagoery {
  id: number;
  name: string;
  isAvilable: boolean;
}

interface MenuCategorySlice {
  menuCategories: MenuCatagoery[];
  isLoading: boolean;
  error: Error | null;
}

const initialState: MenuCategorySlice = {
  menuCategories: [],
  isLoading: false,
  error: null,
};

export const menuCategorySlice = createSlice({
  name: "menuCategory",
  initialState,
  reducers: {
    addMenuCategory: (state, action: PayloadAction<MenuCatagoery>) => {
      const newMenuCategory = action.payload;
      state.menuCategories = [...state.menuCategories, newMenuCategory];
    },
  },
});

export const { addMenuCategory } = menuCategorySlice.actions;
export default menuCategorySlice.reducer;
