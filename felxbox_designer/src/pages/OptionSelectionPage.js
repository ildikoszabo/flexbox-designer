import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import optionConfig from "../constants/optionConfig.json";
import CustomDropdown from "../components/CustomDropdown";

export default function OptionSelection() {
  const childItemList = Array.from(Array(10)).map((e, i) => i + 1);

  const [flexDirection, setFlexDirection] = React.useState("row");
  const [mainAxisAlignment, setMainAxisAlignment] = React.useState("start");
  const [crossAxisAlignment, setCrossAxisAlignment] = React.useState("start");
  const [childItemCount, setChildItemCount] = React.useState(2);
  const [gap, setGap] = React.useState(0);
  const [flexWrap, setFlexWrap] = React.useState("nowrap");
  const [alignContent, setAlignContent] = React.useState("");
  const childItemArray = Array.from(Array(childItemCount));

  const [mainStyle, setMainStyle] = React.useState({
    display: "flex",
    width: "800px",
    height: "400px",
    border: "2px solid black",
    flexDirection: "row",
    borderTop: "solid blue",
  });

  const [childStyle, setChildStyle] = React.useState({
    display: "flex",
    width: "100px",
    height: "100px",
    backgroundColor: "green",
    border: "solid",
  });

  const handleChange = (type, event) => {
    if (type == "flexDirection") {
      let direction = event.target.value;
      setFlexDirection(direction);
      let updatedValue = {
        flexDirection: direction,
        borderTop: direction == "row" ? "solid blue" : "solid black",
        borderLeft: direction == "row" ? "solid black" : "solid blue",
      };
      setMainStyle((mainStyle) => ({ ...mainStyle, ...updatedValue }));
    }

    if (type == "childItemCount") {
      setChildItemCount(event.target.value);
    }

    if (type == "mainAxisAlignment") {
      let alignment = event.target.value;
      setMainAxisAlignment(alignment);
      let updatedValue = {
        justifyContent: alignment,
      };
      setMainStyle((mainStyle) => ({ ...mainStyle, ...updatedValue }));
    }

    if (type == "crossAxisAlignment") {
      let alignment = event.target.value;
      setCrossAxisAlignment(alignment);
      let updatedValue = {
        alignItems: alignment,
      };
      setMainStyle((mainStyle) => ({ ...mainStyle, ...updatedValue }));
    }

    if (type == "gap") {
      let gapSize = event.target.value;
      setGap(gapSize);
      let updatedValue = {
        gap: `${gapSize}em`,
      };
      setMainStyle((mainStyle) => ({ ...mainStyle, ...updatedValue }));
    }

    if (type == "flexWrap") {
      let wrapStyle = event.target.value;
      setFlexWrap(wrapStyle);
      let updatedValue = {
        flexWrap: wrapStyle,
      };
      setMainStyle((mainStyle) => ({ ...mainStyle, ...updatedValue }));
    }

    if (type == "alignContent") {
      let alignStyle = event.target.value;
      setAlignContent(alignStyle);
      let updatedValue = {
        alignContent: alignStyle,
      };
      setMainStyle((mainStyle) => ({ ...mainStyle, ...updatedValue }));
    }
  };

  return (
    <div
      style={{
        paddingBottom: "60px",
      }}
    >
      <div
        style={{
          paddingTop: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <h1>Describe your flexbox needs</h1>
      </div>
      <div
        style={{
          paddingTop: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <CustomDropdown
          handleChange={handleChange}
          value={flexDirection}
          {...optionConfig.find((el) => el.Name == "flexDirection").Values}
        />
        <CustomDropdown
          handleChange={handleChange}
          value={childItemCount}
          {...optionConfig.find((el) => el.Name == "childItemCount").Values}
        />
        <CustomDropdown
          handleChange={handleChange}
          value={mainAxisAlignment}
          {...optionConfig.find((el) => el.Name == "mainAxisAlignment").Values}
        />
        <CustomDropdown
          handleChange={handleChange}
          value={crossAxisAlignment}
          {...optionConfig.find((el) => el.Name == "crossAxisAlignment").Values}
        />
        <Box sx={{ minWidth: 500 }}>
          <OutlinedInput
            id="outlined-adornment-gap"
            type="number"
            endAdornment={<InputAdornment position="end">em</InputAdornment>}
            aria-describedby="outlined-gap-helper-text"
            inputProps={{
              "aria-label": "gap",
            }}
            value={gap}
            onChange={(event) => handleChange("gap", event)}
          />
        </Box>
        <CustomDropdown
          handleChange={handleChange}
          value={flexWrap}
          {...optionConfig.find((el) => el.Name == "flexWrap").Values}
        />

        {flexWrap == "nowrap" ? null : (
          <CustomDropdown
            handleChange={handleChange}
            value={alignContent}
            {...optionConfig.find((el) => el.Name == "alignContent").Values}
          />
        )}
      </div>
      <div style={{ paddingLeft: "100px" }}>
        <div style={{ color: "blue" }}>
          Main axis: {flexDirection == "row" ? "horizontal" : "vertical"}
        </div>
        <div>
          Cross axis: {flexDirection == "row" ? "vertical" : "horizontal"}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <div style={mainStyle}>
          {childItemArray.map((el, i) => (
            <div style={childStyle}></div>
          ))}
        </div>
        <div style={{ paddingLeft: "20px" }}>
          Parent style:
          <Box
            component="div"
            sx={{ whiteSpace: "normal", paddingBottom: "20px" }}
          >
            {JSON.stringify(mainStyle)}
          </Box>
          Child style:
          <Box component="div" sx={{ whiteSpace: "normal" }}>
            {JSON.stringify(childStyle)}
          </Box>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "100px",
          paddingRight: "100px",
          paddingTop: "50px",
        }}
      >
        @ <a href="https://ipuzzletoo.azurewebsites.net">i puzzle too</a>
      </div>
    </div>
  );
}
