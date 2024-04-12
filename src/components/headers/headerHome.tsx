import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logoRibasWhite from "../../assets/logoRibasWhite.png";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contato");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Redireciona para o topo da página
  };

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
        background: "linear-gradient(180deg, #050A30 20%, #FFFFFF)",
        backgroundSize: "10050%",
        marginTop: downSm ? "-200px " : "-20px",
        paddingBottom: downSm ? "0px" : "80px",
        alignItems: "center",
      }}
    >
      <Grid container>
        <Button
          variant="contained"
          onClick={handleContactClick}
          sx={{
            position: "absolute",
            top: downSm ? "0px" : !downMd ? "10px" : "10px",
            right: downMd ? "12%" : upXl ? "20%" : "10%",
            left: downSm ? "12%" : "auto",

            background: "transparent",

            marginTop: "50px",
            height: "50px",
            border: "1px solid #C28B13",
            color: "#C28B13",
            borderRadius: "4px",

            zIndex: 99,
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "transparent",
              opacity: 0.8,
            },
          }}
        >
          Contato
        </Button>

        <Grid
          item
          sx={{
            display: "flex",
            background: "transparent",
            alignItems: downSm ? "center" : "flex-start",
            justifyContent: downSm ? "center" : "flex-start",
            flexDirection: "column",
            marginTop: downSm ? "100px" : "0px",
            marginLeft: downSm ? "0px" : downMd ? "15%" : "35%",
            padding: downSm ? 3 : 0,
            width: "100%",
          }}
        >
          <img
            src={logoRibasWhite}
            alt="logo-ribas"
            style={{
              width: "250px",
              marginTop: downSm ? 150 : 0,
              marginBottom: -25,
              marginLeft: downSm ? "0px" : "-55px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "#FFF",
              textAlign: downSm ? "center" : "start",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                maxWidth: downSm ? "320px" : downMd ? "250px" : "400px",
                fontWeight: 900,
                fontSize: 30,
                lineHeight: "30px",
              }}
            >
              Mais de 12 anos Especialista em vendas e gestão de equipes
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: downSm ? "300px" : downMd ? "250px" : "370px",
                marginTop: 2,
              }}
            >
              Ajudo profissionais autônomos e equipes de vendas aumentarem seus
              resultados, através de treinamentos personalizados.{" "}
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#C28B13",
                marginTop: "50px",
                marginBottom: "20px",
                height: "40px",
                minWidth: downSm ? "200px" : "300px",
                opacity: 1,
                borderRadius: "4px",
                zIndex: 2,
                "&:hover": {
                  backgroundColor: "#C28B13",
                  opacity: 0.9,
                },
              }}
              onClick={() => {
                navigate("/treinamentos-e-palestras");
                window.scrollTo({ top: 0, behavior: "smooth" }); // Redireciona para o topo da página
              }}
            >
              melhorar meus resultados
            </Button>
          </Box>

          {downSm && (
            <Box
              sx={{
                width: downSm ? "90%" : downMd ? "80%" : "70%",
                height: "100%",
                marginTop: 3,
                borderRadius: 3,
              }}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=KnFCLtz5i4w&t=1024s"
                width="100%"
                height="100%"
                controls={false}
                playing={false}
              />
            </Box>
          )}
        </Grid>
      </Grid>
      {!downSm && (
        <Box
          sx={{
            width: downSm ? "90%" : downMd ? "80%" : "80%",
            height: downSm ? "90%" : downMd ? "35%" : "300px",
            marginTop: 26,
            borderRadius: 3,
            marginRight: downMd ? "12%" : upXl ? "20%" : "10%",
          }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=KnFCLtz5i4w&t=1024s"
            width="100%"
            height="100%"
            controls={false}
            playing={false}
          />
        </Box>
      )}
    </Box>
  );
};

export default Header;
