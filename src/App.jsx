import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout"; // Corriger l'import de Layout
import Home from "./pages/home";
import NotFound from "./pages/notFound";

import CategoryDishes from "./pages/dishes/categoryDishes.jsx";

function App() {
    return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dishes/:categoryName" element={<CategoryDishes />} />
        </Route>
            <Route path="*" element={<NotFound />} /> {/* Route 404 */}
        </Routes>
    </BrowserRouter>
    );
}

export default App;
