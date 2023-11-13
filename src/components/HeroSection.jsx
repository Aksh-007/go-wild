import { useMediaQuery, useTheme, Box } from "@mui/material";
import HeroDesktop from "./body/HeroDesktop.jsx";
import HeroMobile from "./body/HeroMobile.jsx";
import Card from "./Card.jsx";
const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <Box sx={{ bgcolor: "#31E3AE" }}>
        <Box>{isMobile ? <HeroMobile /> : <HeroDesktop />}</Box>
      </Box>

      {/* Card Container */}
      <Box>
        {isMobile ? (
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              scrollbarWidth: "thin",
              gap: "30px",
              padding: "50px 20px",
              width: "100%",
              WebkitOverflowScrolling: "touch",
              overflowScrolling: "touch",
              minHeight: "80vh",
            }}
          >
            <Card
              visitorNumber={250}
              Location={"Leh Ladakh"}
              image={
                "https://media.istockphoto.com/id/996096346/photo/people-crossing-frozen-zanskar-river-chadar-trek.jpg?s=612x612&w=0&k=20&c=6rbego7a1ujqqWsUq1LxR2F8omc4O9St7rsmShsyPlI="
              }
              Rating={4.1}
              trekName={"Chadar Trek"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto voluptate veniam earum! Esse veritatis id officiis vel, quibusdam animi."
              }
            />

            <Card
              visitorNumber={350}
              Location={"Meghalaya"}
              image={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Living_root_bridges%2C_Nongriat_village%2C_Meghalaya2.jpg/250px-Living_root_bridges%2C_Nongriat_village%2C_Meghalaya2.jpg"
              }
              Rating={4.4}
              trekName={" Living Roots Bridges of Meghalaya"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto voluptate veniam earum! Esse veritatis id officiis vel, quibusdam animi."
              }
            />

            <Card
              visitorNumber={250}
              Location={"Rajasthan"}
              image={"https://www.tourmyindia.com/images/jaisalmer-fort-1.jpg"}
              Rating={4.1}
              trekName={"Jaisalmer Fort"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto voluptate veniam earum! Esse veritatis id officiis vel, quibusdam animi."
              }
            />
            <Card
              visitorNumber={250}
              Location={"Uttarakhand"}
              image={
                "https://upload.wikimedia.org/wikipedia/commons/2/28/Valley-of-flowers-in-Uttarakhand.jpg"
              }
              Rating={4.1}
              trekName={"Valley of flower"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto voluptate veniam earum! Esse veritatis id officiis vel, quibusdam animi."
              }
            />
            <Card
              visitorNumber={250}
              Location={"Goa"}
              image={
                "https://www.holidify.com/images/cmsuploads/compressed/800px-Cabo_da_Rama_View_From_The_Cliff_1_20200808121614.jpg"
              }
              Rating={4.1}
              trekName={"Cabo De Rama Beach"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto voluptate veniam earum! Esse veritatis id officiis vel, quibusdam animi."
              }
            />
            <Card
              visitorNumber={250}
              Location={"Uttarakhand"}
              image={
                "https://images.unsplash.com/photo-1585986217770-f25e4fd55ed9?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2VkYXJrYW50aGF8ZW58MHx8MHx8fDA%3D"
              }
              Rating={4.1}
              trekName={"Kedarkantha"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto voluptate veniam earum! Esse veritatis id officiis vel, quibusdam animi."
              }
            />
          </Box>
        ) : (
          <Box
            sx={{
              padding: "40px 50px",
              display: "flex",
              flexWrap: "wrap",
              gap: "50px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              visitorNumber={250}
              Location={"Leh Ladakh"}
              image={
                "https://media.istockphoto.com/id/996096346/photo/people-crossing-frozen-zanskar-river-chadar-trek.jpg?s=612x612&w=0&k=20&c=6rbego7a1ujqqWsUq1LxR2F8omc4O9St7rsmShsyPlI="
              }
              Rating={4.1}
              trekName={"Chadar Trek"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto voluptate veniam earum! Esse veritatis id officiis vel, quibusdam animi."
              }
            />

            <Card
              visitorNumber={350}
              Location={"Meghalaya"}
              image={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Living_root_bridges%2C_Nongriat_village%2C_Meghalaya2.jpg/250px-Living_root_bridges%2C_Nongriat_village%2C_Meghalaya2.jpg"
              }
              Rating={4.4}
              trekName={" Living Roots Bridges of Meghalaya"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto voluptate veniam earum! Esse veritatis id officiis vel, quibusdam animi."
              }
            />

            <Card
              visitorNumber={250}
              Location={"Rajasthan"}
              image={"https://www.tourmyindia.com/images/jaisalmer-fort-1.jpg"}
              Rating={4.1}
              trekName={"Jaisalmer Fort"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto voluptate veniam earum! Esse veritatis id officiis vel, quibusdam animi."
              }
            />
            <Card
              visitorNumber={250}
              Location={"Uttarakhand"}
              image={
                "https://upload.wikimedia.org/wikipedia/commons/2/28/Valley-of-flowers-in-Uttarakhand.jpg"
              }
              Rating={4.1}
              trekName={"Valley of flower"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto voluptate veniam earum! Esse veritatis id officiis vel, quibusdam animi."
              }
            />
            <Card
              visitorNumber={250}
              Location={"Goa"}
              image={
                "https://www.holidify.com/images/cmsuploads/compressed/800px-Cabo_da_Rama_View_From_The_Cliff_1_20200808121614.jpg"
              }
              Rating={4.1}
              trekName={"Cabo De Rama Beach"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto voluptate veniam earum! Esse veritatis id officiis vel, quibusdam animi."
              }
            />
            <Card
              visitorNumber={250}
              Location={"Uttarakhand"}
              image={
                "https://images.unsplash.com/photo-1585986217770-f25e4fd55ed9?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2VkYXJrYW50aGF8ZW58MHx8MHx8fDA%3D"
              }
              Rating={4.1}
              trekName={"Kedarkantha"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto voluptate veniam earum! Esse veritatis id officiis vel, quibusdam animi."
              }
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default HeroSection;
