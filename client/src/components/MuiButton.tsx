import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

import { useState } from "react";

export const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);
  console.log({ formats });
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          {" "}
          Primary{" "}
        </Button>
        <Button variant="contained" color="secondary">
          {" "}
          Secondary{" "}
        </Button>
        <Button variant="contained" color="error">
          {" "}
          Error{" "}
        </Button>
        <Button variant="contained" color="warning">
          {" "}
          Warning{" "}
        </Button>
        <Button variant="contained" color="info">
          {" "}
          Info{" "}
        </Button>
        <Button variant="contained" color="success">
          {" "}
          Success{" "}
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          {" "}
          Primary{" "}
        </Button>
        <Button variant="text" color="secondary">
          {" "}
          Secondary{" "}
        </Button>
        <Button variant="text" color="error">
          {" "}
          Error{" "}
        </Button>
        <Button variant="text" color="warning">
          {" "}
          Warning{" "}
        </Button>
        <Button variant="text" color="info">
          {" "}
          Info{" "}
        </Button>
        <Button variant="text" color="success">
          {" "}
          Success{" "}
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          {" "}
          Primary{" "}
        </Button>
        <Button variant="outlined" color="secondary">
          {" "}
          Secondary{" "}
        </Button>
        <Button variant="outlined" color="error">
          {" "}
          Error{" "}
        </Button>
        <Button variant="outlined" color="warning">
          {" "}
          Warning{" "}
        </Button>
        <Button variant="outlined" color="info">
          {" "}
          Info{" "}
        </Button>
        <Button variant="outlined" color="success">
          {" "}
          Success{" "}
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          {" "}
          Small{" "}
        </Button>
        <Button variant="contained" size="medium">
          {" "}
          Medium{" "}
        </Button>
        <Button variant="contained" size="large">
          {" "}
          Large{" "}
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendToMobileIcon />}
          disableRipple
          onClick={() => alert("clicked")}
        >
          Send To Mobile
        </Button>
        <Button
          variant="contained"
          endIcon={<SendToMobileIcon />}
          disableElevation
        >
          Send To Mobile
        </Button>
        <IconButton aria-label="send to mobile" color="success" size="small">
          {" "}
          <SendToMobileIcon />{" "}
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button> Left </Button>
          <Button> Center </Button>
          <Button onClick={() => alert("right clicked")}> Right </Button>
        </ButtonGroup>
        <Stack>
          <ButtonGroup
            variant="contained"
            size="medium"
            color="warning"
            aria-label="alignment button group"
          >
            <Button> Left </Button>
            <Button onClick={() => alert("center clicked")}> Center </Button>
            <Button> Right </Button>
          </ButtonGroup>
          <ButtonGroup
            variant="text"
            size="large"
            color="info"
            aria-label="alignment button group"
          >
            <Button onClick={() => alert("left clicked")}> Left </Button>
            <Button onClick={() => alert("center clicked")}> Center </Button>
            <Button onClick={() => alert("right clicked")}> Right </Button>
          </ButtonGroup>
        </Stack>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text format"
          value={formats}
          onChange={handleFormatChange}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
