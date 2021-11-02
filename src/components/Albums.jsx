import React from "react";

const Albums = ({ albums, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <ul className="list-group mb-2">
      {albums.map((album) => (
        <li key={album.id} className="list-group-item">
          {album.title}
          <img src={album.thumbnailUrl} alt="flag" style={{ width: 30 }} />
        </li>
      ))}
    </ul>
  );
};

export default Albums;
