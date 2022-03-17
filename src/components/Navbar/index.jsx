import React from "react";
import { AccountCircle, CompressOutlined } from "@mui/icons-material";
import { Button, IconButton, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{
        minHeight: 50,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 1,
        paddingRight: 2,
        borderBottom: 1,
        borderColor: sm ? "grey.300" : "grey:700",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: 160,
        }}
      >
        <Button variant="outlined" disableRipple>
          Projects
        </Button>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
