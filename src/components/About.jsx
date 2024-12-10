import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Encabezado */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
            ¿Quiénes Somos?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            En <span className="font-bold text-blue-600">MegapNet</span>, nos
            dedicamos a ofrecer soluciones de conectividad confiables, rápidas y
            de alta calidad, liderando la innovación en telecomunicaciones con
            <span className="font-bold text-blue-600"> Teleing S.A.</span>
          </p>
        </motion.div>

        {/* Bloques de Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 text-center transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/img/about/mission-large.png" // Cambia esta ruta
              alt="Nuestra Misión"
              className="w-24 h-24 mx-auto mb-6"
            />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Nuestra Misión
            </h3>
            <p className="text-lg text-gray-600">
              Conectar a las personas con el mundo a través de internet de alta
              velocidad, brindando soluciones accesibles y confiables que
              transformen vidas.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 text-center transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/img/about/vision-large.png" // Cambia esta ruta
              alt="Nuestra Visión"
              className="w-24 h-24 mx-auto mb-6"
            />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Nuestra Visión
            </h3>
            <p className="text-lg text-gray-600">
              Ser líderes en telecomunicaciones, destacándonos por nuestra
              innovación y excelencia en soluciones de conectividad.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white rounded-lg shadow-xl p-8 text-center transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src="/img/about/values-large.png" // Cambia esta ruta
              alt="Nuestros Valores"
              className="w-24 h-24 mx-auto mb-6"
            />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Nuestros Valores
            </h3>
            <p className="text-lg text-gray-600">
              Innovación, compromiso, excelencia y cercanía con nuestros
              clientes. Transformamos el servicio en confianza.
            </p>
          </motion.div>
        </div>

        {/* Sección de CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-12 px-6 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-4xl font-bold mb-4">
            ¿Listo para conectarte al futuro?
          </h3>
          <p className="text-lg md:text-xl mb-6">
            Con <span className="font-bold">MegapNet</span> y{" "}
            <span className="font-bold">Teleing S.A.</span>, disfrutarás de la
            mejor experiencia en internet de alta velocidad. ¡Contáctanos hoy!
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            Contáctanos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
