import { Route, Routes } from "react-router-dom";
import MovieDetails from "./Pages/Details";
import Home from "./Pages/Home";
import SearchPage from "./Pages/Search";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:query" element={<SearchPage />} />
      <Route path="/details" element={<MovieDetails />} />
    </Routes>
  );
}
