import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { aboutData } from "./aboutRibas/aboutRibasData";

const About = () => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: downSm ? "10%" : downMd ? "10%" : "20%",
        height: "100%",
        paddingBottom: "80px",
      }}
    >
      <Grid
        container
        sx={{
          marginTop: "80px",
        }}
      >
        <Grid item sm={5} xs={12} sx={{ marginRight: "30px" }}>
          <Typography
            variant="overline"
            sx={{
              color: "#C28B13",
              fontWeight: 300,
              width: "100%",
            }}
          >
            # sobre o Ribas
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: "400px",
              color: "#050A30",
              marginTop: "20px",
              textAlign: "start",
              fontWeight: 900,
            }}
          >
            Desde 2009 atuando no mercado imobiliário, especilizado na area de
            vendas, gestão de equipes e treinamentos
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              maxWidth: "400px",
              color: "#050A30",
              marginTop: "20px",
              textAlign: "start",
              fontWeight: 300,
            }}
          >
            Atualmente proprietário de imobiliária, comprometido com a entrega
            do serviço de qualidade e treinamento dos profissionais, mas antes,
            Diretor Comercial de uma das maiores imobiliárias de Porto Alegre,
            Gerenciando mais de 6 Equipes e 100 corretores Autônomos durante 6
            anos
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          {aboutData.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "15px",
                  alignItems: "center",
                  paddingLeft: downMd ? "0" : "100px",
                  gap: 1,
                }}
              >
                <ArrowRightAltIcon sx={{ color: "#C28B13" }} />
                <Typography
                  variant="subtitle2"
                  sx={{
                    display: "flex",
                    maxWidth: "400px",
                    color: "#050A30",
                    textAlign: "start",
                    fontWeight: 600,
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
