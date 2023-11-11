import { useMediaQuery, useTheme, Box, Container } from "@mui/material";
import HeroDesktop from "./body/HeroDesktop.jsx";
import HeroMobile from "./body/HeroMobile.jsx";
import Card from "./Card.jsx";
const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box sx={{ bgcolor: "#31E3AE" }}>
        <Box>{isMobile ? <HeroMobile /> : <HeroDesktop />}</Box>
      </Box>

      {/* Card Container */}
      <Box>
        {isMobile ? (
          <Container
            sx={{
              display: "flex",
              overflowX: "auto",
              "-ms-overflow-style": "scrollbar", // For Microsoft Edge
              scrollbarWidth: "thin", // For Firefox
              gap: "50px",
              padding: "50px 0px",
            }}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Container>
        ) : (
          <Container
            sx={{
              padding: "40px 50px",
              display: "flex",
              flexWrap: "wrap",
              gap: "50px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Container>
        )}
      </Box>
    </>
  );
};

export default HeroSection;
