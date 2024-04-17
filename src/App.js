import "./App.css";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" flex flex-col gap-32">
      <Navbar />
      <Hero />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
