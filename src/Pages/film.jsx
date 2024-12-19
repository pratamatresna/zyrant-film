import Footer from "../components/Fragments/Footer";
import Herosection from "../components/Fragments/Herosection";
import Navbar from "../components/Fragments/Navbar";
import PopularMovie from "../components/Fragments/PopularMovie";

const FilmPage = () => {
  const handleLogout = () => {
    // Menghapus token dari localStorage
    localStorage.removeItem("token");

    // Logika tambahan seperti menghapus session, dsb.
    console.log("User logged out, token removed");

    // Redirect ke halaman login setelah log out
    window.location.replace("/login"); // Redirect menggunakan window.location.replace tanpa menambah history
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* header */}
      <Navbar handleLogout={handleLogout} />
      <Herosection />
      <PopularMovie>Popular Movies</PopularMovie>
      <Footer />
    </div>
  );
};

export default FilmPage;
