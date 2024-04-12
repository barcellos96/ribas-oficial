import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CallToActionSection = () => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/contato");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#C28B13",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        alignItems: "center",
        paddingBottom: 4,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          maxWidth: downMd ? "300px" : "500px",
          color: "#FFFFFF",
          fontWeight: 900,
          paddingTop: 4,
        }}
      >
        AGENDE UM TREINAMENTO GRATUITO
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: downMd ? "300px" : "500px",
          color: "#FFFFFF",
          marginTop: 2,
        }}
        gutterBottom
      >
        Entre em contato comigo e vamos preparar um treinamento perfeito para
        você ou sua equipe de vendas.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#050A30",
          height: "60px",
          width: "280px",
          opacity: 1,
          marginTop: 6,
          fontWeight: 900,

          "&:hover": {
            backgroundColor: "#050A30",
            opacity: 0.9,
          },
        }}
        onClick={handleHomeClick}
      >
        Entre em Contato
      </Button>
    </Box>
  );
};

export default CallToActionSection;
