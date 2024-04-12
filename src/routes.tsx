import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ContactPage from "./pages/contact";
import ContentPage from "./pages/content";
import ArticlePage from "pages/article";
import CoursesPage from "pages/courses";

const Application = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path="/conteudo" element={<ContentPage />} />
      <Route path="/conteudo/artigo/:id" element={<ArticlePage />} />
      <Route path="/treinamentos-e-palestras" element={<CoursesPage />} />
    </Routes>
  );
};

export default Application;
