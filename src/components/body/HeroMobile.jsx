import { Box, Container, Typography, Button } from "@mui/material";
import rightImage from "../../assets/right-image.png";
const HeroMobile = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#31E3AE",
        minHeight: "78vh",
        backgroundImage: "../../assets/right-image.png",
      }}
    >
      <Container
        sx={{
          textAlign: "center",
          color: "#262626",
          padding: "30px 25px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            marginTop: "50px",
            fontSize: "2rem",
          }}
        >
          Welcome to GoWild!
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", marginTop: "20px" }}>
          Where adventure knows no bounds. With us, you&apos;ll embark on
          journeys of discovery, where the unexplored becomes your playground.
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", marginTop: "20px" }}>
          Dive into the beauty of untouched landscapes, wander through hidden
          trails, and unlock the secrets of the world&apos;s most extraordinary
          destinations.
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", marginTop: "20px" }}>
          Unleash your inner explorer and redefine what&apos;s possible. Begin
          your odyssey today.
        </Typography>
        <Typography
          sx={{
            marginTop: "30px",
            fontSize: "1.7rem",
            fontWeight: "bold",
            color: "#253D65",
          }}
        >
          Discover, Explore, Go Wild!
        </Typography>
        <Button
          sx={{
            marginTop: "20px",
            bgcolor: "#ffffff",
            width: "155px",
            color: "#06C8F7",
            height: "05vh",
            "&:hover": {
              bgcolor: "#ffffff",
            },
            fontWeight: "700",
            borderRadius: "10px",
            boxShadow: "3px 3px 1px rgba(0, 0, 0, 0.1)",
          }}
        >
          Explore Now
        </Button>
        <Box sx={{}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="360"
            height="72"
            viewBox="0 0 360 72"
            fill="none"
          >
            <path
              d="M-427 62.5699C-439.25 76.3799 -444.11 96.8099 -437.96 114.21C-431.81 131.61 -414.23 144.74 -395.78 144.28C-353.87 143.23 -310.86 96.4299 -294.95 61.3899C-291.17 53.0799 -288.13 43.8499 -290.07 34.9299C-292.01 26.0099 -300.64 18.0199 -309.6 19.7899C-321.25 22.0999 -322.64 42.1599 -311.42 46.0599C-293.19 52.3899 -267.2 24.4699 -255.27 14.3299C-232.7 -4.86006 -204.78 -17.7001 -175.24 -20.9301C-143.16 -24.4401 -111.4 -14.0801 -81.1298 -4.89006C-46.8098 5.51994 -17.4898 27.5099 16.1702 39.5499C25.9702 43.0499 36.0602 45.6899 46.2002 48.0299C99.7702 60.4299 155.14 64.9699 210 61.4799C249.78 58.9499 274.42 40.6099 307.79 21.0299C340.84 1.62994 384.57 -5.97006 416.75 14.8299C437.45 28.2099 449.98 50.8999 460.75 73.0699"
              stroke="url(#paint0_linear_2_4348)"
              strokeWidth="0.75"
              strokeMiterlimit="10"
              strokeDasharray="5.49 5.49"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_4348"
                x1="279.127"
                y1="-154.021"
                x2="-273.839"
                y2="313.362"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0721" stopColor="#1C5FB5" />
                <stop offset="0.0863" stopColor="#1A5AAD" />
                <stop offset="0.1352" stopColor="#144D97" />
                <stop offset="0.1929" stopColor="#104387" />
                <stop offset="0.2643" stopColor="#0C3B7B" />
                <stop offset="0.3642" stopColor="#0B3774" />
                <stop offset="0.6398" stopColor="#0A3672" />
                <stop offset="0.7975" stopColor="#082865" />
                <stop offset="1" stopColor="#061B58" />
              </linearGradient>
            </defs>
          </svg>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroMobile;
