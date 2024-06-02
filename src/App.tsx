import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ListPage from "./pages/ListPage";
import "./App.scss";

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}
export default function App() {
  const [favorites, setFavorites] = useState<
    Array<{ id: number; title: string; thumbnailUrl: string }>
  >([]);
  const [photos, setPhotos] = useState<Photo[]>([]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard favorites={favorites} />} />
      <Route
        path="/list"
        element={
          <ListPage
            favorites={favorites}
            setFavorites={setFavorites}
            photos={photos}
            setPhotos={setPhotos}
          />
        }
      />
    </Routes>
  );
}
