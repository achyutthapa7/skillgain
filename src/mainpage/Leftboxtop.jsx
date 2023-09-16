import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "/src/image/logo.png";
const Leftboxtop = () => {
  return (
    <>
      <Box
        sx={{
          height: "12%",
          border: "1px solid rgb(203, 172, 172)",
          borderTop: "0",
          borderLeft: "0",
          borderRight: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: { md: "none", lg: "flex", sm: "none", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          Idea<span style={{ color: "blue" }}>Skool</span>
        </Typography>

        <Box
          sx={{
            display: { md: "flex", lg: "none", sm: "flex", xs: "none" },
            cursor: "pointer",
          }}
        >
          <img src={logo} alt="logo" style={{ width: "70px" }} />
        </Box>
      </Box>
    </>
  );
};

export default Leftboxtop;
