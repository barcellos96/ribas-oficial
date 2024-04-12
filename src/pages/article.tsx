import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { articles } from "components/article/articleData";
import ArticleDetailPage from "components/article/articleDetails";
import ArticleSection from "components/article/articleSection";
import Footer from "components/footer";
import HeaderSecond from "components/headers/headerOtherPages";

const ArticlePage = () => {
  const { id } = useParams(); // Obtém o ID da rota

  // Filtra os artigos, excluindo o artigo com o ID da rota
  const filteredArticles = articles.filter(
    (article) => article.id !== Number(id)
  );

  return (
    <Box>
      <HeaderSecond pageTitle="CONTEÚDO" />
      <ArticleDetailPage />
      <ArticleSection articles={filteredArticles} />
      <Footer />
    </Box>
  );
};

export default ArticlePage;
