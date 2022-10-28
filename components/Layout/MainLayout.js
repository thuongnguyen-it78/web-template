import { Box, Stack } from "@mui/material";
import GlobalLoading from "../GlobalLoading";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout({ children }) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
      <GlobalLoading />
    </Stack>
  );
}
