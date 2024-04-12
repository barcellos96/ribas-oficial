import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logoRibasWhite from "../../assets/logoRibasWhite.png";

interface HeaderSecondProps {
  pageTitle: string;
}

const HeaderSecond: React.FC<HeaderSecondProps> = ({
  pageTitle,
}: HeaderSecondProps) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerItemClick = (route: string) => {
    navigate(route);
    setDrawerOpen(false); // Fecha o Drawer ao clicar em um item
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Definindo um array com os títulos e rotas dos botões do Drawer
  const menuItems = [
    { label: "Treinamentos & Palestras", route: "/treinamentos-e-palestras" },
    { label: "Contato", route: "/contato" },
    { label: "Conteúdo", route: "/conteudo" },
    { label: "Home", route: "/" },
  ];

  // Filtrando os itens do menu para remover aquele cujo o rótulo é igual ao pageTitle
  const filteredMenuItems = menuItems.filter(
    (item) => item.label.toUpperCase() !== pageTitle.toUpperCase()
  );

  return (
    <AppBar
      position="static"
      sx={{
        background: "#050A30",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logoRibasWhite}
              alt="logo-ribas"
              style={{ width: "100px", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
            {pageTitle}
          </Box>
        </Typography>
        {isSmallScreen ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          filteredMenuItems.map((item, index) => (
            <Button
              key={index}
              color="inherit"
              onClick={() => handleDrawerItemClick(item.route)}
              sx={{
                "&:hover": {
                  color: "#C28B13",
                },
                "&:hover::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: "-2px", // Ajuste este valor conforme necessário para definir a distância entre o texto e a linha de sublinhado
                  width: "100%",
                  borderBottom: "1px solid #C28B13",
                },
              }}
            >
              {item.label}
            </Button>
          ))
        )}
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List
          sx={{
            width: 150,
            padding: 2,
            height: "100%",
            background: "#050A30",
            color: "#FFFFFF",
          }}
        >
          {filteredMenuItems.map((item, index) => (
            <ListItemButton
              key={index}
              onClick={() => handleDrawerItemClick(item.route)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default HeaderSecond;
