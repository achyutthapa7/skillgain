import { Avatar, Box, Button, Tooltip } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import "./Main.css";
import Drawermenu from "../Drawermenu";
import Messagedialoguebox from "./Messagedialoguebox";
const Middleboxtop = () => {
  return (
    <>
      <Box
        sx={{
          height: "12%",
          border: "1px solid rgb(203, 172, 172)",
          borderTop: "0",
          borderLeft: "0",
          borderRight: "0",
          position: "sticky",
          top: 0,
          background: "white",
          zIndex: "2",
          display: "flex",
          alignItems: "center",
        }}
      >
        <SearchOutlinedIcon sx={{ fontSize: "22px", paddingLeft: "20px" }} />
        <input type="search" className="searchinput" placeholder="Search" />
        <Box
          sx={{
            height: "12%",
            paddingRight: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            display: { lg: "none", md: "flex", sm: "flex", xs: "none" },
          }}
        >
          <Tooltip title="notifications">
            <Button>
              <NotificationsNoneOutlinedIcon
                sx={{ fontSize: "30px", cursor: "pointer", fill: "black" }}
              />
            </Button>
          </Tooltip>
          <Tooltip title="messages">
            <Messagedialoguebox />
          </Tooltip>
          <Tooltip title="profile">
            <Avatar sx={{ cursor: "pointer" }}>A</Avatar>
          </Tooltip>
        </Box>
        <Button>
          <Drawermenu />
        </Button>
      </Box>
    </>
  );
};

export default Middleboxtop;
