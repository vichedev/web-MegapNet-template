import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Plans from "./components/Plans";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Documents from "./components/Documents";
import ParametrosCalidad from "./components/ParametrosCalidad";

// Componente para manejar desplazamiento al cambiar de ruta
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Nav />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            {/* Página principal con todas las secciones */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Plans />
                  <Gallery />
                  <Location />
                </>
              }
            />
            {/* Página para "Documentos" */}
            <Route path="/documents" element={<Documents />} />
            {/* Página para "Parámetros de calidad" */}
            <Route path="/parametros-calidad" element={<ParametrosCalidad />} />
          </Routes>
        </main>
        {/* Footer siempre visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
