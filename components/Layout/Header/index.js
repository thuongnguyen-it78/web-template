import { useMediaQuery, useTheme } from "@mui/material";
import React, { Fragment } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function Header(props) {
  const theme = useTheme();
  const upMD = useMediaQuery(theme.breakpoints.up("md"));
  return <Fragment>{upMD ? <DesktopHeader /> : <MobileHeader />}</Fragment>;
}

Header.propTypes = {};

export default Header;
