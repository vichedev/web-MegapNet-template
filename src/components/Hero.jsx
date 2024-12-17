import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/img/fondo/fondo.png')", // Cambia esta ruta a la imagen de fondo
      }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }} // Asegura que el Hero esté debajo del nav
      ></div>

      {/* Contenido del Hero */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-[64px]">
        {/* Logo */}
        <motion.img
          src="/img/banner.png" // Cambia esta ruta al logo de MEGATNET
          alt="MEGATNET"
          className="w-64 md:w-[450px] lg:w-[550px] mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Título */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Internet de Alta Velocidad
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Con <span className="font-bold">MEGATNET</span>, de{" "}
          <span className="font-bold">Teleing S.A.</span>, disfruta de
          conexiones confiables, rápidas y de calidad. ¡Lleva tu experiencia al
          siguiente nivel!
        </motion.p>

        {/* Botón */}
        <motion.a
          href="#about"
          className="bg-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Descubre Más
        </motion.a>
      </div>
    </section>
  );
}
