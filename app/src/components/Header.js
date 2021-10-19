import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import "@fontsource/merriweather";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#940f00" }}>
        <StyledToolbar>
          <Typography
            variant="h3"
            wrap="true"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "merriweather",
            }}
          >
            Wildfire Commander
          </Typography>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
