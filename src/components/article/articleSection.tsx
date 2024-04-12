import React, { useRef } from "react";
import ArticleCard, { ArticleProps } from "./articleCard";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

interface ArticleSectionProps {
  articles: ArticleProps[];
}

const ArticleSection = ({ articles }: ArticleSectionProps) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200, // Adjust this value as needed
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200, // Adjust this value as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      mt={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        overflowX: "hidden",
        paddingLeft: downSm ? 2 : downMd ? 2 : 10,
        paddingRight: downSm ? 2 : downMd ? 2 : 14,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: downSm ? "column" : "row",
          justifyContent: "space-between",
          alignItems: downSm ? "left" : "center",
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: "#C28B13",
            fontWeight: 300,
            paddingBottom: downSm ? 0 : 2,
            paddingLeft: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          # ÚLTIMOS ARTIGOS
          <IconButton onClick={handleScrollLeft} sx={{ ml: 1 }}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton onClick={handleScrollRight}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Typography>

        <Typography
          variant="overline"
          onClick={() => {
            navigate("/conteudo");
            window.scrollTo({ top: 0, behavior: "smooth" }); // Redireciona para o topo da página
          }}
          sx={{
            color: "#C28B13",
            cursor: "pointer",
            paddingLeft: 2,

            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          VER TODOS
        </Typography>
      </Box>

      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: downSm ? "auto" : "hidden",
          padding: "10px",
          maxWidth: "100%",
          position: "relative",
        }}
      >
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            id={article.id}
            title={article.title}
            content={article.content}
            imageUrl={article.imageUrl}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ArticleSection;
