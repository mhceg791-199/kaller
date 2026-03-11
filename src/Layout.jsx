import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar/Navbar";

function Layout({ children }) {


  return (
    <>
      
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
