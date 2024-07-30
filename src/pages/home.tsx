import SectionMarketingEbook from "../components/sections/sectionMarketingEbook";
import About from "../components/about";
import Header from "../components/headers/headerHome";
import Footer from "components/footer";
import NewArticles from "components/articles";
import CallToActionSection from "components/action";
import DepositionsSection from "components/depositions/depositionsSection";
import SectionMarketingMeeting from "components/sections/sectionMarketingMeeting";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <Header />
      <SectionMarketingMeeting />
      <About />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <SectionMarketingEbook />
        {/* <NewArticles /> */}
        <CallToActionSection />
      </Box>
      <DepositionsSection />
      <Footer />
    </>
  );
};

export default Home;
