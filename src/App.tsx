import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import googleIcon from './assets/google-icon.png';
import facebookIcon from "./assets/facebook-icon.png";
import twitterIcon from "./assets/twitter-icon.png";
import instagramIcon from "./assets/instagram-icon.png";
import microsoftIcon from "./assets/microsoft-icon.png";

const defaultTheme = createTheme();

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return ( 
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={7}
          md={5}
          lg={4}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 4,
              mx: 13,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src=""
              alt="LOGO"
              sx={{
                width: 80,
                height: 80,
                mt: 0,
                mb: 4,
                bgcolor: "#D9D9D9",
                color: "black",
                fontFamily: "Sora",
              }}
            >
              LOGO
            </Avatar>
            <Typography 
            variant="h5" fontWeight="bold">
              Entrar
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Celular, E-mail ou Usuário"
                label="Nome Completo"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  mt: 0,
                  mb: 1,
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                placeholder="Por favor digite sua senha."
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  mt: 1,
                  mb: 2,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  height: 40,
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#3B579D",
                    "&:hover": {
                      backgroundColor: "#3B579D",
                      border: "1px solid black",
                    },
                    flexGrow: 1,
                    backgroundImage: `url(${googleIcon})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#ffffff",
                      border: "1px solid black",
                    },
                    flexGrow: 1,
                    backgroundImage: `url(${facebookIcon})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#ffffff",
                      border: "1px solid black",
                    },
                    flexGrow: 1,
                    backgroundImage: `url(${twitterIcon})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#ffffff",
                      border: "1px solid black",
                    },
                    flexGrow: 1,
                    backgroundImage: `url(${instagramIcon})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    "&:hover": {
                      backgroundColor: "black",
                      border: "1px solid #ffffff",
                    },
                    flexGrow: 1,
                    backgroundImage: `url(${microsoftIcon})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </Box>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Lembrar minha senha."
              />
              <br />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "150px",
                  mb: 4,
                }}
              >
                <Button
                  variant="outlined"
                  disabled={true}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                    border: "4px solid black",
                    color: "black",
                    backgroundColor: "transparent",
                    "&:hover": {
                      border: "4px solid black",
                    },
                    "&.Mui-disabled": {
                      border: "4px solid #D9D9D9",
                      color: "#D9D9D9",
                    },
                    padding: "8px 10px",
                    minWidth: "auto",
                    mb: 0,
                  }}
                >
                  <ArrowForwardIcon sx={{ fontSize: 40 }} />
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Link href="#" variant="body2">
                  Esqueceu a senha ?
                </Link>
                <Link href="#" variant="body2">
                  Não possui conta? Criar conta.
                </Link>
                <Link href="#" variant="body2">
                  Não conseguiu entrar ? Contate o suporte.
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={5}
          md={7}
          lg={8}
          sx={{
            backgroundColor: "#1A1A1A",
            backgroundImage: 'url("")', // Adicione a URL da imagem
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography
            variant="h4"
            color="white"
            fontWeight="bold"
            sx={{
              display: { xs: "none", sm: "block" },
              fontFamily: "Sora",
            }}
          >
            IMAGEM
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
