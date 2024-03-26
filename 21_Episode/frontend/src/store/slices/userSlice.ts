import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegisterUserParams, User, UserSlice } from "../../types/user";

const initialState: UserSlice = {
  user: null,
  isLoading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (registerUserParams: RegisterUserParams, thunkApi) => {
    const { email, password } = registerUserParams;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await fetch("http://localhost:5000/register", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    registerUserParams.onSuccess && registerUserParams.onSuccess();
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
