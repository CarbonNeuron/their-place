import { Button, Stack, Typography } from "@mui/material";
import SocketThing from "@/src/app/socketThing";
import SendAction from "@/src/app/sendAction";

export default function Home() {
  return (
    <Stack gap={3} sx={{ height: 1 }}>
      <Typography variant={"h3"}>Welcome to their place</Typography>
      <form action={SendAction}>
        <Button type="submit" variant="contained" color="primary">
          submit
        </Button>
      </form>
      <SocketThing />
    </Stack>
  );
}
