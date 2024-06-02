interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

export default function PhotoItem({
  photo,
  toggleFavorite,
  isFavorite,
}: {
  photo: Photo;
  toggleFavorite: (photo: Photo) => void;
  isFavorite: boolean;
}) {
  return (
    <div className="photo-item">
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <h3>
        {photo.id}-{photo.title}
      </h3>
      <button onClick={() => toggleFavorite(photo)}>
        {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
      </button>
    </div>
  );
}
