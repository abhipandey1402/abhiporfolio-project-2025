import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomMouse from "./components/Shared/CustomMouse";
import DarkModeButton from "./components/Shared/DarkModeButton";
import HorizontalScroller from "./components/Shared/HorizontalScroller";
import Home from "./pages/Home";
import { useThemeStore } from "./store/themeStore";
function App() {
  const { darkMode } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className="app">
      <HorizontalScroller />
      <Home />
      <DarkModeButton />
      <CustomMouse />
      <ToastContainer />
    </div>
  );
}

export default App;
