import React from "react";
import "./Main.css";
import { Box } from "@mui/material";

import Learnandbrowse from "./learnandbrowse";
import Leftboxtop from "./Leftboxtop";
import Middleboxtop from "./Middleboxtop";
import Rightboxtop from "./Rightboxtop";

import RightboxBottom from "./RightboxBottom";
import Leftboxbottom from "./Leftboxbottom";
import Middleboxbottom from "./Middleboxbottom";
const Heropage = () => {
  return (
    <div>
      <section className="hero">
        <Box
          className="leftbox"
          sx={{ width: { md: "20%", lg: "20%", sm: "15%", xs: "0%" } }}
        >
          <Leftboxtop />
          <Leftboxbottom />
        </Box>

        <Box className="middlebox">
          <Middleboxtop />
          <Learnandbrowse />
          <Middleboxbottom />
        </Box>

        <Box
          className="rightbox"
          sx={{
            display: {
              md: "none",
              xs: "none",
              lg: "block",
            },
          }}
        >
          <Rightboxtop />
          <RightboxBottom />
        </Box>
      </section>
    </div>
  );
};

export default Heropage;
