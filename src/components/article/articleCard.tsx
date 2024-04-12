import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface ArticleProps {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

const ArticleCard = ({ id, title, content, imageUrl }: ArticleProps) => {
  const navigate = useNavigate();

  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const handleSaibaMaisClick = (articleId: number) => {
    navigate(`/conteudo/artigo/${articleId}`);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Redireciona para o topo da página
  };

  return (
    <Card sx={{ minWidth: downSm ? 250 : downMd ? 320 : 350, maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt="Article Image"
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div
            dangerouslySetInnerHTML={{
              __html:
                content.length > 250
                  ? `${content.substring(0, 150)}...`
                  : content,
            }}
          />
        </Typography>
      </CardContent>

      <Button
        variant="outlined"
        onClick={() => handleSaibaMaisClick(id)}
        sx={{
          color: "#C28B13",
          borderColor: "#C28B13",
          opacity: 1,
          marginLeft: 2,
          marginBottom: 2,
          fontSize: "12px",

          "&:hover": {
            borderColor: "#C28B13",
            color: "#C28B13",
            backgroundColor: "#C28B1330",
          },
        }}
      >
        saiba mais
      </Button>
    </Card>
  );
};

export default ArticleCard;
