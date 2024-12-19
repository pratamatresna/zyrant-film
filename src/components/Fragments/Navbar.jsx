const Navbar = ({ handleLogout }) => {
  return (
    <div className="bg-gray-800 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold ml-4">ZyrantFilm</h1>
        <nav className="mr-4">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Upcoming
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
