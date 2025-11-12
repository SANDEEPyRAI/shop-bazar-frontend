import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Box,
  TextField,
  Grid,
  FormControl,
  Select,
  MenuItem,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { menuProps } from "src/utils";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    "& .subCategory": {
      "& .MuiSelect-selectMenu": {
        background: "rgba(198, 198, 198, 0.17)",
      },
      "& .MuiFilledInput-input": {
        padding: "10px 12px 10px 0px",
      },
      "& .MuiFilledInput-adornedStart": {
        paddingLeft: 0,
      },
      "& .MuiFilledInput-root": {
        height: "50px",
        background: "rgba(198, 198, 198, 0.17)",
      },
      "& .MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)":
      {
        marginTop: 0,
      },
      "& .MuiFilledInput-underline:before , & .MuiFilledInput-underline:after":
      {
        borderBottom: "none",
      },
      "& .selectTag": {
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      },
    },

    "& .filterFlex": {
      display: "flex",
      alignItems: "center",
      padding: ({ type }) =>
      type === "transaction" ? "24px 0px 0px 20px" : "20px",
      background: "#fff",

      [theme.breakpoints.down("md")]: {
        // flexWrap: "wrap",
        // gap: "20px",
      },

      "& .selectCategoryContainer": {
        width: "100%",
        maxWidth: "312px",
        marginRight: "26px",

        [theme.breakpoints.down("xs")]: {
          marginRight: "0px",
          maxWidth: "100%",
        },
        [theme.breakpoints.down("sm")]:{
          display:'none'
        },

        "@media screen and (min-width: 1640px)": {
          maxWidth: "354px",
        },

        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },

        "& .MuiSelect-select": {
          background: "rgba(198, 198, 198, 0.17)",
          border: "none",
          fontSize: "16px",
        },
      },

      "& .allcategoryFilter": {
        maxWidth: "500px",
        gap: "20px",
      },

      "& .selectSubCategoryContainer": {
        width: "100%",
        maxWidth: "312px",
        marginRight: "20px",
        [theme.breakpoints.down("sm")]:{
          display:'none'
        },

        [theme.breakpoints.down("xs")]: {
          marginRight: "0px",
          maxWidth: "100%",
        },

        "@media screen and (min-width: 1640px)": {
          maxWidth: "354px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .MuiSelect-select": {
          background: "rgba(198, 198, 198, 0.17)",
          border: "none",
          fontSize: "16px",
        },
      },

      "& .textfieldContainer": {
        width: "100%",
        maxWidth: "657px",

        [theme.breakpoints.down("xs")]: {
          marginRight: "0px",
          maxWidth: "100%",
        },

        "@media screen and (min-width: 1640px)": {
          maxWidth: "770px",
        },
        marginRight: "26px",

        "& .MuiOutlinedInput-adornedStart": {
          paddingLeft: "0px",
        },

        "& .MuiOutlinedInput-root": {
          background: "rgba(198, 198, 198, 0.17)",
        },

        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },

        "& .MuiOutlinedInput-input": {
          "&::placeholder": {
            color: "#949494",

            fontSize: "16px",
            fontWeight: "400",
          },
        },
      },
      "& .accountText": {
        fontSize: "28px",
        fontWeight: 500,
      },

      "& .searchBtnContainer": {
        width: "100%",
        maxWidth: "228px",

        [theme.breakpoints.down("xs")]: {
          marginRight: "0px",
          maxWidth: "100%",
          display:"none"
        },

        "@media screen and (min-width: 1640px)": {
          maxWidth: "312px",
        },
        "& button": {
          width: "100%",
        },
      },
    },

    "& .filterFlexAll": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",

      padding: ({ type }) =>
        type === "transaction" ? "24px 0px 0px 20px" : "20px",
      background: "#fff",

      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
        gap: "20px",
      },

      "& .textfieldContainer": {
        width: "100%",
        maxWidth: "657px",
        display: "flex",
        alignItems: "center",
        gap: "20px",

        "& .searchbtn": {
          width: "100%",
          maxWidth: "212px",
        },

        [theme.breakpoints.down("xs")]: {
          marginRight: "0px",
          maxWidth: "100%",
        },

        "@media screen and (min-width: 1640px)": {
          maxWidth: "770px",
        },
        marginRight: "26px",

        "& .MuiOutlinedInput-adornedStart": {
          paddingLeft: "0px",
        },

        "& .MuiOutlinedInput-root": {
          background: "rgba(198, 198, 198, 0.17)",
        },

        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },

        "& .MuiOutlinedInput-input": {
          "&::placeholder": {
            color: "#949494",

            fontSize: "16px",
            fontWeight: "400",
          },
        },
      },

      "& .accountText": {
        fontSize: "28px",
        fontWeight: 500,
      },

      "& .searchBtnContainer": {
        width: "100%",
        maxWidth: "228px",

        [theme.breakpoints.down("xs")]: {
          marginRight: "0px",
          maxWidth: "100%",
        },

        "@media screen and (min-width: 1640px)": {
          maxWidth: "312px",
        },
        "& button": {
          width: "100%",
        },
      },
    },
  },

  filterFlex1: {
    display: "flex",
    justifyContent: "space-between",
    "& .accountTextTitle": {
      color: "#262626",
      fontSize: "24px",
      fontWeight: 500,
    },
    "& .accountText": {
      fontSize: "28px",
      fontWeight: 500,
    },
    "& .filterBox": {
      width: "100%",
      "& .MuiOutlinedInput-root , & .MuiSelect-outlined.MuiSelect-outlined": {
        background: "rgba(198, 198, 198, 0.17)",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    "& .searchBtnBox": {
      width: "100%",
      // maxWidth: "162px",
    },
    "& .searchBtn": {
      width: "100%",
    },
    "& .dates": {
      "& .MuiOutlinedInput-root , & .MuiSelect-outlined.MuiSelect-outlined": {
        background: "rgba(198, 198, 198, 0.17)",
      },
    },
    "& .textfieldContainer": {
      display: "flex",
      alignItems: "center",
      "& .MuiOutlinedInput-root , & .MuiSelect-outlined.MuiSelect-outlined": {
        background: "rgba(198, 198, 198, 0.17)",
      },
    },
  },
}));

