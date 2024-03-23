import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppRouter from "./components/AppRouter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<AppRouter />);
