import { useMediaQuery, useTheme, Box } from "@mui/material";
import HeroDesktop from "./body/HeroDesktop.jsx";
import HeroMobile from "./body/HeroMobile.jsx";
const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ bgcolor: "#31E3AE" }}>
      <Box>{isMobile ? <HeroMobile /> : <HeroDesktop />}</Box>
    </Box>
  );
};

export default HeroSection;
