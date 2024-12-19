// src/components/Fragments/PopularMovie.js
import { useEffect, useState } from "react";
import { getMovies } from "../../services/film.services"; // Import service

const PopularMovie = (props) => {
  const { children } = props;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Mengecek apakah token ada di localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      // Jika token tidak ada, arahkan ke halaman login
      window.location.href = "/login"; // Redirect menggunakan window.location
    } else {
      // Mengambil data film dengan menggunakan service
      getMovies((data) => {
        setMovies(data); // Set data film ke dalam state movies
      });
    }
  }, []); // Pastikan hanya dijalankan sekali saat komponen pertama kali di-mount

  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-semibold text-center mb-12">{children}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <CardMovie
              key={movie.id}
              title={movie.original_title}
              description={movie.overview}
              image={movie.poster_path}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMovie;

const CardMovie = (props) => {
  const { title, description, image, releaseDate, rating } = props;
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt="Movie" className="w-full h-96" />

      <div className="p-6">
        <h4 className="text-2xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-400 mb-4">{description}</p>
        <p className="text-gray-500 mb-2">Release Date: {releaseDate}</p>
        <p className="text-gray-500 mb-4">Rating: {rating}</p>
        <a href="#" className="text-yellow-400 hover:text-yellow-500">
          Watch Trailer
        </a>
      </div>
    </div>
  );
};
