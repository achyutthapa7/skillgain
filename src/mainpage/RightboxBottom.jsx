import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const RightboxBottom = () => {
  const API_URL = "https://api.quotable.io/random";
  const [quoteText, setQuoteText] = useState(
    "It is the quality of our work which will please God, not the quantity."
  );
  const [quoteAuthor, setQuoteAuthor] = useState("Mahatma Gandhi");

  const quoteGenerator = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setQuoteText(data.content);
      setQuoteAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    // Initial call when the component mounts
    quoteGenerator();

    // Calculate the time to the next day
    const now = new Date();
    const oneDayInMillis = 24 * 60 * 60 * 1000; // 1 day in milliseconds
    const nextDayInMillis = now.getTime() + oneDayInMillis;

    // Calculate the delay until the next day
    const delayMillis = nextDayInMillis - now.getTime();

    // Call quoteGenerator after 1 day
    const timeoutId = setTimeout(() => {
      quoteGenerator();
      // Schedule the next call after another day
      setInterval(quoteGenerator, oneDayInMillis);
    }, delayMillis);

    return () => {
      // Clear the timeout when the component unmounts to prevent memory leaks
      clearTimeout(timeoutId);
    };
  }, []);

  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "80px",
    padding: "80px 20px",
    height: "100%",
  };

  const boxStyles = {
    width: "350px",
    height: "300px",
    background: "#3b9dff",
    padding: "20px",
    color: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    boxShadow: "-2px 7px 20px -1px gray",
    transition: "transform 200ms ease",
    ":hover": {
      transform: "scale(0.9)",
    },
  };

  return (
    <div>
      <Box sx={containerStyles}>
        <Box sx={boxStyles}>
          <Typography
            variant="h5"
            sx={{ textDecoration: "underline", padding: "20px 0" }}
          >
            Quote of the day
          </Typography>
          <Typography component="p" textAlign="center" letterSpacing="1.2px">
            {quoteText}
          </Typography>
          <Typography sx={{ fontWeight: "bolder" }}>{quoteAuthor}</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default RightboxBottom;
