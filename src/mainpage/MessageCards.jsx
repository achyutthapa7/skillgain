import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const MessageCards = (props) => {
  return (
    <>
      <Box
        sx={{
          width: "80%",
          cursor: "pointer",
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      >
        <Box className="profile" sx={{ marginRight: "10px" }}>
          <Avatar>{props.avatar}</Avatar>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography component="p" sx={{ fontSize: "18pxx" }}>
            {props.name}
          </Typography>
          <Typography component="p" sx={{ fontSize: "10px", color: "#865555" }}>
            {props.message}
          </Typography>
        </Box>
      </Box>
      <hr />
    </>
  );
};

export default MessageCards;
