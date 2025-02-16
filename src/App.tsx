import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";
import { Router } from "./Routes.tsx";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
