import { Box } from "@mui/material";
import ContactForms from "components/contact/forms";
import HeaderSecond from "components/headers/headerOtherPages";
import Footer from "components/footer";

const ContactPage = () => {
  return (
    <Box display="flex" minHeight="100vh" flexDirection="column">
      <Box flexGrow={1}>
        <HeaderSecond pageTitle="CONTATO" />
        <ContactForms />
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactPage;
