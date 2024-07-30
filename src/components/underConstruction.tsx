import { Box, Typography, CircularProgress } from "@mui/material";
import { Construction } from "@mui/icons-material";

const UnderConstructionPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f2f2f2",
      }}
    >
      <Construction sx={{ fontSize: 80, color: "#ff9800", marginTop: 10 }} />
      <Typography variant="h3" align="center" gutterBottom>
        Página em Manutenção
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Estamos trabalhando duro para trazer uma experiência melhor para você.
        Por favor, volte mais tarde!
      </Typography>
      <CircularProgress sx={{ marginTop: 4 }} />
    </Box>
  );
};

export default UnderConstructionPage;