export default function FilterComponent({
  type,
  accountSearch,
  onSearchChange,
  onFromDateChange,
  onToDateChange,
  toDate,
  fromDate,
  onSearch,
  onSubCategorySerch,
  transactionHash,
  setTransactionHash,
}) {


  const classes = useStyles();

  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const [selectPrice, setSelectPrice] = useState("")
  //const [transactionHash, setTransactionHash] = useState('');

  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  const handleFromDateChange = (event) => {
    onFromDateChange(event);
  };

  // const handleInputChange = (event) => {
  //   const { value } = event.target;
  //   setSearchInput(value);


  //   if (!value.trim()) {
  //     onSearch('')
  //   }
  // };

  const handleSearchClick = () => {
    onSearch(searchInput);
  };

  const handlePriceSelectChange = (event) => {

    setSelectPrice(event.target.value)
  }

  const handleSubCategorySearchBtnClick = () => {
    onSubCategorySerch(selectPrice)
  }
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
    onSearch(value); // Pass the search value to the parent component
  };

  return (
    <>
      {type === "transaction" && (
        <Box className={classes.filterContainer}>
          <Box className="filterFlex">
            <Box className="textfieldContainer">
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search by blockchain Id"
                value={searchInput}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <img src="images/transaction_search.svg" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
             
              />
            </Box>

            <Box className="selectCategoryContainer">
              <Select
                fullWidth
                variant="outlined"
                displayEmpty
                value={category}
                MenuProps={menuProps}
              >
                <MenuItem value="">Select Category</MenuItem>
                <MenuItem>Health and Medicine</MenuItem>
                <MenuItem>Engineering and Technology</MenuItem>
                <MenuItem>Business and Finance</MenuItem>
                <MenuItem>Arts and Design</MenuItem>
                <MenuItem>Education and Training</MenuItem>
                <MenuItem>Information Technology</MenuItem>
                <MenuItem>Legal Services</MenuItem>
                <MenuItem>Trades and Services</MenuItem>
              </Select>
            </Box>

            <Box className="selectSubCategoryContainer">
              <Select
                fullWidth
                variant="outlined"
                displayEmpty
                MenuProps={menuProps}
                value={subcategory}
              >
                <MenuItem value="">Select sub category</MenuItem>
                <MenuItem>Doctors</MenuItem>
                <MenuItem>Nurses</MenuItem>
                <MenuItem>Pharmacists</MenuItem>
                <MenuItem>Dentists</MenuItem>
                <MenuItem>Physical Therapists</MenuItem>
                <MenuItem>Mental Health Professionals</MenuItem>
                <MenuItem>Dietitians and Nutritionists</MenuItem>
                <MenuItem>Alternative Medicine Practitioners</MenuItem>
              </Select>
            </Box>

            <Box className="searchBtnContainer">
              <Button variant="containedPrimary">Search</Button>
            </Box>
          </Box>
        </Box>
      )}

      {type === "filterAllCategory" && (
        <Box className={classes.filterContainer}>
          <Box className="filterFlexAll">
            <Box className="textfieldContainer">
              <TextField
                fullWidth
                variant="outlined"
                id="searchInput"
                onChange={handleInputChange}
                value={searchInput}
                placeholder="Search by category name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <img src="images/transaction_search.svg" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                variant="containedPrimary"
                className="searchbtn"
                onClick={handleSearchClick}

              >
                Search
              </Button>
            </Box>
          </Box>
        </Box>
      )}

      {type === "filterSubCategory" && (
        <Box className={classes.filterContainer} pt={3}>
          <Grid container spacing={2} className="subCategory">
            <Grid item xs={12} md={12} lg={6}>
              <Box className="textfieldContainer">
                <TextField
                  fullWidth
                  variant="filled"
                  placeholder="Search"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                          <img src="images/transaction_search.svg" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Box>
                <Select
                  fullWidth
                  variant="outlined"
                  displayEmpty
                  value={selectPrice}
                  className="selectTag"
                  MenuProps={menuProps}
                  onChange={handlePriceSelectChange}
                >
                  <MenuItem value="">Filter By Price</MenuItem>
                  <MenuItem value="lowToHigh">Price Low To High</MenuItem>
                  <MenuItem value="highToLow">Price High To Low</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Box className="searchBtnContainer">
                <Button variant="containedPrimary" fullWidth onClick={handleSubCategorySearchBtnClick}>
                  Search
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}

      {type === "myWallet" && (
        <Box className={classes.filterContainer}>
          <Box className={classes.filterFlex1}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={2}>
                <Box className="textfieldContainer" height="100%">
                  <Typography className="accountTextTitle">
                    Account Activities
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={5}>
                <Box className="textfieldContainer">
                  <FormControl fullWidth>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Search by Txn Hash"
                      value={accountSearch}
                      onChange={handleSearchChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconButton>
                              <img
                                src="images/transaction_search.svg"
                                alt="search"
                              />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                </Box>
              </Grid>
              {/* <Grid item xs={12} sm={6} md={4} lg={2}>
                <Box className="filterBox">
                  <FormControl fullWidth>
                    <Select
                      fullWidth
                      variant="outlined"
                      displayEmpty
                      value={category}
                      MenuProps={menuProps}
                    >
                      <MenuItem value="">Filter</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid> */}
              <Grid item xs={12} sm={6} md={2} lg={2}>
                <Box className="dates">
                  <FormControl fullWidth>
                    <KeyboardDatePicker
                      inputVariant="outlined"
                      id="date-picker-dialog"
                      fullWidth
                      format="MM/DD/yyyy"
                      placeholder="DD/MM/YYYY"
                      keyboardIcon={
                        <img src="images/activityDate.png" alt="" />
                      }
                      value={fromDate}
                      onChange={handleFromDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={2}>
                <FormControl fullWidth className="dates">
                  <KeyboardDatePicker
                    inputVariant="outlined"
                    id="date-picker-dialog"
                    format="MM/DD/yyyy"
                    placeholder="DD/MM/YYYY"
                    fullWidth
                    keyboardIcon={<img src="images/activityDate.png" alt="" />}
                    value={toDate}
                    onChange={onToDateChange}
                    name="toDate"
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={1}>
                <Box className="searchBtnBox">
                  <Button className="searchBtn" variant="containedPrimary">
                    Search
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
}
