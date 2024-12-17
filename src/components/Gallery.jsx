import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Para accesibilidad

export default function Gallery() {
  // Array de rutas de las imágenes
  const images = [
    "/img/gallery/1.jpg",
    "/img/gallery/2.jpg",
    "/img/gallery/3.jpg",
    "/img/gallery/4.jpg",
    "/img/gallery/5.jpg",
    "/img/gallery/6.jpg",
    "/img/gallery/7.jpg",
    "/img/gallery/8.jpg",
  ];

  // Estado para el modal
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Función para abrir el modal
  const openModal = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage("");
  };

  return (
    <section id="gallery" className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Galería
        </h2>
        {/* Descripción */}
        <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
          Explora nuestra galería con imágenes destacadas de nuestros eventos y
          proyectos recientes. Cada imagen cuenta una historia única de nuestro
          trabajo y dedicación.
        </p>

        {/* Galería */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => openModal(src)} // Abre el modal al hacer clic
            >
              <img
                src={src}
                alt={`Galería Imagen ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal de la imagen */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Imagen Ampliada"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        className="relative max-w-4xl w-full p-4 bg-transparent outline-none"
      >
        {/* Botón para cerrar */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white text-3xl font-bold z-10 hover:text-red-500"
        >
          &times;
        </button>

        {/* Imagen con zoom */}
        <img
          src={selectedImage}
          alt="Imagen Ampliada"
          className="w-full h-auto max-h-[90vh] object-contain transform transition-transform duration-300 hover:scale-110"
        />
      </Modal>
    </section>
  );
}
