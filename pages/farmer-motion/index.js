import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Demo(props) {
  const [x, setX] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          background: "red",
          width: 100,
          height: 100,
          position: "absolute",
          transition: "all 2s",
          transform: `translate(${x}px)`,
        }}
      ></Box>

      <Button
        onClick={() => setX((prev) => (prev === 0 ? 500 : 0))}
        sx={{
          mt: 20,
        }}
      >
        Change
      </Button>

      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      >
        <Box
          sx={{
            background: "yellow",
            width: 100,
            height: 100,
          }}
        ></Box>
      </motion.div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0,  x: 100 }}
          >
            <Box
              sx={{
                background: "yellow",
                width: 100,
                height: 100,
              }}
            ></Box>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setIsVisible((prev) => !prev)}>Toggle</button>
    </motion.div>
  );
}

Demo.propTypes = {};

export default Demo;
