import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import LogoRibas from "../assets/logoRibasBlue.png";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ddd6d6",
        flexDirection: "column",
        paddingBottom: "20px",
      }}
    >
      <img
        src={LogoRibas}
        alt="Logo Ribas"
        width="165px"
        style={{ marginTop: "-20px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: downSm ? "column" : "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          marginTop: "-20px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
            color: "gray",
          }}
        >
          <EmailIcon
            sx={{ fontSize: "18px", paddingRight: "5px", color: "#2d2c2c" }}
          />
          contato@ribasoficial.com.br
        </Typography>
        <Box sx={{ display: "flex", flexDireciton: "row" }}>
          <a
            href="https://api.whatsapp.com/send?phone=5551991662343&text=Opa%20Ribas.%20Podemos%20conversar?"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                color: "gray",
                alignItems: "center",
                marginRight: "20px",
                fontStyle: "none",
                "&:hover": { color: "green" },
              }}
            >
              <WhatsAppIcon
                sx={{
                  fontSize: "18px",
                  paddingRight: "5px",
                  color: "#2d2c2c",
                  "&:hover": { color: "green" },
                }}
              />
              (51) 99166-2343
            </Typography>
          </a>

          <a
            href="https://www.instagram.com/ribas.ooficial/"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                color: "gray",
                alignItems: "center",
                marginRight: "20px",
                fontStyle: "none",
                "&:hover": { color: "blue" },
              }}
            >
              <InstagramIcon
                sx={{
                  fontSize: "18px",
                  paddingRight: "5px",
                  color: "#2d2c2c",
                  "&:hover": { color: "blue" },
                }}
              />
              @ribas.ooficial
            </Typography>
          </a>
        </Box>
      </Box>
      <Typography color="gray" marginTop="10px">
        Todos direitos reservados © Ribas Oficial 2024
      </Typography>
    </Box>
  );
};

export default Footer;
