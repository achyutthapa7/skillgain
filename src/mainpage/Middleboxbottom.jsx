import { Box } from "@mui/material";
import React from "react";
import Cards from "./Cards";
import { Slide } from "react-reveal";

const Middleboxbottom = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          overflowX: "hidden",

          padding: {
            lg: "0 70px",
            md: "0 40px",
            sm: "0 25px",
            xs: "0 5px ",
          },
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
    </div>
  );
};

export default Middleboxbottom;
