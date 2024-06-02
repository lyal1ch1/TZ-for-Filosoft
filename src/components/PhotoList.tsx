import PhotoItem from "./PhotoItem";
import { Dispatch, SetStateAction } from "react";

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

export default function PhotoList({
  photos,
  favorites,
  setFavorites,
}: {
  photos: Photo[];
  favorites: Array<{ id: number; title: string; thumbnailUrl: string }>;
  setFavorites: Dispatch<
    SetStateAction<Array<{ id: number; title: string; thumbnailUrl: string }>>
  >;
}) {
  const toggleFavorite = (photo: Photo) => {
    const isFavorite = favorites.some((fav) => fav.id === photo.id);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== photo.id));
    } else {
      setFavorites([...favorites, photo]);
    }
  };
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoItem
          key={photo.id}
          photo={photo}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.some((fav) => fav.id === photo.id)}
        />
      ))}
    </div>
  );
}
