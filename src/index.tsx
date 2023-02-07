import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {lazy} from "react";
import "./styles/index.scss"
import ThemeProvider from "./components/ThemeProvider";

const App = lazy(() => import('./app'));

const root = createRoot(document.getElementById("root"))

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ThemeProvider>
)
