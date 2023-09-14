import React from "react";
import Leftboxtop from "../mainpage/Leftboxtop";
import Middleboxtop from "../mainpage/Middleboxtop";
import Rightboxtop from "../mainpage/Rightboxtop";
import { Box } from "@mui/material";
import "../mainpage/main.css";
import Learnandbrowse from "../mainpage/learnandbrowse";

import { Bounce, Fade, Slide } from "react-reveal";
import Cards from "../mainpage/Cards";
const Learn = () => {
  return (
    <>
      <section className="hero">
        <Box
          className="leftbox"
          sx={{ width: { md: "20%", lg: "25%", sm: "15%", xs: "0%" } }}
        >
          <Leftboxtop />
          <Box></Box>
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
            <Slide right>
              <br />
              <br />
              <br />
              <div>Learn</div>
            </Slide>
          </Box>
        </Box>

        <Box
          className="rightbox"
          sx={{ display: { md: "none", xs: "none", lg: "block" } }}
        >
          <Rightboxtop />
          <Box></Box>
        </Box>
      </section>
    </>
  );
};

export default Learn;
