import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Foooter";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/NewsLetter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
