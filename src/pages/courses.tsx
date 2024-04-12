import { Box } from "@mui/material";
import HeaderSecond from "components/headers/headerOtherPages";
import Footer from "components/footer";
import TrainingPage from "components/courses/training";

const CoursesPage = () => {
  return (
    <Box display="flex" minHeight="100vh" flexDirection="column">
      <Box flexGrow={1}>
        <HeaderSecond pageTitle="TREINAMENTOS & PALESTRAS" />
        <TrainingPage />
      </Box>
      <Footer />
    </Box>
  );
};

export default CoursesPage;
