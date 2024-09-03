import logo from "../LOGO/logo.webp";

function Header() {
  return (
    <div className="bg-white p-4 rounded-xl border-2 border-white">
      <div className="flex justify-center mb-4">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>
      <nav>
        <ul className="flex justify-around items-center w-full text-black">
          <li className="flex-1 text-center py-2 hover:bg-black hover:text-white hover:z-10 relative cursor-pointer rounded-lg transition-all font-sans">
            HOME
          </li>
          <li className="flex-1 text-center py-2 hover:bg-black hover:text-white hover:z-10 relative cursor-pointer rounded-lg transition-all font-sans">
            ABOUT
          </li>
          <li className="flex-1 text-center py-2 hover:bg-black hover:text-white hover:z-10 relative cursor-pointer rounded-lg transition-all font-sans">
            PORTFOLIO
          </li>
          <li className="flex-1 text-center text-4xl font-cursive text-black">
            Eileen Lonergan
          </li>
          <li className="flex-1 text-center py-2 hover:bg-black hover:text-white hover:z-10 relative cursor-pointer rounded-lg transition-all font-sans">
            SERVICES
          </li>
          <li className="flex-1 text-center py-2 hover:bg-black hover:text-white hover:z-10 relative cursor-pointer rounded-lg transition-all font-sans">
            BLOG
          </li>
          <li className="flex-1 text-center py-2 hover:bg-black hover:text-white hover:z-10 relative cursor-pointer rounded-lg transition-all font-sans">
            CONTACT
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
