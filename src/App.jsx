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
      <Routes>
        {/* Página principal con todas las secciones */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Gallery />
              <Plans />
              <Location />
              <Footer />
            </>
          }
        />
        {/* Página para "Documentos" */}
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </Router>
  );
}

export default App;
