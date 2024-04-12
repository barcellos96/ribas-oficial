import { useParams } from "react-router-dom";
import { articles } from "./articleData";
import { Box, Typography } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";

const ArticleDetailPage = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === Number(id));

  // Se o artigo for encontrado, renderize os detalhes, caso contrário, renderize uma mensagem de erro ou redirecione para uma página de erro
  return article ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "70%", // Define a largura máxima como 70% da largura do contêiner pai
        margin: "0 auto", // Centraliza o contêiner horizontalmente
      }}
    >
      <img
        src={article.imageUrl}
        alt={article.title}
        style={{
          width: "100%",
          maxWidth: "800px",
          maxHeight: "300px",
          marginTop: "1rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }} // Ajusta a largura, a borda e o raio da borda da imagem
      />
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          fontSize: 36,
          marginTop: "2rem",
          marginBottom: "2rem",
          textAlign: "center", // Centraliza o título horizontalmente
        }}
      >
        {article.title}
      </Typography>
      <Typography
        sx={{
          "& p": { marginBottom: "1rem", textAlign: "justify" }, // Centraliza o texto horizontalmente
          "& h2": {
            fontSize: 24,
            marginBottom: "1.2rem",
            textAlign: "center", // Centraliza os subtítulos horizontalmente
          },
        }}
      >
        {/* Renderizar o conteúdo HTML */}
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </Typography>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        marginBottom: "3rem",
      }}
    >
      <ErrorOutline sx={{ fontSize: 60, color: "error.main" }} />
      <Typography variant="body1">Artigo não encontrado.</Typography>
    </Box>
  );
};

export default ArticleDetailPage;
