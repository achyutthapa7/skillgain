import { Avatar, Box, Button, Tooltip } from "@mui/material";
import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MarkChatReadOutlinedIcon from "@mui/icons-material/MarkChatReadOutlined";
import Messagedialoguebox from "./Messagedialoguebox";
const Rightboxtop = () => {
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
          gap: "30px",
          position: "sticky",
          zIndex: "2",
          top: "0",
          background: "#ffffff",
        }}
      >
        <Tooltip title="notifications">
          <Button>
            <NotificationsNoneOutlinedIcon
              sx={{ fontSize: "35px", cursor: "pointer", fill: "black" }}
            />
          </Button>
        </Tooltip>

        <Messagedialoguebox />

        <Tooltip title="profile">
          <Button>
            <Avatar sx={{ cursor: "pointer" }}>A</Avatar>
          </Button>
        </Tooltip>
      </Box>
    </>
  );
};

export default Rightboxtop;
