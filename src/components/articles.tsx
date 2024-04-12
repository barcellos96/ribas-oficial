import { Box, useTheme } from "@mui/material";
import ArticleSection from "./article/articleSection";
import { articles } from "./article/articleData";

const NewArticles = () => {
  return (
    <Box
      sx={{
        display: "flex",
        paddingBottom: 8,
      }}
    >
      <ArticleSection articles={articles} />
    </Box>
  );
};

export default NewArticles;
