const Herosection = () => {
  return (
    <div
      className="hero bg-cover bg-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?movie')",
      }}
    >
      <div className="container mx-auto px-6 py-32 text-center">
        <h2 className="text-5xl font-extrabold mb-4">
          WELLCOME, TO ZYRANT FILM
        </h2>
        <p className="text-lg mb-8">Experience the Magic of Cinema.</p>
        <a
          href="#"
          className="bg-yellow-500 text-black px-8 py-4 rounded hover:bg-yellow-600 transition"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
};
export default Herosection;
