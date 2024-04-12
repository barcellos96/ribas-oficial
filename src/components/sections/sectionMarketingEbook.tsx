import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import capa from "assets/capa.png";

const SectionMarketingEbook = () => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const upXl = useMediaQuery(theme.breakpoints.up("xl"));

  const handleHomeClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5551991662343&text=Olá,%20vim%20do%20seu%20site%20e%20gostaria%20de%20tirar%20algumas%20dúvidas...",
      "_blank"
    ); // Abre a página inicial em uma nova janela
  };

  return (
    <Box
      sx={{
        display: "flex",
        paddingLeft: downSm ? "0%" : downMd ? "10%" : "15%",
        backgroundColor: "#050A30",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        paddingTop: "30px",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: downSm ? 6 : 10,
          paddingTop: 2,
          paddingBottom: 4,
        }}
      >
        <Grid
          item
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "24px",
              fontWeight: 900,
              color: "#FFFFFF",
            }}
          >
            RECEBA SEU E-BOOK GRATUITAMENTE
          </Typography>
          <Typography
            variant="overline"
            sx={{
              fontSize: "12px",
              color: "#FFFFFF",
            }}
          >
            persuadir seus clientes com as melhores perguntas, levando ele a
            compra! É uma boa estratégia
          </Typography>
          <TextField
            label="seu melhor e-mail"
            placeholder="contato@email.com"
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
              backgroundColor: "#FFFFFF",
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#C28B13",
              height: "55px",
              opacity: 1,
              "&:hover": {
                backgroundColor: "#C28B13",
                opacity: 0.8,
              },
            }}
          >
            Receber E-book Grátis
          </Button>
        </Grid>
        <Grid item sm={6} xs={12} sx={{}}>
          <img
            src={capa}
            alt=""
            style={{
              width: "200px",
              justifyContent: "center",
              marginLeft: downSm ? "50px" : upXl ? "200px" : "100px",
            }}
          />
        </Grid>
      </Grid>

      <Button
        variant="outlined"
        onClick={handleHomeClick}
        sx={{
          backgroundColor: "transparent",
          height: "75px",
          opacity: 1,
          color: "#FFF",
          border: "3px solid #FFF",
          minWidth: "280px",
          width: "80%",
          maxWidth: "500px",
          fontSize: "18px",
          fontWeight: 300,
          marginTop: "20px",
          marginBottom: "40px",
          marginLeft: downSm ? "0%" : downMd ? "-10%" : "-15%",
          "&:hover": {
            backgroundColor: "#3e8d3e",
            opacity: 0.8,
            border: "none",
          },
        }}
      >
        Tem alguma dúvida? Posso ajudar?
      </Button>
    </Box>
  );
};

export default SectionMarketingEbook;
