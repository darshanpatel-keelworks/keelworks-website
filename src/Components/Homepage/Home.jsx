// **************** Components **************
import Navbar from "../Navbar/Navbar";
import Slider from "./Slider/Slider";
import Cards from "./Cards/Cards";
import Banner from "./Banner/Banner";
import Partners from "./Partners/Partners";
import Footer from "../Footer/Footer";
// ******************************************

const Home = () => {
  return (
    <div className="w-screen bg-slate-500">
      <Navbar />
      <Slider />
      <Cards />
      <Banner />
      <Partners />
      <Footer />
    </div>
  );
};
export default Home;
