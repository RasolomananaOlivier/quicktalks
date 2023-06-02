import { Container, styled } from "@mui/material";
import { Link as L } from "react-router-dom";

const Nav = styled("nav")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
}));

const Link = styled(L)(({ theme }) => ({
  color: theme.palette.grey[700],
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.2rem",
}));

const LandingPage = () => {
  return (
    <Container>
      <Nav>
        <div>
          <img src="/Logo.svg" draggable="false" />
        </div>
        <Link to="/about">About</Link>
      </Nav>
    </Container>
  );
};

export default LandingPage;
