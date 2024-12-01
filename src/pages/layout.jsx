import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import Spinner from "../components/common/spinner.jsx";

function Layout() {
  // loading is display only on first visit of the session
    const [loading, setLoading] = useState(
    !sessionStorage.getItem("hasVisitedHome")
    );

    useEffect(() => {
    if (!sessionStorage.getItem("hasVisitedHome")) {
        const timeoutId = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisitedHome", "true");
        }, 3000);

        return () => {
        clearTimeout(timeoutId);
        };
    } else {
        setLoading(false);
    }
    }, []);

    return (
    <>
        {loading ? (
        <div className="fixed top-0 left-0 bg-white h-screen w-screen flex justify-center items-center">
            <Spinner />
        </div>
        ) : (
        <div className="layout-container">
            <Navbar />
            <main className="main-content">
            <Outlet />
            </main>
            <Footer />
        </div>
        )}
    </>
    );
}

export default Layout;
