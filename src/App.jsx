import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";  // Corriger l'import de Layout
import Home from "./pages/Home";

import CategoryDishes from "./pages/dishes/categoryDishes.jsx";

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="dishes/:categoryName" element={<CategoryDishes />} />
              </Route>
          </Routes>
      </BrowserRouter>
    );
}

export default App;

