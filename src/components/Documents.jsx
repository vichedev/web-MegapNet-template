import Footer from "./Footer";
import documentosData from "../data/documents";
import { FaFilePdf } from "react-icons/fa";

export default function Documents() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Encabezado Principal */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-500 text-white pt-24 pb-8 shadow-md">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Zona de Documentos</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            Explora y descarga documentos importantes relacionados con nuestros
            servicios y normativas. Información siempre disponible para ti.
          </p>
        </div>
      </div>

      {/* Contenido de Documentos */}
      <div className="container mx-auto px-8 py-8 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentosData.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              {/* Imagen e Ícono */}
              <div className="flex items-center justify-center bg-gray-100 h-48 relative">
                <FaFilePdf className="absolute top-4 right-4 text-red-500 text-2xl" />
                <img
                  src={doc.imageUrl}
                  alt={doc.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {doc.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{doc.description}</p>

                {/* Botón */}
                <a
                  href={doc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Ver Documento
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
