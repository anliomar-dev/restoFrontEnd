import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";  // Corriger l'import de Layout
import Home from "./pages/Home";
import Lunch from "./pages/Lunch";
import Starter from "./pages/starter.jsx";
import Breakfast from "./pages/Breakfast";  // Corriger le chemin
import Dinner from "./pages/Dinner";

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="starter" element={<Starter />} />
                  <Route path="breakfast" element={<Breakfast />} />  {/* Corriger le chemin */}
                  <Route path="lunch" element={<Lunch />} />
                  <Route path="dinner" element={<Dinner />} />
              </Route>
          </Routes>
      </BrowserRouter>
    );
}

export default App;

