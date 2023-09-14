import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
const Cards = () => {
  return (
    <div>
      <div className="card">
        <div className="profilediv">
          <div className="profilepic">
            <Avatar sx={{ zIndex: "1" }}> J</Avatar>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <Typography fontSize="15px" fontWeight="bold" marginBottom="0">
              John Smith
            </Typography>
            <Typography fontSize="11px" color="gray" marginTop="0px">
              @john1234 - 5h ago{" "}
              <span
                style={{
                  color: "#3874E8",
                  fontWeight: "bolder",
                  cursor: "pointer",
                }}
              >
                follow
              </span>
            </Typography>
          </div>
        </div>
        <div className="statusdiv">
          <Typography>Math is amazing. I don't why people hate it?</Typography>
        </div>
        <div className="imagediv">
          <img
            src="/src/image/math.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <Box
          className="interactiondiv"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { lg: "150px", md: "250px", sm: "200px", xs: "100px" },
          }}
        >
          <Tooltip title="comment">
            <QuestionAnswerOutlinedIcon />
          </Tooltip>
          <Tooltip title="Share">
            <ShareOutlinedIcon />
          </Tooltip>
          <Tooltip title="Save">
            <BookmarkBorderOutlinedIcon />
          </Tooltip>
        </Box>
      </div>
    </div>
  );
};

export default Cards;
