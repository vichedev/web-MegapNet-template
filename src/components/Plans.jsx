import { motion } from "framer-motion";
import { FaMoon, FaWifi, FaSignal } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import ligaProLogo from "/img/ligapro.png";
import zappingLogo from "/img/zapping.png";
import bannerImage from "/img/banner.png";
import basicImage from "/img/planbasico.webp";
import basicPlusImage from "/img/planbasico+.webp";
import silverImage from "/img/plansilver.webp";
import goldImage from "/img/plangold.webp";
import platinumImage from "/img/planplatinum.webp";
import diamondImage from "/img/plandiamante.webp";
import installImage from "/img/beneficios/gratis.png";

export default function Plans() {
  const plans = [
    {
      name: "Básico",
      price: "$15.99",
      speed: "200 Megas",
      description: "Internet de alta velocidad",
      included: false,
      image: basicImage,
      whatsappMessage:
        "Hola, estoy interesado en el plan Básico de $15.99 con 200 Megas.",
      color: "bg-red-500",
    },
    {
      name: "Básico+",
      price: "$20",
      speed: "250 Megas",
      description: "Internet de alta velocidad",
      included: true,
      image: basicPlusImage,
      whatsappMessage:
        "Hola, estoy interesado en el plan Básico+ de $20 con 250 Megas.",
      color: "bg-yellow-500",
    },
    {
      name: "Silver",
      price: "$25",
      speed: "300 Megas",
      description: "Internet de alta velocidad",
      included: true,
      image: silverImage,
      whatsappMessage:
        "Hola, estoy interesado en el plan Silver de $25 con 300 Megas.",
      color: "bg-gray-500",
    },
    {
      name: "Gold",
      price: "$35",
      speed: "350 Megas",
      description: "Internet de alta velocidad",
      included: true,
      image: goldImage,
      whatsappMessage:
        "Hola, estoy interesado en el plan Gold de $35 con 350 Megas.",
      color: "bg-yellow-700",
    },
    {
      name: "Platinum",
      price: "$45",
      speed: "400 Megas",
      description: "Internet de alta velocidad",
      included: true,
      image: platinumImage,
      whatsappMessage:
        "Hola, estoy interesado en el plan Platinum de $45 con 400 Megas.",
      color: "bg-blue-500",
    },
    {
      name: "Diamond",
      price: "$55",
      speed: "500 Megas",
      description: "Internet de alta velocidad",
      included: true,
      image: diamondImage,
      whatsappMessage:
        "Hola, estoy interesado en el plan Diamond de $55 con 500 Megas.",
      color: "bg-purple-500",
    },
  ];

  const handleWhatsAppClick = (message) => {
    const phoneNumber = "+593999512324";
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">

        {/* Banner */}
        <InViewSection>
          <motion.img
            src={bannerImage}
            alt="Planes de Internet"
            className="mx-auto w-full max-w-5xl rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </InViewSection>

        {/* Descripción */}
        <InViewSection>
          <div className="mt-12 text-center">
            <motion.p
              className="text-2xl font-semibold text-gray-800 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Descubre nuestros planes de Internet que se ajustan a tus
              necesidades. ¡Disfruta de alta velocidad, canales exclusivos y el
              mejor entretenimiento con <span className="text-blue-600 font-bold">Liga Pro</span> y{" "}
              <span className="text-pink-500 font-bold">Zapping</span>!
            </motion.p>
          </div>
        </InViewSection>

        {/* Beneficios */}
        <InViewSection>
          <div className="mt-16">
            <h3 className="text-4xl font-extrabold text-center text-blue-800 mb-8 uppercase tracking-wide">
              BENEFICIOS QUE OFRECEMOS
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {/* Velocidad */}
              <div className="text-center">
                <motion.img
                  src="/img/beneficios/velocidad.png"
                  alt="Velocidad"
                  className="h-20 mx-auto mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                />
                <p className="text-lg font-medium text-gray-700">Alta Velocidad</p>
              </div>
              {/* Seguridad */}
              <div className="text-center">
                <motion.img
                  src="/img/beneficios/seguridad.png"
                  alt="Seguridad"
                  className="h-20 mx-auto mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                />
                <p className="text-lg font-medium text-gray-700">Máxima Seguridad</p>
              </div>
              {/* Servicio al Cliente */}
              <div className="text-center">
                <motion.img
                  src="/img/beneficios/servicio.png"
                  alt="Servicio al Cliente"
                  className="h-20 mx-auto mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <p className="text-lg font-medium text-gray-700">
                  Servicio al Cliente
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <motion.img
                src={installImage}
                alt="Instalación Gratis"
                className="h-24 mx-auto mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <p className="text-xl font-bold text-blue-600">
                ¡INSTALACIÓN GRATIS!
              </p>
            </div>
          </div>
        </InViewSection>

        <InViewSection>
          <div className="mt-16 pb-16 text-center">
            <motion.p
              className="text-2xl font-bold text-gray-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-pink-500">ZAPPING</span> y{" "}
              <span className="text-yellow-500">Liga Pro</span>
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Incluido a partir de planes de $20.
            </motion.p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-6">
              <motion.img
                src={zappingLogo}
                alt="Zapping"
                className="h-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.img
                src={ligaProLogo}
                alt="Liga Pro"
                className="h-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </div>
        </InViewSection>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <InViewSection key={index}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-all">
                {/* Header con el nombre del plan */}
                <div className={`p-4 text-white ${plan.color}`}>
                  <h3 className="text-lg font-bold text-center">{plan.name}</h3>
                </div>

                {/* Imagen del plan */}
                <div className="p-4">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-50 object-cover rounded-md mx-auto"
                  />
                </div>

                {/* Contenido principal */}
                <div className="p-6 text-center">
                  {/* Número de megas */}
                  <p className="text-5xl font-bold text-blue-800">{plan.speed.split(" ")[0]}</p>
                  <p className="text-sm text-gray-600">Megas</p>

                  {/* Precio */}
                  <p className="text-2xl font-bold mt-4">{plan.price}</p>
                  <p className="text-sm text-gray-600">incl. IVA</p>

                  {/* Descripción detallada */}
                  <div className="mt-4 space-y-3 text-left">
                    {/* Noches Vuela */}
                    <div className="flex items-start gap-3">
                      <FaMoon className="text-blue-500 mt-1" size={20} />
                      <p className="text-sm text-gray-600 leading-5">
                        <strong>Noches Vuela:</strong> Disfruta de hasta el doble de velocidad en tu ancho de banda de <strong>19:00 a 6:00 AM</strong>.
                      </p>
                    </div>

                    {/* Velocidad */}
                    <div className="flex items-start gap-3">
                      <FaSignal className="text-green-500 mt-1" size={20} />
                      <p className="text-sm text-gray-600 leading-5">{plan.description}</p>
                    </div>

                    {/* Características adicionales */}
                    <div className="flex items-start gap-3">
                      <FaWifi className="text-purple-500 mt-1" size={20} />
                      <p className="text-sm text-gray-600 leading-5">
                        Ej: 4G, doble banda ancha, acceso premium.
                      </p>
                    </div>
                  </div>

                  {/* Logos adicionales si están incluidos */}
                  {plan.included && (
                    <div className="flex justify-center gap-4 mt-4">
                      <img src={ligaProLogo} alt="Liga Pro" className="h-8" />
                      <img src={zappingLogo} alt="Zapping" className="h-8" />
                    </div>
                  )}
                </div>

                {/* Botón de acción */}
                <div className="p-4 text-center">
                  <button
                    onClick={() => handleWhatsAppClick(plan.whatsappMessage)}
                    className={`w-full py-3 px-6 text-white font-bold rounded-lg ${plan.color} hover:bg-opacity-90`}
                  >
                    Contratar
                  </button>
                </div>
              </div>
            </InViewSection>
          ))}
        </div>


      </div>
    </section>
  );
}

function InViewSection({ children }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
