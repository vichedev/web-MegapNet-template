import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ligaProLogo from "/img/ligapro.png";
import zappingLogo from "/img/zapping.png";
import bannerImage from "/img/banner.png";
import basicImage from "/img/planbasico.jpg";
import basicPlusImage from "/img/planbasico+.jpg";
import silverImage from "/img/plansilver.jpg";
import goldImage from "/img/plangold.jpg";
import platinumImage from "/img/planplatinum.jpg";
import diamondImage from "/img/plandiamante.jpg";
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
          <img
            src={bannerImage}
            alt="Planes de Internet"
            className="mx-auto w-full max-w-4xl mb-12"
          />
        </InViewSection>

        {/* Descripción */}
        <InViewSection>
          <p className="text-center text-lg text-gray-600 mb-16">
            Descubre nuestros planes de Internet que se ajustan a tus
            necesidades. ¡Disfruta de alta velocidad, canales exclusivos y el
            mejor entretenimiento con Liga Pro y Zapping!
          </p>
        </InViewSection>

        {/* Beneficios */}
        <InViewSection>
          <div className="text-center mb-16">
            <h3 className="text-xl font-bold mb-6">Beneficios con nosotros:</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              {/* Velocidad */}
              <div className="text-center">
                <img
                  src="/img/beneficios/velocidad.png"
                  alt="Velocidad"
                  className="h-16 mx-auto mb-2"
                />
                <p className="text-gray-700">Velocidad</p>
              </div>
              {/* Seguridad */}
              <div className="text-center">
                <img
                  src="/img/beneficios/seguridad.png"
                  alt="Seguridad"
                  className="h-16 mx-auto mb-2"
                />
                <p className="text-gray-700">Seguridad</p>
              </div>
              {/* Servicio al Cliente */}
              <div className="text-center">
                <img
                  src="/img/beneficios/servicio.png"
                  alt="Servicio al Cliente"
                  className="h-16 mx-auto mb-2"
                />
                <p className="text-gray-700">Servicio a cliente</p>
              </div>
            </div>
            <div className="mt-8">
              <img
                src={installImage}
                alt="Instalación Gratis"
                className="h-20 mx-auto"
              />
              <p className="text-gray-700 font-bold mt-4">INSTALACIÓN GRATIS</p>
            </div>
          </div>
        </InViewSection>

        {/* Zapping y Liga Pro */}
        <InViewSection>
          <div className="text-center mb-16">
            <p className="font-bold text-lg text-gray-700">
              <span className="text-pink-500">ZAPPING</span> y{" "}
              <span className="text-yellow-500">Liga Pro</span>
            </p>
            <p className="text-gray-700">Incluido a partir de planes de $20.</p>
            <div className="flex justify-center items-center mt-4 gap-4">
              <img src={zappingLogo} alt="Zapping" className="h-12" />
              <img src={ligaProLogo} alt="Liga Pro" className="h-12" />
            </div>
          </div>
        </InViewSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <InViewSection key={index}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-all">
                <div className={`p-4 text-white ${plan.color}`}>
                  <h3 className="text-lg font-bold text-center">{plan.name}</h3>
                </div>
                <div className="p-4">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-50 object-cover rounded-md mx-auto"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold">{plan.price}</p>
                  <p className="text-sm text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">{plan.speed}</p>
                  {plan.included && (
                    <div className="flex justify-center gap-4 mt-4">
                      <img src={ligaProLogo} alt="Liga Pro" className="h-8" />
                      <img src={zappingLogo} alt="Zapping" className="h-8" />
                    </div>
                  )}
                </div>
                <div className="p-4 text-center">
                  <button
                    onClick={() => handleWhatsAppClick(plan.whatsappMessage)}
                    className={`w-full py-2 px-4 text-white font-bold rounded-md ${plan.color} hover:bg-opacity-90`}
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
