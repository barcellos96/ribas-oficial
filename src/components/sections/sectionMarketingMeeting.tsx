import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const SectionMarketingMeeting = () => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        paddingLeft: "15%",
        alignItems: "center",
        justifyItems: "center",
        paddingTop: "30px",
        flexDirection: downSm ? "column" : "row",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: downSm ? "100%" : "60%",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "24px",
            fontWeight: 900,
            color: "#C28B13",
            paddingRight: downSm ? 2 : 0,
          }}
        >
          VAMOS FALAR SOBRE VENDAS?
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontSize: "16px",
            color: "#D6D6D6",
            paddingRight: downSm ? 2 : 10,
            marginRight: downSm ? 6 : downMd ? 2 : 10,
          }}
        >
          Que tal nos conectarmos em um rápido café online para mergulharmos no
          mundo das vendas? Juntos, podemos descobrir estratégias vencedoras
          para impulsionar o seu sucesso. Estou animado para compartilhar
          insights valiosos e encontrar soluções personalizadas para os desafios
          do seu negócio. Vamos agendar agora e dar o próximo passo rumo ao
          crescimento!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginRight: downSm ? 6 : downMd ? 2 : 42,
          marginLeft: downSm ? -2 : 0,
          marginTop: downSm ? 2 : 0,
          flexDirection: "column",
          width: downSm ? "80%" : downMd ? "60%" : "465px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: downMd ? "column" : "row",
            gap: downMd ? 0 : 2,
          }}
        >
          <TextField
            label="Qual seu nome?"
            placeholder="Leandro Ribas"
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
              backgroundColor: "#FFFFFF",
            }}
          />
          <TextField
            label="Seu melhor e-mail"
            placeholder="contato@email.com"
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
              backgroundColor: "#FFFFFF",
            }}
          />
        </Box>

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
          VAMOS TOMAR UM CAFÉ
        </Button>
      </Box>
    </Box>
  );
};

export default SectionMarketingMeeting;
