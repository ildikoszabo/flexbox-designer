import * as React from "react";
import OptionSelection from "./pages/OptionSelectionPage";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            FlexBox designer
          </Typography>
        </Toolbar>
      </AppBar>
      <OptionSelection />
    </Box>
  );
};

export default App;
