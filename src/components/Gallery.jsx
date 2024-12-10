export default function Gallery() {
  return (
    <section id="gallery" className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Galería
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-40 bg-gray-600 rounded-lg flex items-center justify-center text-white"
            >
              Imagen {index + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
