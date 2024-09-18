import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Latest from "./components/Latest/Latest";
import Items from "./components/Items/Items"; 
import ContactForm from "./components/Contact/Contact";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route path="/" element={<Hero handleOrderPopup={handleOrderPopup} />} />
          <Route path="/items" element={<Items />} />
          <Route path="/latest" element={<Latest />} /> 
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
        <Subscribe />
      </div>
    </Router>
  );
};

export default App;