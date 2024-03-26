import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterUserParams } from "./userSlice";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (RegisterUserParams: RegisterUserParams, thunkApi) => {
    const { email, password } = RegisterUserParams;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await fetch("http://localhost:5000/register", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    RegisterUserParams.onSuccess && RegisterUserParams.onSuccess();
  }
);
