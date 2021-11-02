import React, { useState, useEffect } from "react";
import axios from "axios";
import { paginate } from "./utils/paginate";

import Albums from "./components/Albums";
import Pagination from "./components/Pagination";

function App() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

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

  const allAlbums = paginate(albums, currentPage, pageSize);

  // const lastAlbumsIndex = currentPage * pageSize;
  // const firstAlbumsIndex = lastAlbumsIndex - pageSize;
  // const currentAlbum = albums.slice(firstAlbumsIndex, lastAlbumsIndex);

  const onHandleChange = (number) => setCurrentPage(number);

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Albums</h1>
      <Albums albums={allAlbums} loading={loading} />
      <Pagination
        pageSize={pageSize}
        itemsCount={albums.length}
        onHandleChange={onHandleChange}
      />
    </div>
  );
}

export default App;
