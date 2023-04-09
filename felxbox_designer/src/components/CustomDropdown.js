import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CustomDropdown(props) {
  return (
    <Box sx={{ minWidth: 500 }}>
      <FormControl fullWidth>
        <InputLabel id={props.id}>{props.labelText}</InputLabel>
        <Select
          labelId={props.id}
          id={props.id}
          value={props.value}
          label={props.label}
          onChange={(event) => props.handleChange(props.eventName, event)}
        >
          {props.itemList.map((el, i) => (
            <MenuItem value={el.value != undefined ? el.value : el}>
              {el.text != undefined ? el.text : el}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
