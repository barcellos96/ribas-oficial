import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logoRibasWhite from "../assets/logoRibasWhite.png";
import leandro from "../assets/leandro-sem-fundo.png";

const Header = () => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const upXl = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: downSm ? "1050px" : "550px",
        background: "linear-gradient(110deg, #050A30, #d6d6d6)",
        backgroundSize: "600% 100%",
        marginTop: downSm ? "-200px " : "-20px",
        paddingBottom: "80px",
      }}
    >
      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            background: "transparent",
            alignItems: downSm ? "center" : "flex-start",
            justifyContent: downSm ? "center" : "flex-start",
            flexDirection: "column",
            marginTop: downSm ? "100px" : "0px",
            marginLeft: downSm ? "0px" : downMd ? "10%" : "20%",
            padding: downSm ? 3 : 0,
            width: "100%",
          }}
        >
          <img
            src={logoRibasWhite}
            alt="logo-ribas"
            style={{
              width: "320px",
              marginLeft: downSm ? "0px" : "-85px",
            }}
          />

          <Typography
            variant="overline"
            sx={{
              position: "absolute",
              top: downSm ? "320px" : "250px",
              color: "#C28B13",
              fontWeight: 300,
            }}
          >
            # seja bem-vindo
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: downMd ? "400px" : "420px",
              color: "#FFF",
              marginTop: "-20px",
              textAlign: downSm ? "center" : "start",
              fontWeight: 900,
            }}
          >
            Ajudo profissionais autônomos e equipes de vendas aumentarem seus
            resultados, através de treinamentos personalizados.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#C28B13",
              marginTop: "50px",
              marginBottom: "20px",
              height: "60px",
              opacity: 1,
              borderRadius: "20px",
              zIndex: 2,

              "&:hover": {
                backgroundColor: "#C28B13",
                opacity: 0.8,
              },
            }}
          >
            Conheça meus treinamentos
          </Button>
        </Grid>

        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: downSm ? "0px" : !downMd ? "10px" : "10px",
            right: downMd ? "12%" : upXl ? "26%" : "10%",
            left: downSm ? "12%" : "auto",

            background: "transparent",

            marginTop: "50px",
            height: "50px",
            border: "1px solid #C28B13",
            color: "#C28B13",
            borderRadius: "20px",

            zIndex: 99,
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "transparent",
              opacity: 0.8,
              color: "#fff",
            },
          }}
        >
          Orçamentos
        </Button>

        <img
          src={leandro}
          alt="leandro"
          style={{
            position: "absolute",
            width: downSm ? "180px" : !downMd ? "350px" : "250px",
            top: downSm ? "658px" : !downMd ? "80px" : "230px",
            right: downMd ? "12%" : upXl ? "25%" : "10%",
            zIndex: 1,
          }}
        />
      </Grid>
    </Box>
  );
};

export default Header;
