import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import useSystem from "../hooks/useSystem";

function GlobalLoading() {
  const { globalLoading } = useSystem();
  
  return (
    <Backdrop open={Boolean(globalLoading)}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
}

GlobalLoading.propTypes = {};

export default GlobalLoading;
