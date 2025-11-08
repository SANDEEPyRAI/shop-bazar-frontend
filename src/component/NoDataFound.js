import { Box, Typography } from "@material-ui/core";
import React from "react";

export default function NoDataFound({ data }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Box align="center">
        <img
          src="images/NaDataimg.png"
          alt=""
          style={{ height: "100px", width: "100px" }}
        />
        <Typography variant="h4" color="textPrimary">
          {"No Data Found"}
        </Typography>
      </Box>
    </Box>
  );
}
