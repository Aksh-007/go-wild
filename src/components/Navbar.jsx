import { Typography, Box, Container } from "@mui/material";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "2px solid black",
        }}
      >
        {/* Logo  */}
        <Box>
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              style={{ height: "60px", padding: "2px" }}
            />
          </Link>
        </Box>

        {/* home and social media icon */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "40px",
            alignItems: "center",
          }}
        >
          <Link to="/">
            {" "}
            <Typography>Home</Typography>
          </Link>
          <Link>
            <Typography>Features</Typography>
          </Link>
          <Link>
            <Typography>About us</Typography>
          </Link>
          <Link to="/guideForm">
            <Typography>Become a Guide</Typography>
          </Link>
        </Box>
        {/* </Box> */}
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="198"
            height="39"
            viewBox="0 0 198 39"
            fill="none"
          >
            <g clipPath="url(#clip0_2_1075)">
              <path
                d="M38.0453 19.3076C38.0453 29.9739 29.5316 38.6151 19.0227 38.6151C8.5137 38.6151 0 29.9739 0 19.3076C0 8.64121 8.5137 0 19.0227 0C29.5316 0 38.0453 8.64121 38.0453 19.3076Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.4693 12.1416C22.1645 12.1141 22.8507 12.1324 23.5458 12.1324C23.6271 12.1324 23.7174 12.1324 23.8348 12.1324V8.47619C23.4646 8.43954 23.0764 8.38456 22.6882 8.36623C21.9749 8.33874 21.2707 8.30209 20.5575 8.31125C19.4741 8.33874 18.4448 8.60448 17.551 9.25509C16.5218 10.0065 15.9621 11.0603 15.7454 12.3066C15.6551 12.8197 15.637 13.3512 15.619 13.8735C15.6009 14.6891 15.619 15.5138 15.619 16.3293V16.6409H12.1702V20.7187H15.5919V30.9727H19.772V20.7462H23.1847C23.3563 19.39 23.5278 18.0429 23.7084 16.6501C23.4375 16.6501 23.1847 16.6501 22.9409 16.6501C21.9749 16.6501 19.7449 16.6501 19.7449 16.6501C19.7449 16.6501 19.754 14.6249 19.781 13.7544C19.8172 12.5448 20.5214 12.1783 21.4693 12.1416Z"
                fill="#06C8F7"
              />
              <path
                d="M91.1228 19.3076C91.1228 29.9739 82.6091 38.6151 72.1002 38.6151C61.5912 38.6151 53.0775 29.9739 53.0775 19.3076C53.0775 8.64121 61.5912 0 72.1002 0C82.6091 0 91.1228 8.64121 91.1228 19.3076Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M68.6333 25.0257C66.313 24.9432 64.8594 23.248 64.4712 21.8734C65.1212 22.0017 65.7532 21.9742 66.3852 21.8184C66.4033 21.8184 66.4213 21.8001 66.4484 21.7909C65.1935 21.4977 64.2184 20.8105 63.5413 19.7108C63.0899 18.9777 62.8822 18.1805 62.8822 17.3008C63.5142 17.6399 64.1642 17.8323 64.8684 17.8506C63.9205 17.1542 63.2885 16.2562 63.0267 15.0924C62.7648 13.9378 62.9364 12.8382 63.5052 11.8027C65.9248 14.6984 68.9944 16.2837 72.7321 16.5494C72.705 16.3661 72.6779 16.2104 72.6599 16.0546C72.5335 14.9824 72.7411 13.9928 73.3099 13.0856C74.0232 11.9493 75.0343 11.2529 76.3434 11.033C77.8512 10.7855 79.1603 11.2162 80.2617 12.2975C80.334 12.3708 80.3972 12.3892 80.4965 12.3708C81.4174 12.1692 82.2841 11.8302 83.0966 11.3537C83.1147 11.3445 83.1327 11.3354 83.1598 11.3262C83.1598 11.3262 83.1688 11.3262 83.1869 11.3262C82.8348 12.38 82.1848 13.1956 81.2729 13.8003C82.1396 13.7087 82.9702 13.4705 83.7647 13.1222C83.7737 13.1314 83.7737 13.1406 83.7828 13.1406C83.6112 13.3697 83.4487 13.5987 83.2682 13.8187C82.7897 14.4143 82.248 14.9366 81.6431 15.3856C81.5889 15.4223 81.5708 15.4589 81.5708 15.5323C81.5979 16.2104 81.5708 16.8793 81.4896 17.5482C81.318 18.9594 80.9298 20.3065 80.334 21.5894C79.72 22.9181 78.9255 24.1185 77.9144 25.1723C76.208 26.9592 74.1586 28.1138 71.7661 28.6453C70.9445 28.8285 70.1139 28.9202 69.2743 28.9477C66.6922 29.021 64.3087 28.3704 62.1148 26.9958C62.0877 26.9775 62.0606 26.9592 62.0065 26.9225C63.5684 27.0966 65.049 26.8859 66.4845 26.2994C67.2609 25.9695 67.9652 25.5572 68.6333 25.0257Z"
                fill="#06C8F7"
              />
              <path
                d="M143.758 19.3076C143.758 29.9739 135.244 38.6151 124.735 38.6151C114.226 38.6151 105.713 29.9739 105.713 19.3076C105.713 8.64121 114.226 0 124.735 0C135.244 0 143.758 8.64121 143.758 19.3076Z"
                fill="white"
              />
              <path
                d="M134.847 14.2493C134.711 12.9023 134.206 11.711 133.222 10.758C132.184 9.75001 130.92 9.31016 129.529 9.23685C127.164 9.10856 121.539 9.02609 119.562 9.34681C117.305 9.72252 115.824 11.0604 115.201 13.3146C114.723 15.0557 114.813 23.0738 115.093 24.7965C115.472 27.1516 116.844 28.6544 119.138 29.2592C120.727 29.6715 128.536 29.6257 130.297 29.3325C132.617 28.9476 134.107 27.5731 134.711 25.2455C135.172 23.4678 135.009 15.8621 134.847 14.2493ZM132.996 24.4758C132.725 26.2627 131.561 27.3715 129.791 27.5639C128.166 27.7472 120.907 27.848 119.399 27.4173C117.955 27.0049 117.133 26.0061 116.89 24.5308C116.664 23.1196 116.601 16.0912 116.89 14.2126C117.151 12.4441 118.325 11.3353 120.086 11.1337C121.873 10.9321 128.292 10.9046 130.008 11.1704C131.768 11.4453 132.852 12.6365 133.05 14.4326C133.213 16.1095 133.267 22.6706 132.996 24.4758ZM124.934 14.1027C122.081 14.1027 119.77 16.4485 119.761 19.3442C119.752 22.2399 122.072 24.5858 124.925 24.5949C127.778 24.6041 130.089 22.2491 130.098 19.3534C130.107 16.4577 127.787 14.1027 124.934 14.1027ZM124.898 22.7347C123.056 22.7164 121.566 21.1861 121.584 19.3167C121.602 17.4474 123.11 15.9354 124.952 15.9537C126.794 15.972 128.283 17.5024 128.265 19.3717C128.256 21.2502 126.748 22.7531 124.898 22.7347ZM131.515 13.9103C131.515 14.5884 130.974 15.1382 130.306 15.1382C129.638 15.1382 129.096 14.5884 129.096 13.9103C129.096 13.2322 129.638 12.6823 130.306 12.6823C130.974 12.6732 131.515 13.2322 131.515 13.9103Z"
                fill="#06C8F7"
              />
              <path
                d="M134.847 14.2493C134.711 12.9023 134.206 11.711 133.222 10.758C132.184 9.75001 130.92 9.31016 129.529 9.23685C127.164 9.10856 121.539 9.02609 119.562 9.34681C117.305 9.72252 115.824 11.0604 115.201 13.3146C114.723 15.0557 114.813 23.0738 115.093 24.7965C115.472 27.1516 116.844 28.6544 119.138 29.2592C120.727 29.6715 128.536 29.6257 130.297 29.3325C132.617 28.9476 134.107 27.5731 134.711 25.2455C135.172 23.4678 135.009 15.8621 134.847 14.2493ZM132.996 24.4758C132.725 26.2627 131.561 27.3715 129.791 27.5639C128.166 27.7472 120.907 27.848 119.399 27.4173C117.955 27.0049 117.133 26.0061 116.89 24.5308C116.664 23.1196 116.601 16.0912 116.89 14.2126C117.151 12.4441 118.325 11.3353 120.086 11.1337C121.873 10.9321 128.292 10.9046 130.008 11.1704C131.768 11.4453 132.852 12.6365 133.05 14.4326C133.213 16.1095 133.267 22.6706 132.996 24.4758ZM124.934 14.1027C122.081 14.1027 119.77 16.4485 119.761 19.3442C119.752 22.2399 122.072 24.5858 124.925 24.5949C127.778 24.6041 130.089 22.2491 130.098 19.3534C130.107 16.4577 127.787 14.1027 124.934 14.1027ZM124.898 22.7347C123.056 22.7164 121.566 21.1861 121.584 19.3167C121.602 17.4474 123.11 15.9354 124.952 15.9537C126.794 15.972 128.283 17.5024 128.265 19.3717C128.256 21.2502 126.748 22.7531 124.898 22.7347ZM131.515 13.9103C131.515 14.5884 130.974 15.1382 130.306 15.1382C129.638 15.1382 129.096 14.5884 129.096 13.9103C129.096 13.2322 129.638 12.6823 130.306 12.6823C130.974 12.6732 131.515 13.2322 131.515 13.9103Z"
                fill="#06C8F7"
              />
              <path
                d="M180.548 38.9312C191.019 38.0515 198.804 28.7235 197.937 18.0965C197.07 7.46943 187.88 -0.432312 177.41 0.447408C166.939 1.32713 159.154 10.6552 160.021 21.2822C160.888 31.9092 170.078 39.811 180.548 38.9312Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M168.938 29.9465C169.055 29.4883 169.155 29.0851 169.263 28.682C169.606 27.3991 169.967 26.1162 170.292 24.8333C170.337 24.6408 170.319 24.3843 170.229 24.2101C167.015 17.9973 170.328 10.4648 177.072 8.86123C183.194 7.40423 188.701 11.6011 189.712 17.2092C190.759 23.0647 186.985 28.6178 181.262 29.635C178.986 30.0382 176.811 29.6991 174.734 28.6728C174.553 28.5812 174.292 28.5537 174.093 28.5995C171.33 29.3051 169.489 29.8366 168.938 29.9465ZM171.366 27.509C172.405 27.2341 173.362 26.9867 174.319 26.721C174.59 26.6476 174.797 26.6843 175.032 26.8309C176.829 27.8847 178.761 28.2788 180.819 27.9397C185.559 27.17 188.809 22.6615 188.087 17.869C187.338 12.9023 182.742 9.56682 177.894 10.4648C172.026 11.5553 168.911 18.1989 171.827 23.4587C172.152 24.0452 172.242 24.5217 172.026 25.1448C171.755 25.8871 171.592 26.666 171.366 27.509Z"
                fill="#06C8F7"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M182.164 24.2559C180.124 24.1826 176.874 22.5515 174.653 18.6203C173.858 17.2275 173.976 15.633 175.131 14.5426C175.52 14.176 176.016 14.2585 176.477 14.341C176.585 14.3593 176.711 14.5334 176.765 14.6617C177.063 15.3489 177.352 16.027 177.614 16.7326C177.75 17.0992 177.497 17.4474 176.973 18.0705C176.802 18.2629 176.765 18.4462 176.901 18.6753C177.759 20.1415 178.95 21.2136 180.53 21.8367C180.765 21.9284 180.937 21.8734 181.081 21.6901C181.912 20.6546 182.002 20.3522 182.435 20.563C184.548 21.5893 184.71 21.626 184.719 21.8734C184.783 23.6786 183.158 24.3292 182.164 24.2559Z"
                fill="#06C8F7"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_1075">
                <rect width="198" height="39" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Box>
        {/*hamburger menu  */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            gap: "40px",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
          >
            <path
              d="M26.25 8.16675H1.75C0.783508 8.16675 0 8.95026 0 9.91675C0 10.8832 0.783508 11.6667 1.75 11.6667H26.25C27.2165 11.6667 28 10.8832 28 9.91675C28 8.95026 27.2165 8.16675 26.25 8.16675Z"
              fill="#06C8F7"
            />
            <path
              d="M1.75 3.5H26.25C27.2165 3.5 28 2.71649 28 1.75C28 0.783508 27.2165 0 26.25 0H1.75C0.783508 0 0 0.783508 0 1.75C0 2.71649 0.783508 3.5 1.75 3.5Z"
              fill="#06C8F7"
            />
            <path
              d="M26.25 16.3333H1.75C0.783508 16.3333 0 17.1168 0 18.0833C0 19.0497 0.783508 19.8333 1.75 19.8333H26.25C27.2165 19.8333 28 19.0497 28 18.0833C28 17.1168 27.2165 16.3333 26.25 16.3333Z"
              fill="#06C8F7"
            />
          </svg>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
