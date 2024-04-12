import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

interface DepositionProps {
  id: number;
  message: string;
  author: string;
  role: string;
}

const DepositionCard = ({ id, message, author, role }: DepositionProps) => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const [showFullMessage, setShowFullMessage] = useState(false);

  const handleToggleMessage = () => {
    setShowFullMessage(!showFullMessage);
  };

  return (
    <Card sx={{ minWidth: downSm ? 260 : downMd ? 320 : 800, maxWidth: 400 }}>
      <CardContent>
        <>
          <Typography variant="body1" color="gray">
            {showFullMessage
              ? message
              : message.length > 380
              ? `${message.substring(0, 380)}`
              : message}
            {message.length > 380 && !showFullMessage && (
              <>
                <span>...</span>
                <Button
                  onClick={handleToggleMessage}
                  sx={{
                    fontSize: 12,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Ver mais
                </Button>
              </>
            )}
          </Typography>
          {showFullMessage && (
            <Button onClick={handleToggleMessage} sx={{ marginTop: 1 }}>
              Ver menos
            </Button>
          )}
        </>

        <Typography variant="subtitle2" color="#C28B13" marginTop={5}>
          {author} - {role}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DepositionCard;
