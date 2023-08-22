import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import capa from "../assets/capa.png";

const SectionMarketingEbook = () => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const upXl = useMediaQuery(theme.breakpoints.up("xl"));

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
              color: "#FFF",
            }}
          >
            RECEBA SEU E-BOOK GRATUITAMENTE
          </Typography>
          <Typography
            variant="overline"
            sx={{
              fontSize: "12px",
              color: "#FFF",
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
              backgroundColor: "#FFF",
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
        <Grid item sm={6} xs={12}>
          <img
            src={capa}
            alt=""
            style={{
              width: "200px",
              justifyContent: "flex-end",
              marginLeft: downSm ? "0px" : "200px",
            }}
          />
        </Grid>
      </Grid>

      <Button
        variant="outlined"
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
