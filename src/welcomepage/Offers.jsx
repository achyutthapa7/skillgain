import React from "react";
import { Typography } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CachedIcon from "@mui/icons-material/Cached";
import HelpIcon from "@mui/icons-material/Help";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
const Offers = (props) => {
  let iconComponent;
  switch (props.icon) {
    case "BrowseGalleryIcon":
      iconComponent = (
        <BrowseGalleryIcon sx={{ fontSize: "80px", color: "#be71e5" }} />
      );
      break;
    case "ConnectWithoutContactIcon":
      iconComponent = (
        <ConnectWithoutContactIcon
          sx={{ fontSize: "80px", color: "#be71e5" }}
        />
      );
      break;
    case "ExploreIcon":
      iconComponent = (
        <ExploreIcon sx={{ fontSize: "80px", color: "#be71e5" }} />
      );
      break;
    case "CachedIcon":
      iconComponent = (
        <CachedIcon sx={{ fontSize: "80px", color: "#be71e5" }} />
      );
      break;
    case "HelpIcon":
      iconComponent = <HelpIcon sx={{ fontSize: "80px", color: "#be71e5" }} />;
      break;
    case "NotificationImportantIcon":
      iconComponent = (
        <NotificationImportantIcon
          sx={{ fontSize: "80px", color: "#be71e5" }}
        />
      );
      break;
    default:
      iconComponent = null;
  }
  return (
    <div>
      <div className="offer">
        {iconComponent}
        <Typography
          variant="h4"
          color="black"
          sx={{ fontSize: { xs: "25px" } }}
        >
          {props.title}
        </Typography>
        <Typography
          textAlign="center"
          fontSize="12px"
          component="p"
          sx={{
            fontWeight: "10",
            letterSpacing: "1px",
            width: "300px",
            marginTop: "3px",
            color: "brown",
          }}
        >
          {props.message}
        </Typography>
      </div>
    </div>
  );
};

export default Offers;
