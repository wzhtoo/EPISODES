import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import MenuPage from "./MenuPage";
import MenuCategoryPage from "./MenuCategoryPage";
import SettingsPage from "./SettingsPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu-category" element={<MenuCategoryPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
