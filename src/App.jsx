import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import Layout from "./Layout";
import About from "./pages/about/about";
import ScrollToTopButton from "./components/shared/ScrollToTopButton/ScrollToTopButton";
import ContactUs from "./pages/ContactUs/ContactUs";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import PortfolioPage from "./pages/Portfolio/Portfolio";
import Exchang from "./pages/Exchange/Exchang";
import PortfolioCategory from "./pages/PortfolioCategory/PortfolioCategory";


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


                <Route path="contact-us" element={<ContactUs />} />
                <Route path="terms" element={<Terms />} />
                <Route path="privacy" element={<Privacy />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;