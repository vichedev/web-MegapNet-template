import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-950 p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo con enlace al Hero */}
        <Link to="/" onClick={() => scrollToSection("hero")}>
          <img
            src="/img/icon/icon.png" // Cambia esto por la ruta de tu logo
            alt="Logo"
            className="h-10 md:h-12"
          />
        </Link>

        {/* Botón del menú móvil */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menú de navegación */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full bg-gray-800 md:flex md:space-x-6 md:w-auto md:bg-transparent transition-all duration-300 ease-in-out`}
        >
          <li className="text-center md:text-left">
            <Link
              to="/#about"
              className="block text-white hover:text-yellow-400 py-2 px-4"
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection("about");
              }}
            >
              Sobre Nosotros
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/#gallery"
              className="block text-white hover:text-yellow-400 py-2 px-4"
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection("gallery");
              }}
            >
              Galería
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/documents"
              className="block text-white hover:text-yellow-400 py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Función para desplazarse a una sección
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
