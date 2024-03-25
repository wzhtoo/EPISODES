# 19_Episode

### 1. State management using Redux Toolkit (prop drilling) concepts

### 2. useState vs store

### 3. Action, Reducer, Store

### 4. Setting up Redux Toolkit with TypeScript, including Redux Devtools

### 5. Slice with menu category, menu (sidebar with router)

### 6. Next: more Redux Toolkit

# Setup REDUX

[Redux.js &#128279;](https://redux.js.org/)

    npx create-react-app@5 frontend ---template typescript

    npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

# Reduc Toolkit

- TypeScript Quick Start

  [Reduc Toolkit](https://redux-toolkit.js.org/tutorials/typescript)

- **Quick Start**

          npm install @reduxjs/toolkit react-redux

# Configure Store

[Redux Diagram](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

  <img src="https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif">

<hr>

- `create => src/store/store.ts`

  ```javascript
  import { configureStore } from "@reduxjs/toolkit";

  export const store = configureStore({
    reducer: {},
  });

  // Infer the `RootState` and `AppDispatch` types from the store itself
  export type RootState = ReturnType<typeof store.getState>;

  // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
  export type AppDispatch = typeof store.dispatch;
  ```

# index.js

    ```javascript
    import React from 'react'
    import ReactDOM from 'react-dom'
    import './index.css'
    import App from './App'
    import { store } from './app/store'
    import { Provider } from 'react-redux'

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
    ```

# hook

- src/store/hooks.ts

  ```javascript
  import { useDispatch, useSelector } from "react-redux";
  import type { TypedUseSelectorHook } from "react-redux";
  import type { RootState, AppDispatch } from "./store";

  // Use throughout your app instead of plain `useDispatch` and `useSelector`
  export const useAppDispatch: () => AppDispatch = useDispatch;
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  ```

# Redux dev tools

- [install redux dev tools &#128279;](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

# Slice

### menuSlice

- src/store/slices/menuSlice.ts

  ```javascript
  import { createSlice } from "@reduxjs/toolkit";

  interface Menu {
    id: number;
    name: string;
    price: number;
  }

  interface MenuSlice {
    menus: Menu[];
    isLoading: boolean;
    error: Error | null;
  }

  const initialState: MenuSlice = {
    menus: [],
    isLoading: false,
    error: null,
  };

  export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducer: {},
  });
  ```

### menuCategorySlice

- src/store/slice/menuCategorySlice.ts

  ```javascript
  import {createSlice} from "@reduxjs/toolkit";


  interface MenuCategory {
    id: number;
    name: string;
    isAvailable: boolean;
  }

  interface MenuCategorySlice {
    menuCategories: MenuCategory[];
    isLoading: boolean;
    error: Error | null;
  }

  const initialState: MenuCategorySlice =  {
    menuCategories: [],
    isLoading: false,
    error: null;
  }

  export const menuCategorySlice = createSlice({
    name: "menuCategory"
    initialState,
    reducers: {}
  })
  ## end Moudule 19
  ```
