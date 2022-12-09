import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { FaUserCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdDirectionsBike, MdPedalBike } from "react-icons/md";

const ResponsiveAppBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SmartCity
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton
                onClick={() => navigate("/profile")}
                sx={{
                  p: 0,
                  gap: ".5rem",
                  fontFamily: "monospace",
                  fontSize: "21px",
                  fontWeight: 100,
                  marginRight: "1rem",
                  color: "white",
                }}
                id={"icon0"}
              >
                <FaUserCheck /> Perfil
              </IconButton>
            </Tooltip>
            <Tooltip>
              <IconButton
                onClick={() => navigate("/bicicletas")}
                sx={{
                  p: 0,
                  gap: ".5rem",
                  fontFamily: "monospace",
                  fontSize: "21px",
                  fontWeight: 100,
                  marginRight: "1rem",
                  color: "white",
                }}
                id={"icon1"}
              >
                <MdPedalBike /> Bicicletas
              </IconButton>
            </Tooltip>
            <Tooltip>
              <IconButton
                onClick={() => navigate("/home")}
                sx={{
                  p: 0,
                  gap: ".5rem",
                  fontFamily: "monospace",
                  fontSize: "21px",
                  fontWeight: 100,
                  marginRight: "1rem",
                  color: "white",
                }}
                id={"icon2"}
              >
                <MdDirectionsBike /> Aluguel de Bicicletas
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
