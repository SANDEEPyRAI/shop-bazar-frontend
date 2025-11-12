import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  pagination: {
    "& .MuiButton-text": {
    //   color: theme.palette.error.main,
    color:'#fff',
    },
    "& .MuiPaginationItem-page.Mui-selected, & .MuiPaginationItem-root": {
      fontSize: "14px",
      height: "30px",
    },
    "& .MuiPaginationItem-page.Mui-selected ": {
      background: "#0856CC",
      color: "#fff",
      border:"transparent",
    },
    "& .MuiPaginationItem-root": {
      borderRadius: "5px",
      width: "38px",
      border: "1px solid #C1C1C1",
      color: "#263238",
    },
    "& .btnHeight": {
      color: "#273240",
      fontWeight: 400,
      fontSize: "10px",
      lineHeight: "24px",
      height: "30px",
      borderRadius:'8px',
    },
  },
}));

const PaginationComponent = ({
  page,
  handlePrevious,
  noOfPages,
  handleChange,
  handleNext,
  count
}) => {
  const classes = useStyles();

  return (
    <Box mt={3} mb={1} className={`displayCenter ${classes.pagination}`}>
      <Button
        variant="outlined"
        disabled={page === 1}
        onClick={handlePrevious}
        className="btnHeight"
      >
        Previous
      </Button>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        hideNextButton={true}
        hidePrevButton={true}
      />
      <Button
        variant="outlined"
        disabled={page === count}
        onClick={handleNext}
        className="btnHeight"
      >
        Next
      </Button>
    </Box>
  );
};

export default PaginationComponent;
