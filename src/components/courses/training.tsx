import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

const TrainingPage = () => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingY: 4,
        flexDirection: "column",
      }}
    >
      {/* Informações sobre as palestras */}
      {!downMd && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            position: "absolute",
            width: 350,
            top: 210,
            right: 60,
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#C28B13",
            }}
          >
            # Palestras
          </Typography>
          <Button
            variant="text"
            sx={{ fontSize: 12, textAlign: "start" }}
            onClick={() => {
              const element = document.getElementById("palestra-vendas");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            corretor ponta a ponta
          </Button>
          <Button
            variant="text"
            sx={{ fontSize: 12, textAlign: "start" }}
            onClick={() => {
              const element = document.getElementById("palestra-gestao");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Inteligência Emocional e Resiliência para o Mercado Imobiliário.
          </Button>
          <Button
            variant="text"
            sx={{ fontSize: 12, textAlign: "start" }}
            onClick={() => {
              const element = document.getElementById("palestra-gestao");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            O Poder das Metas Pessoais{" "}
          </Button>
          <Button
            variant="text"
            sx={{ fontSize: 12, textAlign: "start" }}
            onClick={() => {
              const element = document.getElementById("palestra-gestao");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Produtividade e Alta Performance
          </Button>
          <Button
            variant="text"
            sx={{ fontSize: 12, textAlign: "start" }}
            onClick={() => {
              const element = document.getElementById("palestra-gestao");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Atender ou Entender?
          </Button>
          <Typography
            variant="overline"
            sx={{
              marginTop: 3,
              color: "#C28B13",
            }}
          >
            # Treinamentos
          </Typography>

          <Button
            variant="text"
            sx={{ fontSize: 12, textAlign: "start" }}
            onClick={() => {
              const element = document.getElementById("palestra-gestao");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Lead e Agora?
          </Button>
          <Button
            variant="text"
            sx={{ fontSize: 12, textAlign: "start" }}
            onClick={() => {
              const element = document.getElementById("palestra-gestao");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Como montar uma carteira de imóveis Campeã.
          </Button>
          <Button
            variant="text"
            sx={{ fontSize: 12, textAlign: "start" }}
            onClick={() => {
              const element = document.getElementById("palestra-gestao");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Transformando visitas em fechamentos.
          </Button>
        </Box>
      )}
      {/* Palestra sobre Vendas */}
      <Box
        id="palestra-vendas"
        sx={{
          marginBottom: 4,
          marginTop: 2,
          marginLeft: downMd ? 0 : -40,
          width: { xs: "83%", md: "45%" },
        }}
      >
        <Typography
          variant="overline"
          fontSize={14}
          sx={{
            color: "#C28B13",
          }}
        >
          # Treinamentos e Palestras:
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ marginTop: 3, fontWeight: 750 }}
        >
          Programa Corretor de Ponta à Ponta
        </Typography>
        <Typography variant="overline" paragraph>
          Treinamento completo para sua equipe de corretores de imóveis. As
          etapas essenciais para um corretor atingir os resultados de alta
          performance.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            10 horas de treinamento
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Imersão de 1 ou 2 dias.
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Na imobiliária ou em local a combinar.
          </Typography>
        </Box>

        <Typography
          variant="h5"
          sx={{
            marginTop: 3,
            marginBottom: 2,
            color: "#C28B13",
          }}
        >
          O que esperar desse treinamento?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Corretores mais produtivos
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Aumento na carteira de Agenciamentos
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Melhoria na gestão de clientes
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Acompanhamento da Jornada de Compra
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Maior engajamento dos corretores
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Equipe mais motivada
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Aumento nos resultados de venda
          </Typography>
        </Box>

        <Typography
          variant="overline"
          paragraph
          sx={{
            marginTop: 3,
          }}
        >
          Visão e postura comercial na prática, Planejamento de vendas, Geração
          de novos negócios.
        </Typography>
        <Button
          variant="contained"
          href="/contato"
          sx={{
            background: "#C28B13",
          }}
        >
          Solicitar orçamento gratuito
        </Button>
      </Box>
      {/* Palestra sobre Gestão de Negócios */}
      <Box
        id="palestra-gestao"
        sx={{
          padding: 4,
          marginBottom: 4,
          marginRight: downMd ? 0 : -50,
          width: { xs: "83%", md: "45%" },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ marginTop: 3, fontWeight: 750 }}
        >
          Programa Corretor de Ponta à Ponta
        </Typography>
        <Typography variant="overline" paragraph>
          Treinamento completo para sua equipe de corretores de imóveis. As
          etapas essenciais para um corretor atingir os resultados de alta
          performance.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            10 horas de treinamento
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Imersão de 1 ou 2 dias.
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Na imobiliária ou em local a combinar.
          </Typography>
        </Box>

        <Typography
          variant="h5"
          sx={{
            marginTop: 3,
            marginBottom: 2,
            color: "#C28B13",
          }}
        >
          O que esperar desse treinamento?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Corretores mais produtivos
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Aumento na carteira de Agenciamentos
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Melhoria na gestão de clientes
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Acompanhamento da Jornada de Compra
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Maior engajamento dos corretores
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Equipe mais motivada
          </Typography>
          <Typography
            variant="overline"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckCircleOutline
              sx={{ fontSize: 16, marginRight: 1, color: "#C28B13" }}
            />{" "}
            Aumento nos resultados de venda
          </Typography>
        </Box>

        <Typography
          variant="overline"
          paragraph
          sx={{
            marginTop: 3,
          }}
        >
          Visão e postura comercial na prática, Planejamento de vendas, Geração
          de novos negócios.
        </Typography>
        <Button
          variant="contained"
          href="/contato"
          sx={{
            background: "#C28B13",
          }}
        >
          Solicitar orçamento gratuito
        </Button>
      </Box>
    </Box>
  );
};

export default TrainingPage;
