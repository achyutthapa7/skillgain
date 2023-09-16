import { Box, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
const Learnandbrowse = () => {
  const navigate = useNavigate();
  const Gotolearn = () => {
    navigate("/learn");
  };
  const Gotobrowse = () => {
    navigate("/home");
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: { lg: "100px", md: "200px", sm: "170px", xs: "70px" },
          padding: "10px 0",
        }}
      >
        <Box sx={{ cursor: "pointer" }}>
          <Box
            sx={{
              fontSize: {
                xs: "17px",
                lg: "25px",
                md: "22px",
                sm: "19px",
              },
              transform: "translateY(30px)",
            }}
            fontWeight="bold"
            onClick={Gotobrowse}
          >
            <Tooltip title="Browse">
              <ExploreIcon
                sx={{
                  fontSize: "35px",
                  color: "#7777df",
                  transition: "all 350ms linear",
                  ":hover": {
                    transform: "scale(1.6)",
                  },
                }}
              />
            </Tooltip>
          </Box>
        </Box>
        <Box
          sx={{ height: "100px", width: "2px", background: "rgb(76, 64, 64);" }}
        ></Box>
        <Box sx={{ cursor: "pointer" }}>
          <Box
            sx={{
              fontSize: { xs: "17px", lg: "25px", md: "22px", sm: "19px" },
              transform: "translateY(30px)",
            }}
            fontWeight="bold"
            onClick={Gotolearn}
          >
            <Tooltip title="Learn">
              <LocalLibraryIcon
                sx={{
                  fontSize: "35px",
                  color: "#7777df",
                  transition: "all 350ms linear",
                  ":hover": {
                    transform: "scale(1.6)",
                  },
                }}
              />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Learnandbrowse;
