import React from "react";
import "./Main.css";
import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import Cards from "./Cards";
import Learnandbrowse from "./learnandbrowse";
import { Bounce, Fade, Slide } from "react-reveal";
import Leftboxtop from "./Leftboxtop";
import Middleboxtop from "./Middleboxtop";
import Rightboxtop from "./Rightboxtop";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import Messages from "./Messages";
const Heropage = () => {
  return (
    <div>
      <section className="hero">
        <Box
          className="leftbox"
          sx={{ width: { md: "20%", lg: "25%", sm: "15%", xs: "0%" } }}
        >
          <Leftboxtop />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "50px",
              marginTop: "45px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                transition: "all 300ms ease-in-out",
                ":hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Tooltip title="Trending">
                <WhatshotIcon
                  sx={{
                    display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
                  }}
                />
              </Tooltip>
              <Typography
                variant="h5"
                sx={{
                  display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
                }}
              >
                Trending
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                transition: "all 300ms ease-in-out",
                ":hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Tooltip title="Latest">
                <NewReleasesIcon
                  sx={{
                    display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
                  }}
                />
              </Tooltip>
              <Typography
                variant="h5"
                sx={{
                  display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
                }}
              >
                Latest
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="middlebox">
          <Middleboxtop />
          <Learnandbrowse />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Slide left>
              <div>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </div>
            </Slide>
          </Box>
        </Box>

        <Box
          className="rightbox"
          sx={{
            display: { md: "none", xs: "none", lg: "block" },
          }}
        >
          <Rightboxtop />
          <Box></Box>
        </Box>
      </section>
    </div>
  );
};

export default Heropage;
