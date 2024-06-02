import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import PhotoList from "../components/PhotoList";
import { Link } from "react-router-dom";

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

export default function ListPage({
  photos,
  favorites,
  setFavorites,
  setPhotos,
}: {
  favorites: Array<{ id: number; title: string; thumbnailUrl: string }>;
  setFavorites: Dispatch<
    SetStateAction<Array<{ id: number; title: string; thumbnailUrl: string }>>
  >;
  photos: Photo[];
  setPhotos: Dispatch<SetStateAction<Photo[]>>;
}) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadPhotos = async (page: number) => {
    setLoading(true);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/1/photos`,
      {
        params: {
          _page: page,
          _limit: 10,
        },
      }
    );

    if (response.data.length === 0) {
      setHasMore(false);
    } else {
      setPhotos((prevPhotos) => {
        const newPhotos = response.data.filter(
          (photo: Photo) => !prevPhotos.some((p) => p.id === photo.id)
        );
        return [...prevPhotos, ...newPhotos];
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (hasMore) {
      loadPhotos(page);
    }
  }, [page, hasMore]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="list-page">
      <Link to="/">
        <button>Назад</button>
      </Link>
      <PhotoList
        photos={photos}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      {loading && <p>Идет загрузка...</p>}
      {!hasMore && <p>Все фотографии загружены</p>}
    </div>
  );
}
