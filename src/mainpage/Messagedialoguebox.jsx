import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Avatar, Box, Button, Tooltip } from "@mui/material";
import MarkChatReadOutlinedIcon from "@mui/icons-material/MarkChatReadOutlined";
import Messages from "./Messages";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Messagedialoguebox = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Messages">
        <Button onClick={handleClickOpen}>
          <MarkChatReadOutlinedIcon
            sx={{ fontSize: "30px", cursor: "pointer", fill: "black" }}
          />
        </Button>
      </Tooltip>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            display: "flex",
            gap: "10px",
            height: "100vh",
          }}
        >
          <Box
            className="rightbox"
            sx={{
              width: "350px",
              height: "100%",
              overflow: "scroll",
              position: "sticky",
              top: "0",
              left: "0",
            }}
          >
            <Messages />
          </Box>
          <Box sx={{ flex: 1 }}></Box>
        </Box>
      </Dialog>
    </div>
  );
};
export default Messagedialoguebox;
