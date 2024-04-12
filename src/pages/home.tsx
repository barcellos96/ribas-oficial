import SectionMarketingEbook from "../components/sections/sectionMarketingEbook";
import About from "../components/about";
import Header from "../components/headers/headerHome";
import Footer from "components/footer";
import NewArticles from "components/articles";
import CallToActionSection from "components/action";
import DepositionsSection from "components/depositions/depositionsSection";
import SectionMarketingMeeting from "components/sections/sectionMarketingMeeting";

const Home = () => {
  return (
    <>
      <Header />
      <SectionMarketingMeeting />
      <About />
      <SectionMarketingEbook />
      <NewArticles />
      <CallToActionSection />
      <DepositionsSection />
      <Footer />
    </>
  );
};

export default Home;
