# 20 Episode

1. Revision Redux Toolkit
2. Doing async api call with createAsyncThunk
3. CRUD menu, menuCategory
4. Next: Nextjs

- Separation of Concern

# 1. Installation

### 1. backend installation

    - mkdir backend
    - npm init -y
    - npm i express cors ts-node-dev typescript
    - npm i -D @types/express @types/cors
    - touch server.ts

### backend/server.ts

```javascript
import cors from "cors";
import express from "express";

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`Server has started listening on ${PORT}`));
```

### 2. frontend

### frontend installation

    npx create-react-app@5 --template typescript

    npm install @mui/icons-material @mui/material @emotion/styled @emotion/react @reduxjs/toolkit react-redux react-router-dom

<hr>

## Start setup STORE

- mkdir src/`components` `store`

### index.ts

- src/store/`index.ts`

```javascript
// index.ts
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
```

<hr>

### index.tsx

- frontend/`index.tsx`

```javascript
// Provider =>
// index.tsx
root.render(
  <Provider stroe={store}>
    <App />
  </Provider>
);
```

<hr>

### hooks

- src/`hooks.ts`

```javascript
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

<hr>

### slices

- src/store/slices `menuSlice.ts`

```javascript
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
  name: "name",
  initialState,
  reducers: {
    setMenus: (state, action: PayLoadAction<Menu[]>) => {
      state.menus = action.payload;
    },
    addMenu: (state, action: PayLoadAction<Menu>) => {
      state.menus = [...state.menus, action.payload];
    },
    removeMenu: (state, action: PayLoadAction<Menu>) => {
      state.menus = state.menus.filter((menu) =>
        menu.id === action.payload.id ? false : true
      );
    },
  },
});

export const { setMenus, addMenu, removeMenu } = menuSlice.actions;
export default menuSlice;
```

### putting parent reducer (initial state)

- src/store/`index.ts`

```javascript
import menuReducer from  './slices/menuSlice'

reducer: {
    menu: menuReducer;
  },
```

<hr style="border: 0.5px solid yellow">

# 3. Setup components

### Step_1

- src/components/`TopBar.tsx`

```javascript
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
```

### Step_2

- src/components/`SideBar.tsx`

```javascript
export function SideBar() {
  return <Box></Box>;
}
```

- src/components/`MainContent.tsx`

```javascript
export function MainContent() {
  return <Box></Box>;
}
```

### Step_3

- src/components/`SideBar.tsx`
- frontend/`App.tsx`

```javascript
return (
  <Box>
    <TopBar />
    <Box>
      <Box>
        <SideBar />
      </Box>
      <Box>
        <MainConten />
      </Box>
    </Box>
  </Box>
);
```

### Step_4

- src/components/`SideBar.tsx`

```javascript
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

<Box>
  <List>
    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  <Divider />
  <List>
    {["All mail", "Trash", "Spam"].map((text, index) => (
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
<Box>
```

# React Router Setup

### Create React Approuter

- src/components/`AppRouter.tsx`

```javascript
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import MenuCategoryPage from "./MenuCategoryPage";
import MenuPage from "./MenuPage";
import SettingPage from "./SettingPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu-category" element={<MenuCategoryPage />} />
        <Route path="/settings" element={<SettingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
```

- src/components/`MenuPage.tsx`

```javascript
const MenuPage = () => {
  return <Typography>Menu Page</Typography>;
};

export default MenuPage;
```

- src/components/`MenuCategoryPage.tsx`

```javascript
const MenuCategoryPage = () => {
  return <Typography>MenuCategory Page</Typography>;
};

export default MenuCategoryPage;
```

- frontend/`index.tsx`

```javascript
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter from "./components/AppRouter";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
```

- src/components/`SideBar.tsx`

```javascript
<List>{<Link to={index === 0 ? "/menu" : "menu-category"}></Link>}</List>
```

- src/components/`Layout.tsx`

```javascript
import { Box } from "@mui/material";
import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Box>
      <TopBar />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{ bgcolor: "#E8F6EF", p: 2, width: "100%" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
```
