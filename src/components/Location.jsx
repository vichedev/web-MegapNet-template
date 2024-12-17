import { motion } from "framer-motion";

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
            className="w-32 md:w-40 lg:w-48 mx-auto md:mx-0 mb-6"
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
          <p className="text-gray-600">
            📍 Dirección: Cdla Quisquis, Guayaquil, Ecuador
          </p>
          <p className="text-gray-600">📞 Teléfono: +593999512324</p>
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
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d249.18633775469243!2d-79.92051363463214!3d-2.1607775835828025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scdla%20quisquis!5e0!3m2!1ses!2sec!4v1733796231788!5m2!1ses!2sec"
          width="100%"
          height="450"
          className="rounded-lg shadow-lg border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
}
