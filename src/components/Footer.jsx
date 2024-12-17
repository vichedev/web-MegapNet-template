import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo y Descripción */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/img/icon/logofooter.png"
            alt="Logo"
            className="h-16 mb-4"
          />
          <p className="text-sm text-gray-400">
            MEGATNET - Conectando el mundo con velocidad y confianza.
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.speedtest.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Speedtest
              </a>
            </li>
            <li>
              <a
                href="https://www.presidencia.gob.ec/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Presidencia Nacional Ecuatoriana
              </a>
            </li>
            <li>
              <a
                href="https://www.arcotel.gob.ec/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Arcotel
              </a>
            </li>
            <li>
              <a
                href="https://www.telecomunicaciones.gob.ec/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Mintel
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contáctanos</h3>
          <p className="text-sm">Teléfono: +593999512324</p>
          <p className="text-sm">Teléfono: +593992484732</p>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="text-lg font-bold mb-4">Síguenos</h3>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start space-x-2 text-blue-400 hover:underline"
          >
            <FaInstagram className="w-6 h-6" />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      {/* Línea de Derechos Reservados */}
      <div className="text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Desarrollado por{" "}
        <a
          href="https://www.inigualitysoft.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Inigualitysoft
        </a>
      </div>
    </footer>
  );
}
