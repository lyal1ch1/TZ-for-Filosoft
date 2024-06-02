import { Link } from "react-router-dom";
import FavoriteList from "../components/FavoriteList";

export default function Dashboard({
  favorites,
}: {
  favorites: Array<{ id: number; title: string; thumbnailUrl: string }>;
}) {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Link to="/list">
        <button>К списку</button>
      </Link>
      <FavoriteList favorites={favorites} />
    </div>
  );
}
