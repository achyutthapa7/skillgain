import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import { Box } from "@mui/material";

const Drawermenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Box
        sx={{
          display: { lg: "none", md: "none", sm: "none", xs: "flex" },
        }}
      >
        <MenuOutlinedIcon
          sx={{ paddingRight: "15px" }}
          onClick={toggleDrawer}
        />
      </Box>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div></div>
      </Drawer>
    </>
  );
};

export default Drawermenu;
