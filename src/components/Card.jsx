import { Box, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
const Card = () => {
  return (
    <Box
      sx={{
        width: "420px",
        // width: "350px",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.10)",
        padding: "20px",
        height: "calc(100% - 30px)",
      }}
    >
      {/* Image box */}
      <Box>
        <img
          src="https://media.istockphoto.com/id/996096346/photo/people-crossing-frozen-zanskar-river-chadar-trek.jpg?s=612x612&w=0&k=20&c=6rbego7a1ujqqWsUq1LxR2F8omc4O9St7rsmShsyPlI="
          alt="image"
          style={{
            borderRadius: "10px",
            height: "230px",
            width: "100%",
            zIndex: "0",
          }}
        />
      </Box>
      {/* second Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "10px",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
        }}
      >
        {/* visitor and rating box */}
        <Box
          sx={{
            padding: "20px",
            borderRadius: "10px",
            width: "90%",
            height: "53px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            justifyContent: "space-between",
            boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.20)",
            position: "relative",
            bottom: "30px",
            zIndex: "10",
            bgcolor: "#fff",
          }}
        >
          {/* Visitor icon and count */}
          {/* Icon */}
          <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
            >
              <path
                d="M6.12508 8.16667C6.93269 8.16667 7.72216 7.92719 8.39366 7.4785C9.06516 7.02982 9.58853 6.39209 9.89759 5.64596C10.2066 4.89983 10.2875 4.07881 10.13 3.28672C9.9724 2.49463 9.5835 1.76705 9.01244 1.19598C8.44137 0.624918 7.71379 0.236018 6.9217 0.078462C6.12961 -0.0790944 5.30859 0.00176925 4.56246 0.310827C3.81633 0.619885 3.1786 1.14326 2.72991 1.81476C2.28123 2.48626 2.04175 3.27573 2.04175 4.08334C2.04283 5.16597 2.47338 6.20396 3.23892 6.9695C4.00446 7.73503 5.04245 8.16559 6.12508 8.16667ZM6.12508 1.36111C6.66349 1.36111 7.1898 1.52077 7.63747 1.81989C8.08513 2.11901 8.43405 2.54417 8.64009 3.04159C8.84613 3.53901 8.90004 4.08636 8.795 4.61442C8.68996 5.14247 8.43069 5.62753 8.04998 6.00824C7.66927 6.38895 7.18422 6.64821 6.65616 6.75325C6.1281 6.85829 5.58075 6.80438 5.08333 6.59834C4.58591 6.3923 4.16076 6.04339 3.86164 5.59572C3.56252 5.14805 3.40286 4.62174 3.40286 4.08334C3.40286 3.36136 3.68966 2.66895 4.20018 2.15843C4.7107 1.64792 5.4031 1.36111 6.12508 1.36111Z"
                fill="#06C8F7"
              />
              <path
                d="M6.125 8.52783C4.5011 8.52963 2.94423 9.17552 1.79596 10.3238C0.64769 11.4721 0.00180133 13.0289 0 14.6528C0 14.8333 0.0717012 15.0064 0.19933 15.1341C0.326959 15.2617 0.500061 15.3334 0.680556 15.3334C0.86105 15.3334 1.03415 15.2617 1.16178 15.1341C1.28941 15.0064 1.36111 14.8333 1.36111 14.6528C1.36111 13.3894 1.86302 12.1777 2.75642 11.2843C3.64982 10.3909 4.86154 9.88894 6.125 9.88894C7.38846 9.88894 8.60018 10.3909 9.49358 11.2843C10.387 12.1777 10.8889 13.3894 10.8889 14.6528C10.8889 14.8333 10.9606 15.0064 11.0882 15.1341C11.2158 15.2617 11.389 15.3334 11.5694 15.3334C11.7499 15.3334 11.923 15.2617 12.0507 15.1341C12.1783 15.0064 12.25 14.8333 12.25 14.6528C12.2482 13.0289 11.6023 11.4721 10.454 10.3238C9.30577 9.17552 7.7489 8.52963 6.125 8.52783Z"
                fill="#06C8F7"
              />
            </svg>
            {/* Visitor Count */}
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography>235</Typography>
              <Typography>visitors</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: "5px" }}>
            <StarRateIcon sx={{ color: "#FCC534" }} />
            <Typography>4.4</Typography>
          </Box>
        </Box>

        {/* Trek Name and location */}
        <Box
          sx={{
            width: "100%",
            padding: "10px",
            position: "relative",
            bottom: "30px",
          }}
        >
          <Typography
            sx={{ color: "#262626", fontSize: "1rem", fontWeight: 600 }}
          >
            Chadar Trek
          </Typography>
          {/* loaction box */}
          <Box sx={{ paddingTop: "8px" }}>
            {/* Location icon */}
            <Box sx={{ display: "flex", gap: "8px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="25"
                viewBox="0 0 21 25"
                fill="none"
              >
                <path
                  d="M10.3333 0.75C7.79262 0.753009 5.3568 1.76364 3.56022 3.56022C1.76355 5.35689 0.752907 7.79286 0.75 10.3337C0.750103 11.5134 1.22461 12.8727 2.02629 14.3066C2.82195 15.7298 3.90314 17.1618 5.03128 18.4704C7.28534 21.085 9.66575 23.1372 10.1502 23.5485C10.1505 23.5488 10.1509 23.5491 10.1512 23.5494L10.3333 23.7033L10.5155 23.5494C10.5159 23.549 10.5163 23.5487 10.5167 23.5483C10.5167 23.5483 10.5167 23.5483 10.5167 23.5483C11.0017 23.1365 13.3817 21.0847 15.6354 18.4704C16.7636 17.1618 17.8447 15.7298 18.6404 14.3066C19.442 12.8729 19.9165 11.5137 19.9167 10.3342L10.3333 0.75ZM10.3333 0.75C12.8741 0.753009 15.3099 1.76364 17.1065 3.56022C18.9032 5.35698 19.9139 7.79311 19.9167 10.3341L10.3333 0.75ZM10.3333 16.25H10.3342C11.9026 16.2481 13.4062 15.6243 14.5153 14.5153C15.6243 13.4062 16.2481 11.9026 16.25 10.3342V10.3333C16.25 9.16314 15.903 8.01921 15.2529 7.04622C14.6027 6.07323 13.6787 5.31487 12.5976 4.86705C11.5164 4.41923 10.3268 4.30206 9.17906 4.53036C8.03134 4.75866 6.97709 5.32216 6.14962 6.14962C5.32216 6.97709 4.75866 8.03134 4.53036 9.17906C4.30206 10.3268 4.41923 11.5164 4.86705 12.5976C5.31487 13.6787 6.07323 14.6027 7.04622 15.2529C8.01921 15.903 9.16314 16.25 10.3333 16.25Z"
                  stroke="#A9A9A9"
                  strokeWidth="1.5"
                />
              </svg>
              <Typography
                sx={{ color: "#A9A9A9", fontSize: "1rem", fontWeight: 400 }}
              >
                Leh Ladakh
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* line */}
        <hr
          style={{
            width: "100%",
            position: "relative",
            bottom: "30px",
            color: "#9B9B9B",
            height: "1px",
          }}
        />

        {/*About trek and explore part  */}
        <Box
          sx={{
            padding: "15px 0px",
            position: "relative",
            bottom: "30px",
            display: "flex",
            gap: "10px",
            width: "100%",
            // border: "2px solid black",
          }}
        >
          {/* Sport Activity  */}
          <Box
            sx={{
              display: "flex",
              width: "70%",
              flexWrap: "wrap",
              gap: "5px",
              //   border: "2px solid black",
            }}
          >
            <Box
              sx={{
                borderRadius: "5px",
                height: "30px",
                bgcolor: "#A7DBF5",
                color: "#000",
                fontWeight: 500,
                display: "flex",
                gap: "5px",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <Typography>Sunrise</Typography>
              <Box
                sx={{
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  bgcolor: "#E5E5E5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ transform: "rotate(45deg)" }}>+</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                borderRadius: "5px",
                height: "30px",
                bgcolor: "#A7DBF5",
                fontSize: "0.8rem",
                color: "#000",
                fontWeight: 500,
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Typography>Water Sport</Typography>
              <Box
                sx={{
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  bgcolor: "#E5E5E5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ transform: "rotate(45deg)" }}>+</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                borderRadius: "5px",
                height: "30px",
                bgcolor: "#A7DBF5",
                fontSize: "0.8rem",
                color: "#000",
                fontWeight: 500,
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Typography>Sunset</Typography>
              <Box
                sx={{
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  bgcolor: "#E5E5E5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ transform: "rotate(45deg)" }}>+</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                borderRadius: "5px",
                height: "30px",
                bgcolor: "#A7DBF5",
                fontSize: "0.8rem",
                color: "#000",
                fontWeight: 500,
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Typography>Swimming </Typography>
              <Box
                sx={{
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  bgcolor: "#E5E5E5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ transform: "rotate(45deg)" }}>+</Typography>
              </Box>
            </Box>
          </Box>
          {/* Explore button box */}
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              alignItems: "end",
              width: "30%",
            }}
          >
            <Typography
              sx={{ fontSize: "1rem", fontWeight: 600, color: "#000" }}
            >
              Explore
            </Typography>
            <Box sx={{ marginBottom: "5px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill="none"
              >
                <path
                  d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.2929L18.3431 0.928934C17.9526 0.538409 17.3195 0.538409 16.9289 0.928934C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM-8.74228e-08 9L24 9L24 7L8.74228e-08 7L-8.74228e-08 9Z"
                  fill="#06C8F7"
                />
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
