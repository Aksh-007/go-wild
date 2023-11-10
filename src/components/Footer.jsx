import { Box, Container, Typography } from "@mui/material";
import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#253D65",
        // height: "40vh",
        color: "#DEDEDE",
      }}
    >
      <Container sx={{ padding: "30px 50px" }}>
        {/* Main Box */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: "5px",
          }}
        >
          {/* left side footer */}
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "33%",
              },
            }}
          >
            <Box>
              <img src={Logo} alt="logo" style={{ width: "80px" }} />
            </Box>
            <Typography sx={{ fontSize: "1rem", padding: "20px 0px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been. Lorem Ipsum is simply{" "}
            </Typography>
          </Box>

          {/* Middle Footer Links */}
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "33%",
              },
              border: "2px solid black",
            }}
          ></Box>

          {/* RIght side footer Subscribe */}
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "33%",
                border: "2px solid black",
              },
            }}
          ></Box>
        </Box>
        <hr />
        {/* Bottom Footer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: "space-between",
            padding: "10px 0px",
          }}
        >
          {/* Left Side Copyright */}
          <Box>Copyrights@2023. All rights reserved</Box>

          {/* Right Side footer */}
          <Box
            sx={{
              marginTop: {
                xs: "10px",
              },
            }}
          >
            <Typography>Terms of Servces | Privacy Policy</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
