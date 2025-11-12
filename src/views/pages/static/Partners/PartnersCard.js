import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  mainCard: {
    "& .MuiPaper-elevation1": {
      borderRadius: "20px !important",
      height: "100% !important",
      padding: "0px",
    },
  },
  cardBox: {
    textAlign: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    minHeight: "345px",
    "& h3": {
      marginTop: "8px",
      textAlign: "center",
    },
    "& p": {
      marginTop: "5px",
      textAlign: "center",
    },
  },
}));

export default function PartnersCard(props) {
  const classes = useStyles();
  const { data } = props;
  return (
    <Box className={classes.mainCard}>
      <Paper elevation={1}>
        <Box className={classes.cardBox}>
          <Box>
            <img
              src={data.img}
              width="100%"
              style={{ maxWidth: "237px", margin: "0 auto" }}
            />
            <Typography variant="h3">{data.head}</Typography>
            <Typography variant="body2" color="textSecondary">
              {data.city}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
