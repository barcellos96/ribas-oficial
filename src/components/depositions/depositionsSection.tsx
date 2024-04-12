import { useRef } from "react";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DepositionCard from "./depositionCard";
import { depositions } from "./depositionsData";

const DepositionsSection = () => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300, // Adjust this value as needed
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300, // Adjust this value as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      mt={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        paddingLeft: downSm ? 2 : downMd ? 2 : 10,
        paddingRight: downSm ? 2 : downMd ? 2 : 14,
        marginBottom: 10,
      }}
    >
      <Typography
        variant="overline"
        sx={{
          color: "#C28B13",
          fontWeight: 300,
          paddingBottom: 2,
          paddingLeft: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        # DEPOIMENTOS
        <IconButton onClick={handleScrollLeft} sx={{ ml: 1 }}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton onClick={handleScrollRight}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Typography>

      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: downSm ? "auto" : "hidden",
          padding: "10px",
          maxWidth: "100%",
          position: "relative",
        }}
      >
        {depositions.map((depo, index) => (
          <DepositionCard
            key={index}
            id={depo.id}
            message={depo.message}
            author={depo.author}
            role={depo.role}
          />
        ))}
      </Box>
    </Box>
  );
};

export default DepositionsSection;
