import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-8">
        {/* Logo y Descripción */}
        <div className="text-center md:text-left">
          <img
            src="/img/icon/logofooter.png"
            alt="Logo"
            className="h-16 mb-4 mx-auto md:mx-0"
          />
          <p className="text-sm text-gray-400 max-w-xs">
            MEGATNET - Conectando el mundo con velocidad y confianza.
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div className="text-center md:text-left">
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
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Contáctanos</h3>
          <a
            href="tel:+593999512324"
            className="block text-sm text-blue-400 hover:underline"
          >
            +593 999 512 324
          </a>
          <a
            href="tel:+593992484732"
            className="block text-sm text-blue-400 hover:underline"
          >
            +593 992 484 732
          </a>
        </div>

        {/* Redes Sociales - Facebook */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Síguenos</h3>
          <a
            href="https://www.facebook.com/share/14aq5Y5CMD/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start space-x-2 text-blue-400 hover:underline"
          >
            <FaFacebook className="w-6 h-6" />
            <span>Megapnet </span>
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
