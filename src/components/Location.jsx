import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Location() {
  return (
    <section
      id="location"
      className="bg-gray-100 py-16 overflow-hidden" // Evita el desbordamiento horizontal
    >
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagen (oculta en modo móvil) */}
        <motion.div
          className="hidden md:flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/img/ubi/ubi.png"
            alt="Ubicación"
            className="w-full max-w-[450px] rounded-lg"
          />
        </motion.div>

        {/* Información */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/img/banner.png"
            alt="MEGATNET"
            className="w-64 md:w-80 lg:w-96 mx-auto md:mx-0 mb-6"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestra Ubicación
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Encuentra nuestras oficinas principales en la ciudad. Estamos aquí
            para ayudarte a conectar con el mundo. ¡Ven y conócenos!
          </p>
          <p className="text-lg text-gray-800 font-bold mb-2">
            MEGATNET - Una empresa de{" "}
            <span className="text-blue-600">Teleing S.A.</span>
          </p>
          <p className="text-gray-600 flex items-center mb-4">
            <FaMapMarkerAlt className="text-red-600 mr-2" />
            <span>
              Dirección: Cdla Quisquis, Guayaquil, Ecuador
            </span>
          </p>
          <div>
            <p className="text-gray-600 flex items-center mb-2">
              <FaPhoneAlt className="text-green-500 mr-2" />
              <a href="tel:+593999512324" className="hover:underline">
                +593999512324
              </a>
            </p>
            <p className="text-gray-600 flex items-center mb-2">
              <FaPhoneAlt className="text-green-500 mr-2" />
              <a href="tel:+593992484732" className="hover:underline">
                +593992484732
              </a>
            </p>
            <p className="text-gray-600 flex items-center mb-2">
              <FaEnvelope className="text-blue-600 mr-2" />
              <a href="mailto:teleing@hotmail.com" className="hover:underline">
                teleing@hotmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mapa */}
      <motion.div
        className="mt-12 w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <iframe
          src="https://maps.google.com/maps?q=-2.15755391120911,-79.922248840332&hl=es&z=18&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </motion.div>
    </section>
  );
}
