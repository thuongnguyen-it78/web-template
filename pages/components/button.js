import { Button, Container } from "@mui/material";
import { Stack } from "@mui/system";

export default function ButtonPage() {
  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" size="small">Đăng Nhập</Button>
      </Stack>
    </Container>
  );
}
