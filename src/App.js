import TopSocialLinks from "./components/topSocialLinks/TopSocialLinks";
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import LatestNews from "./components/latestNews/LatestNews";
import Mission from "./components/mission/Mission";
import Beneficiaries from "./components/beneficiaries/Beneficiaries";
import Founders from "./components/founders/Founders";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <TopSocialLinks />
      <HeaderComponent />
      <LatestNews />
      <Mission />
      <Beneficiaries />
      <Founders />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
