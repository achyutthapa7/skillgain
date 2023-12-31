import React from "react";
import Leftboxtop from "../mainpage/Leftboxtop";
import Middleboxtop from "../mainpage/Middleboxtop";
import Rightboxtop from "../mainpage/Rightboxtop";
import { Box } from "@mui/material";
import "../mainpage/main.css";
import Learnandbrowse from "../mainpage/learnandbrowse";

import { Bounce, Fade, Slide } from "react-reveal";
import Cards from "../mainpage/Cards";
import RightboxBottom from "../mainpage/RightboxBottom";
const Learn = () => {
  return (
    <>
      <section className="hero">
        <Box
          className="leftbox"
          sx={{ width: { md: "20%", lg: "20%", sm: "15%", xs: "0%" } }}
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
              padding: {
                lg: "0 70px",
                md: "0 40px",
                sm: "0 25px",
                xs: "0 5px ",
              },
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
          <RightboxBottom />
        </Box>
      </section>
    </>
  );
};

export default Learn;
