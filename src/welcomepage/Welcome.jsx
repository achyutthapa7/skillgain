import React, { useState } from "react";
import "./Welcome.css";
import videosrc from "/src/video/bgvideo.mp4";
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Login from "../loginpage/Login";
import login from "/src/image/login.png";
import { Bounce } from "react-reveal";
import Offers from "./Offers";
import logo from "/src/image/logo.png";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/browse");
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    background: { md: "blue", xs: "white" },
    boxShadow: 24,
    height: "90%",
    overflow: {
      md: "hidden",
      xs: "scroll",
    },
  };

  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          zIndex: "1",
          top: "30px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box>
          <Avatar
            src={logo}
            sx={{ width: "70px", height: "70px", cursor: "pointer" }}
          ></Avatar>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Button
            variant="contained"
            onClick={handleclick}
            sx={{
              width: "200px",
              background: "none",
              fontWeight: "bolder",
              boxShadow: "none",
              letterSpacing: "2px",
              color: "black",
              ":hover": {
                color: "black",
                background: "none",
              },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Browse as Guest
          </Button>
          <span
            style={{
              width: isHovered ? "200px" : "0px",
              height: "2px",
              background: "black",
              position: "absolute",
              left: 0,
              bottom: 0,
              transition: "width 0.3s ease",
            }}
          ></span>
        </Box>
      </Box>

      <section className="main">
        <div className="bgvideodiv">
          <video
            src={videosrc}
            autoPlay
            muted
            loop
            className="bgvideo"
            style={{ filter: "blur(1.2px)" }}
          />
        </div>

        <div className="message">
          <div className="welcome">
            <Typography
              variant="h2"
              sx={{ fontSize: { md: "80px", xs: "60px" } }}
            >
              Welcome to IdeaSkool
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                width={500}
                sx={{ fontSize: { md: "20px", xs: "18px" } }}
                letterSpacing={1}
              >
                Welcome to our community! Our platform makes connecting,
                learning, and staying in touch effortless and enjoyable.
              </Typography>
            </Box>
          </div>
          <br />
          <Box className="buttons">
            <Button
              variant="contained"
              sx={{ width: { md: "20%", xs: "40%" } }}
              onClick={handleOpen}
            >
              Login
            </Button>

            <Modal open={open} onClose={handleClose}>
              <Grid sx={style} container>
                <Grid
                  item
                  md="6"
                  xs="12"
                  sx={{
                    border: "1px solid white",
                    height: "100%",
                    display: { md: "block", xs: "none" },
                  }}
                >
                  <Bounce left>
                    <img
                      src={login}
                      alt="loginimg"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Bounce>
                </Grid>
                <Grid
                  item
                  md="6"
                  xs="12"
                  sx={{
                    background: "white",
                    height: "100%",
                    padding: "0 30px",
                  }}
                >
                  <Login />
                </Grid>
              </Grid>
            </Modal>

            <Button
              variant="contained"
              sx={{
                width: { md: "20%", xs: "40%" },
                background: "#82ab63",
                ":hover": {
                  background: "#82ab63",
                  opacity: "0.9",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </div>
        <br />
        <br />
        <Typography
          variant="h4"
          textAlign="center"
          color="black"
          fontWeight="bolder"
          letterSpacing="2px"
        >
          What We Offer?
        </Typography>

        <div className="offers">
          <Offers
            icon="ExploreIcon"
            title="Browse and Explore"
            message="Discover engaging articles, insightful discussions, and tailored
          content, just like on social media"
          />

          <Offers
            icon="CachedIcon"
            title="Progress Tracking"
            message="Track your progress effortlessly. Our platform provides real-time feedback, assessments, and performance tracking to help you stay on top of your learning goals. See how far you've come and where you're headed."
          />
          <Offers
            icon="ConnectWithoutContactIcon"
            title="Connect With People"
            message="Engage with a vibrant community of learners and educators. Connect with like-minded individuals, exchange ideas, and collaborate on projects. Learning isn't just a solo endeavor—it's a collective journey."
          />
          <Offers
            icon="HelpIcon"
            title="Expert Guidance"
            message="Access expert guidance whenever you need it. Our educators and mentors are here to answer your questions, provide insights, and ensure you're on the path to success."
          />
          <Offers
            icon="NotificationImportantIcon"
            title="Stay Informed"
            message="Stay updated with the latest trends and breakthroughs in your field of interest. We curate the most relevant content so you can stay informed and ahead of the curve."
          />
        </div>
      </section>
    </div>
  );
};

export default Welcome;
