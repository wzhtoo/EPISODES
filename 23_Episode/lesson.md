# Episode 23

### 1. Move over components and install deps

### 2. Move over store

- Api/ backoffice (app, menu-category, menu, addon-category, addon, assets, company, location, table)
- Pages/ backoffice (menu-category, menu, addon-category, add-on, location, setings, table, order)

3. Make respective folders for frontend and api (ge, post, post.. check, 405)
4. Next: Next-auth and Database (locally and Vercel)

### setup

- page/backoffice/`menu menu-category`
- api/backoffice/`menu menu-category`
- page/`order/order.tsx`

### setup store

1. **create store**

- src/store/`hook.ts index.ts`
- src/store/slices/`appSnackbarSlice.ts menuCategorySlice.ts menuSlice.ts userSlice.ts`

- npm install

npm install @mui/icons-material @mui/material @emotion/styled @emotion/react @reduxjs/toolkit react-redux

- pages/`index.tsx`

```javascript
import { Inter } from "next/font/google";
import { Typography } from "mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Typography variant="h1">Home</Typography>;
}
```

**2. Create components**
src/`components/BackofficeLayout.tsx AppSnackbar.tsx Sidebar.tsx TopBar.tsx`

- pages/`_app.tsx`

```javascript
import type { AppProps } from "next/app";

export default function App({ component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Comopnent {...pageProps} />
    </Provider>
  );
}
```
