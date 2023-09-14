import { Avatar, Box, Tooltip } from "@mui/material";
import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MarkChatReadOutlinedIcon from "@mui/icons-material/MarkChatReadOutlined";
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
          <NotificationsNoneOutlinedIcon
            sx={{ fontSize: "35px", cursor: "pointer" }}
          />
        </Tooltip>
        <Tooltip title="messages">
          <MarkChatReadOutlinedIcon
            sx={{ fontSize: "30px", cursor: "pointer" }}
          />
        </Tooltip>
        <Tooltip title="profile">
          <Avatar sx={{ cursor: "pointer" }}>A</Avatar>
        </Tooltip>
      </Box>
    </>
  );
};

export default Rightboxtop;
