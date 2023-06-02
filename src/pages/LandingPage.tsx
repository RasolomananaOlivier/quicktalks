import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { Link as L } from "react-router-dom";
import { useMobileSize } from "../hooks/useMobileSize";

const Nav = styled("nav")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1),
}));

const Link = styled(L)(({ theme }) => ({
  color: theme.palette.grey[700],
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.2rem",
}));

const Main = styled("main")(({ theme }) => ({
  display: "flex",
  height: "100% !important",
}));

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMobileSize();
  return (
    <Box sx={{ height: "88vh" }}>
      <Container>
        <Nav>
          <div>
            <img src="/Logo.svg" draggable="false" />
          </div>
          <Link to="/about">About</Link>
        </Nav>
      </Container>

      <Main>
        <Grid container>
          <Grid item xs={12} md={5}>
            <Stack
              flex={1}
              pl={isMobile ? 0 : theme.spacing(14)}
              height="80%"
              spacing={3}
              sx={{
                textAlign: isMobile ? "center" : "left",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h1"
                fontWeight={700}
                fontSize={isMobile ? "3rem" : "5rem"}
              >
                QuickTalks
              </Typography>
              <Typography variant="subtitle1" color={theme.palette.grey[800]}>
                With QuickTalks, every conversation becomes a seamless and
                immersive experience, designed to keep you connected, informed,
                and engaged in real-time.
              </Typography>
              <div>
                <Button variant="contained">Try for free</Button>
              </div>
            </Stack>
          </Grid>
          <Grid item>
            {" "}
            <Box flex={1}>1</Box>
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
};

export default LandingPage;
