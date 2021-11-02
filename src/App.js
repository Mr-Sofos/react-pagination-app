import React, { useState, useEffect } from "react";
import axios from "axios";

import Albums from "./components/Albums";
import Pagination from "./components/Pagination";

function App() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);
  const [albumsPerPage] = useState(10);

  useEffect(() => {
    const getCountries = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100"
      );
      setAlbums(res.data);
      setLoading(false);
    };

    getCountries();
  }, []);

  const lastAlbumsIndex = currentPage * albumsPerPage; // 20
  const firstAlbumsIndex = lastAlbumsIndex - albumsPerPage; // 20 - 10 = 10
  const currentAlbum = albums.slice(firstAlbumsIndex, lastAlbumsIndex);
  console.log(currentAlbum);

  const onHandleChange = (number) => setCurrentPage(number);

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Albums</h1>
      <Albums albums={currentAlbum} loading={loading} />
      <Pagination
        albumsPerPage={albumsPerPage}
        totalAlbums={albums.length}
        onHandleChange={onHandleChange}
      />
    </div>
  );
}

export default App;
