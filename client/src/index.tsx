import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";

const element = document.getElementById("root");
const root = createRoot(element!);

root.render(<App />);
