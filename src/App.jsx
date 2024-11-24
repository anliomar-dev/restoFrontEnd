import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";  // Corriger l'import de Layout
import Home from "./pages/Home";
import Lunch from "./pages/Lunch";
import Starter from "./pages/starter.jsx";
import Breakfast from "./pages/Breakfast";  // Corriger le chemin
import Dinner from "./pages/Dinner";
import Dessert from "./pages/dessert";
import CategoryDishes from "./pages/dishes/categoryDishes.jsx";

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="starter" element={<Starter />} />
                  <Route path="breakfast" element={<Breakfast />} />
                  <Route path="lunch" element={<Lunch />} />
                  <Route path="dinner" element={<Dinner />} />
                  <Route path="dessert" element={<Dessert />} />
                  <Route path="dishes/:categoryName" element={<CategoryDishes />} />
              </Route>
          </Routes>
      </BrowserRouter>
    );
}

export default App;

