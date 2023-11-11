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
        <Container sx={{ padding: "40px 50px" }}>
          <Card />
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
