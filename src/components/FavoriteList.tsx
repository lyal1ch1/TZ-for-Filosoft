export default function FavoriteList({
  favorites,
}: {
  favorites: Array<{ id: number; title: string; thumbnailUrl: string }>;
}) {
  return (
    <div className="favorite-list">
      <h2>Список избранных</h2>
      {favorites.length === 0 ? (
        <p>Список избранных пуст, добавьте сюда что-нибудь :)</p>
      ) : (
        <ul>
          {favorites.map((item) => (
            <li className="photo-item" key={item.id}>
              <img src={item.thumbnailUrl} alt={item.title} />
              <p>
                {item.id}-{item.title}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
