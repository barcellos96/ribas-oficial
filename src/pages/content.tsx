import { Box } from "@mui/material";
import { articles } from "components/article/articleData";
import ArticleGap from "components/article/articleGap";
import Footer from "components/footer";
import HeaderSecond from "components/headers/headerOtherPages";

const ContentPage = () => {
  return (
    <Box display="flex" minHeight="100vh" flexDirection="column">
      <Box flexGrow={1}>
        <HeaderSecond pageTitle="CONTEÚDO" />
        <ArticleGap articles={articles} />
      </Box>
      <Footer />
    </Box>
  );
};

export default ContentPage;
