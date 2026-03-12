import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import Layout from "./Layout";
import About from "./pages/about/about";
import ScrollToTopButton from "./components/shared/ScrollToTopButton/ScrollToTopButton";
import ContactUs from "./pages/ContactUs/ContactUs";
import PortfolioPage from "./pages/Portfolio/Portfolio";
import Exchang from "./pages/Exchange/Exchang";
import PortfolioCategory from "./pages/PortfolioCategory/PortfolioCategory";
import ScrollToTop from "./components/shared/ScrollToTop/ScrollToTop";
import Apply from "./pages/Apply/Apply";
// import Apply from "./pages/Apply/Apply";


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="portfolio" element={<PortfolioPage />} />
                <Route path="portfolio/:slug" element={<PortfolioCategory />} />
                <Route path="exchange" element={<Exchang />} />
                <Route path="apply" element={<Apply />} />


                <Route path="contact" element={<ContactUs />} />

              </Routes>
            </Layout>
          }
        />
      </Routes>
      <ScrollToTop/>
      <ScrollToTopButton />
    </>
  );
}

export default App;