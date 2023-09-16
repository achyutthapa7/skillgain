import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
const Leftboxbottom = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "70px",
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
              transform: "scale(1.234)",
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
    </div>
  );
};

export default Leftboxbottom;
