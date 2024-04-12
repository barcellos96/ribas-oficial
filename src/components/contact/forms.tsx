import { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import axios from "axios"; // Importar o Axios

interface FormData {
  name: string;
  email_reply: string;
  subject: string;
  content: string;
}

const ContactPage = () => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email_reply: "",
    subject: "",
    content: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios
        .post("https://api.fkar.com.br/send-ribas", formData)
        .then((res) => {
          console.log("res: ", res);
        }); // Enviar os dados usando o Axios

      setSnackbarOpen(true);
      setFormData({
        name: "",
        email_reply: "",
        subject: "",
        content: "",
      });

      return response;
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: 5,
        paddingBottom: 10,
        width: "100%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: downSm ? "90vw" : "100vw",
            maxWidth: "650px",
            marginBottom: downSm ? 10 : 0,
          }}
        >
          <Typography
            variant="overline"
            sx={{
              display: "flex",
              color: "#C28B13",
              fontWeight: 300,
              paddingBottom: 2,
            }}
          >
            # ENTRE EM CONTATO
          </Typography>
          <TextField
            name="name"
            label="Nome"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            sx={{ marginBottom: 2, width: "100%" }}
          />
          <TextField
            name="email_reply"
            type="email"
            label="E-mail"
            variant="outlined"
            value={formData.email_reply}
            onChange={handleChange}
            sx={{ marginBottom: 2, width: "100%" }}
          />
          <TextField
            name="subject"
            label="Assunto"
            variant="outlined"
            value={formData.subject}
            onChange={handleChange}
            sx={{ marginBottom: 2, width: "100%" }}
          />
          <TextField
            name="content"
            label="Mensagem"
            variant="outlined"
            multiline
            rows={4}
            value={formData.content}
            onChange={handleChange}
            sx={{ marginBottom: 2, width: "100%" }}
          />
          <Button variant="contained" type="submit" size="large">
            Enviar
          </Button>
        </Box>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Formulário enviado com sucesso!"
      />
    </Box>
  );
};

export default ContactPage;
