import ArticleCard, { ArticleProps } from "./articleCard";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

interface ArticleGapProps {
  articles: ArticleProps[];
}

const ArticleGap = ({ articles }: ArticleGapProps) => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      mt={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        paddingLeft: downSm ? 2 : downMd ? 2 : 10,
        paddingRight: downSm ? 2 : downMd ? 2 : 14,
        marginBottom: "20px",
      }}
    >
      <Typography
        variant="overline"
        sx={{
          color: "#C28B13",
          fontWeight: 300,
          paddingBottom: 2,
          paddingLeft: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        # MEUS CONTEÚDOS
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", // Define a grade flexível
          gap: 6, // Espaçamento entre os cartões
          position: "relative",
        }}
      >
        {articles.map((article, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <ArticleCard
              id={article.id}
              title={article.title}
              content={article.content}
              imageUrl={article.imageUrl}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ArticleGap;
