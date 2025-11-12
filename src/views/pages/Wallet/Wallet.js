import {
  Accordion,
  Box,
  Button,
  Dialog,
  DialogActions,
  Divider,
  Input,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import React, { useState, useEffect, useContext } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { RiShareFill } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { BsDash, BsPlus } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { transactiontabledataWallet } from "src/utils";
import FilterComponent from "src/component/FilterComponent";
import CopyToClipboard from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { apiConfig } from "src/apiconfig/ApiConfig";
import axios from "axios";
import { AuthContext } from "src/context/Auth";
import DataLoader from "src/component/DataLoader";
import moment from "moment";
import QRCode from "qrcode.react";
import PaginationComponent from "src/component/PaginationComponent";
import QrCodeComp from "../Profile/QRCodeComp";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonLink: {
    display: 'flex',
    alignItems:"center", 
    [theme.breakpoints.down("xs")]: {
      flexDirection:"column",
      alignItems:"start",
    },
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  MainBox: {
    "& .filtersection":{
      marginTop:'46px',
      [theme.breakpoints.down('xs')]:{
        marginTop:'35px',
      }
    },

    "& .mainDivBox": {
      display: "flex",
      justifyContent: "space-between",
      "@media (max-width:600px)": {
        display: "none",
        // flexDirection: "column",
      },

    },
    "& .NoDataClass": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    "& .subBox": {
      display: "flex",
      flexDirection: "column",
      fontWeight: 700,
      lineHeight: "normal",
      fontFamily: "Roboto Condensed",
      width: "100%",
      maxWidth: "808px",
    },
    "& .mainTypo": {
      width: "100%",
      maxWidth: "95px",
      color: "#262626",
      marginBottom: "5px",
    },
    "& .subTypo": {
      fontSize: "14px",
      color: "#636880",
    },

    "& .subBoxContainer": {
      display: "flex",
      justifyContent: "space-between",
      "@media (max-width:1050px)": {
        display: "flex",
        flexDirection: "column",
      },

      "& .walletWrapper": {
        background: "url(images/walletBackgournd2.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        boxSizing: "border-box",
        maxWidth: "450px",
        width: "100%",
        maxHeight: "270px",
        height: "100%",
        padding: "25px",
        overflow: "hidden",
        borderRadius: "15px",
      },
    },
    "& .boxTwo": {
      paddingTop: "120px",
      "@media (max-width:960px)": {
        paddingTop: "30px",
      },
      
      [theme.breakpoints.down("xs")]:{
        paddingTop:'28.5px',
      },
      
      "& .iconBtn1": {
        border: "1px solid rgba(231, 231, 231, 1)",
        borderRadius: "0px",
        height: "40px",
        padding: '0 12px',
        fontSize:'14px',
        lineHeight:'normal',
        fontWeight:'400',
        margin:'5px 8px 5px auto',
        minWidth:'134px',
        "@media(min-width:600px)": {
          display:'none',
          padding: '0 14px',
        },
      },
    },
    "& .MuiButton-root": {
      padding: "6px 5px",
      minWidth: "auto",
    },
    "& .btnInput": {
      width: "100%",
      maxWidth: "494px",
      height: "50px",
      border: "1px solid rgba(231, 231, 231, 1)",
      padding: "0px 0px 0px 20px",
      borderRadius: "10px",
      "& .MuiInputBase-input": {
        color: theme.palette.primary.main,
        fontSize: "18px",
      },
    },
    "& .arrorForword": {
      color: "rgba(0, 0, 0, 1)",
    },
    "& .dividerLine": {
      marginTop: "10px",
    },
    "& .walletImage": {
      borderRadius: "35px",
      padding: "20px 0px",
      width: "100%",
      maxWidth: "449px",
    },
    "& .btnGyanCoin": {
      color: "rgba(8, 86, 204, 1)",
      border: "1px solid rgba(231, 231, 231, 1)",
      borderRadius: "100px",
      height: "44px",
      width: "100%",
      maxWidth: "185px",
      fontSize: "16px",
      fontWeight: 400,
      "& .MuiButton-label": {
        // gap: "10px",f
        whiteSpace: "nowrap",
      },
    },
    "& .iconBtn": {
      border: "1px solid rgba(231, 231, 231, 1)",
      borderRadius: "0px",
      height: "40px",
      padding: '0 14px'
    },
    "& .MuiOutlinedInput-adornedStart": {
      paddingLeft: '5px'
    },
    "& .icon": {
      background: "transparent",
      "& .MuiAccordionSummary-expandIcon.Mui-expanded ": {
        transform: "rotate(90deg)",
      },
    },
    "& .accordanDetails": {
      padding: "10px",
    },
    "& .MuiPaper-elevation1": {
      padding: "0px",
    },
  },
  tableMainContainer:{
    overflowX:'scroll',
  },
  tableMain: {
    marginTop: "10px",
  },
  btnHeading: {
    fontWeight: 700,
    // padding: "20px 0px",
    display: "flex",
    justifyContent: "center",
    color: "rgba(0, 0, 0, 0.87)",
  },
  crossIcon: {
    position: "absolute",
    right: "20px",
  },
  btnBox: {
    width: "100%",
    maxWidth: "165px",
    marginTop: "10px",
  },
  accordion: {
    padding: "0px",
    border: "1px solid rgba(231, 231, 231, 1)",
    background: "transparent",
    backgroundColor: "transparent",
    margin: "0 20px 20px 20px",
  },
  heading: {
    color: "rgba(38, 38, 38, 1)",
  },
  subHeadings: {
    color: "rgba(38, 38, 38, 1)",
    padding: "20px",
  },
  overview: {
    fontWeight: 400,
    padding: "0 20px 20px",
  },
  overviewpara: {
    fontWeight: 400,
    fontSize: "14px",
    padding: "0 20px 20px",
  },

  DialogMainBox: {
    width: "100%",
    maxWidth: "512px",
    padding: "20px 30px 50px 30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    "& .closeIcon": {
      cursor: "pointer",
      textAlign: "end",
    },
    "& .mainHeading": {
      fontSize: "20px",
      fontWeight: 700,
      color: "rgba(0, 0, 0, 0.87)",
      textAlign: "center",
    },
    "& .firstBox": {
      display: "flex",
      justifyContent: "space-between",
    },
    "& .boxInsideBox": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    "& .GCCCC": {
      fontWeight: 500,
      color: "rgba(38, 38, 38, 1)",
    },
    "& .timedata": {
      fontSize: "14px",
      color: "rgba(38, 38, 38, 1)",
    },
    "& .lorem": {
      fontSize: "14px",
      color: "rgba(99, 104, 128, 1)",
    },
    "& .signUp": {
      color: "rgba(38, 38, 38, 1)",
    },
    "& .receivedTitle": {
      color: "rgba(38, 38, 38, 1)",
      fontSize: "16px",
      textAlign: "end",
    },
    "& .received": {
      color: "rgba(38, 38, 38, 1)",
      fontSize: "16px",
    },
    "& .trsnHash": {
      color: "rgba(8, 86, 204, 1)",
      fontSize: "16px",
    },
  },
}));

const accordionData = [
  {
    title: "Member Level Benefits",
    content:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque nec nunc amet vitae lobortis. Mattis adipiscing faucibus dignissim posuere consequat cursus nibh metus ullamcorper. Phasellus nisi id ornare venenatis. At ligula lobortis ultrices sit eget integer eleifend velit.Lorem ipsum dolor sit amet consectetur. Scelerisque nec nunc amet vitae lobortis. Mattis adipiscing faucibus dignissim posuere consequat cursus nibh metus ullamcorper. Phasellus nisi id ornare venenatis. At ligula lobortis ultrices sit eget integer eleifend velit.",
  },
  {
    title: "Earn Gyan Coins",
    content:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque nec nunc amet vitae lobortis. Mattis adipiscing faucibus dignissim posuere consequat cursus nibh metus ullamcorper. Phasellus nisi id ornare venenatis. At ligula lobortis ultrices sit eget integer eleifend velit.Lorem ipsum dolor sit amet consectetur. Scelerisque nec nunc amet vitae lobortis. Mattis adipiscing faucibus dignissim posuere consequat cursus nibh metus ullamcorper. Phasellus nisi id ornare venenatis. At ligula lobortis ultrices sit eget integer eleifend velit.",
  },
  {
    title: "Redeem Cyan Coins",
    content:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque nec nunc amet vitae lobortis. Mattis adipiscing faucibus dignissim posuere consequat cursus nibh metus ullamcorper. Phasellus nisi id ornare venenatis. At ligula lobortis ultrices sit eget integer eleifend velit.Lorem ipsum dolor sit amet consectetur. Scelerisque nec nunc amet vitae lobortis. Mattis adipiscing faucibus dignissim posuere consequat cursus nibh metus ullamcorper. Phasellus nisi id ornare venenatis. At ligula lobortis ultrices sit eget integer eleifend velit.",
  },
  {
    title: "Member Level Benefits",
    content:
      "Lorem ipsum dolor sit amet consectetur. Scelerisque nec nunc amet vitae lobortis. Mattis adipiscing faucibus dignissim posuere consequat cursus nibh metus ullamcorper. Phasellus nisi id ornare venenatis. At ligula lobortis ultrices sit eget integer eleifend velit.Lorem ipsum dolor sit amet consectetur. Scelerisque nec nunc amet vitae lobortis. Mattis adipiscing faucibus dignissim posuere consequat cursus nibh metus ullamcorper. Phasellus nisi id ornare venenatis. At ligula lobortis ultrices sit eget integer eleifend velit.",
  },
];

const Wallet = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [hashData, setHashData] = useState(
    "3f928dc13f928dc13f928dc13f928dc1dc13f928dc13f928dc1...20ddfas"
  );
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const [open, setOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [data, setData] = useState({});
  const [transactionData, setTransactionData] = useState({});
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [noOfPagesTransaction, setNoOfPagesTransaction] = useState(1);
  const [pagesTransaction, setPagesTransaction] = useState(1);
  const [isCopied, setIsCopied] = useState(false);

  const auth = useContext(AuthContext);
  const myProfileData = auth?.profileData;
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null);
  };

  const handleDialogBoxOpen = (transaction) => {
    setSelectedTransaction(transaction);
    setOpen(true);
  };
  const handleDialogBoxClose = () => {
    setOpen(false);
  };

  const GetUserAmount = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.userBalance,
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      if (res.data.responseCode === 200) {
        setData(res?.data?.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTransactionHistory = async () => {
    setIsLoading(true);
    try {
      const res = await axios({
        method: "GET",
        url: apiConfig.transaction,
        headers: {
          token: localStorage.getItem("token"),
        },
        params: {
          page: page,
          search: search !== "" ? search : undefined,
          fromDate: fromDate,
          fromDate: fromDate
            ? moment(fromDate).format("YYYY-MM-DDT00:00").toString()
            : undefined,
          toDate: toDate
            ? moment(toDate).format("YYYY-MM-DDT11:59").toString()
            : undefined,
          limit: limit,
        },
      });
      if (res.data.responseCode === 200) {
        setTransactionData(res?.data?.responseResult);
        setIsLoading(false);
        setNoOfPages(res?.data?.responseResult?.pagination?.totalPages);
        setPage(res?.data?.responseResult?.pagination?.page);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    GetUserAmount();
  }, [localStorage.getItem("token")]);

  useEffect(() => {
    getTransactionHistory();
  }, [noOfPages, limit, fromDate, toDate, search, page]);

  const handleSearchChange = (query) => {
    setSearch(query);
  };

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };
  const handleToDateChange = (date) => {
    setToDate(date);
  };

  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrevious = () => {
    setPage(page - 1);
  };

  const handleCopy = (hashCode) => {
    navigator.clipboard.writeText(hashCode);
    setIsCopied(true);
    toast.success("Copied");
    setTimeout(() => setIsCopied(false), 2000);
  };


  const iconStyles = {
    background: "rgba(8, 86, 204, 1)",
    color: "white",
    fontSize: "25px",
    padding: "12px 12px 12px 20px",
    borderRadius: "0 10px 10px 0",
    cursor: "pointer",
  };
  return (
    <Box className={classes.MainBox}>
      <Box className="mainDivBox">
        <Box className="subBox">
          <Typography variant="h4" className="mainTypo">
            My Wallet
          </Typography>
          <Typography variant="h6" className="subTypo">
            Stay in control of all your financial interactions with Gyan Batua's
            'My Wallet' section on your dashboard. This powerful tool allows you
            to monitor your account balance, review transactions, and manage
            your earnings efficiently.
          </Typography>
        </Box>
        <Box className={classes.btnBox}>
          <Button
            endIcon={<FaArrowRight className="arrorForword" />}
            className="btnGyanCoin"
            onClick={handleDialogOpen}
          >
            GyanCoin Benefits
          </Button>
        </Box>

        <Dialog
          open={openDialog}
          onClose={handleDialogClose}
          maxWidth="sm"
          fullWidth
        >
          <DialogActions
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography className={classes.btnHeading} variant="h5">
              GyanCoin Benefits
            </Typography>
            <Button
              onClick={handleDialogClose}
              className={classes.crossIcon}
              color="primary"
            >
              <RxCross1 />
            </Button>
          </DialogActions>
          <Divider className="dividerLine" />
          <Typography className={classes.subHeadings} variant="h5">
            {" "}
            GYANCOIN BENEFITS
          </Typography>
          <Typography className={classes.overview} variant="h5">
            {" "}
            Overview
          </Typography>
          <Typography className={classes.overviewpara} variant="body2">
            Lorem ipsum dolor sit amet consectetur. Scelerisque nec nunc amet
            vitae lobortis. Mattis adipiscing faucibus dignissim posuere
            consequat cursus nibh metus ullamcorper. Phasellus nisi id ornare
            venenatis. At ligula lobortis ultrices sit eget integer eleifend
            velit.Lorem ipsum dolor sit amet consectetur. Scelerisque nec nunc
            amet vitae lobortis. Mattis adipiscing faucibus dignissim posuere
            consequat cursus nibh metus ullamcorper. Phasellus nisi id ornare
            venenatis. At ligula lobortis ultrices sit eget integer eleifend
            velit.
          </Typography>
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              className={classes.accordion}
              expanded={expandedAccordion === `panel${index + 1}`}
              onChange={handleAccordionChange(`panel${index + 1}`)}
            >
              <AccordionSummary
                className="icon"
                expandIcon={
                  expandedAccordion === `panel${index + 1}` ? (
                    <BsDash />
                  ) : (
                    <BsPlus />
                  )
                }
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <Typography variant="h5" className={classes.heading}>
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" className="accordanDetails">
                  {item.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Dialog>
      </Box>
      <Divider className="dividerLine" />
      <Box className="subBoxContainer" mt={2}>
        <Grid container className="displaySpacebetween">
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box className="walletWrapper">
              <Box className="displaySpacebetween">
                <Box>
                  <Typography variant="body2" style={{ color: "#fff" }}>
                    My Blockchain Digital ID{" "}
                  </Typography>

                  <Box
                    style={{
                      marginTop: "12px",
                      height: "100%",
                      width: "100%",
                      maxWidth: "100px",
                      maxHeight: "100px",
                      position: "relative",
                    }}
                  >
                    {/* <QRCode
                      value={myProfileData?.hashCode}
                      size={108}
                      level="H"
                      includeMargin={true}
                    /> */}
                    <QrCodeComp
                      qrCodeSize={100}
                      value={`https://web-gyantraining.mobiloitte.io/scanCode?${auth.profileData.hashCode}`}
                    />
                    {/* <img
                      src="images/IndBag.png"
                      alt="bag"
                      style={{
                        position: "absolute",
                        top: "35%",
                        left: "38%",
                        height: "30px",
                        width: "30px",
                      }}
                    /> */}
                  </Box>
                </Box>
                <Box>
                  <Typography
                    className={classes.name}
                    color="textPrimary"
                    gutterBottom
                    variant="body2"
                    style={{
                      color: "#fff",
                      fontWeight: "500",
                      wordBreak: "break-all",
                      textAlign: "end",
                    }}
                  >
                    {myProfileData?.firstName ? myProfileData.firstName : ""}
                  </Typography>
                  <Typography
                    variant="h1"
                    style={{ color: "#fff", textAlign: "end" }}
                  >
                    {
                      data?.amount !== undefined && Object.keys(data.amount).length > 0
                        ? data.amount
                        : 0
                    }
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "#fff", textAlign: "end" }}
                  >
                    GC
                  </Typography>
                </Box>
              </Box>
              <Box mt={3} style={{ display: "flex", alignItems: "center" }}>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h6"
                  noWrap={true}
                  style={{ color: "#fff", fontSize: "25px" }}
                >
                  {myProfileData?.hashCode
                    ? `${myProfileData.hashCode.slice(
                      0,
                      20
                    )}...${myProfileData.hashCode.slice(-4)}`
                    : "--"}
                </Typography>
                <CopyToClipboard
                  // text={user?.hashCode}
                  style={{
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginLeft: "10px",
                  }}
                >
                  <FiCopy onClick={() => toast.success("Copied")} />
                </CopyToClipboard>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            lg={5}
            md={6}
            sm={12}
            xs={12}
            className={classes.gridItem} 
        
          >
            <Box className="boxTwo">
              <Box>
                <Input
                  placeholder="3f928dc1...20ddfas"
                  className="btnInput"
                  value={
                    myProfileData?.hashCode
                      ? `${myProfileData.hashCode.slice(
                        0,
                        40
                      )}...${myProfileData.hashCode.slice(-4)}`
                      : "--"
                  }
                  disableUnderline
                  endAdornment={
                    <>
                    <InputAdornment position="end">
                    <Hidden xsDown>
                      <MdContentCopy
                        style={iconStyles}
                        onClick={() => handleCopy(myProfileData?.hashCode)}
                      />
                      </Hidden>
                    </InputAdornment>
                    
                    
                      <Button className="iconBtn1" startIcon={<RiShareFill />}>
                        Share QR Code
                      </Button>
                    
                    
                    </>
                  }
                />
              </Box>

              <Box mt={1.5} className={classes.buttonLink}>
              <Hidden xsDown>
                <Button className="iconBtn" startIcon={<RiShareFill />}>
                  Share QR Code
                </Button>
              </Hidden>
              
                <Box>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/gyaanbatua/",
                        "_blank"
                      )
                    }
                  >
                    <img src="images/walletFacebook.png" alt="Facebook" />
                  </Button>
                  <Button
                    onClick={() =>
                      window.open("https://twitter.com/GyanBatua", "_blank")
                    }
                  >
                    <img src="images/walletTwitter.png" alt="Twitter" />
                  </Button>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/gyanbatua/",
                        "_blank"
                      )
                    }
                  >
                    <img src="images/walletInsta.png" alt="Instagram" />
                  </Button>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/gyan-batua/",
                        "_blank"
                      )
                    }
                  >
                    <img src="images/walletLinkedIn.png" alt="LinkedIn" />
                  </Button>
                  <Button
                    onClick={() =>
                      window.open("https://www.youtube.com/@gyanbatua", "_blank")
                    }
                  >
                    <img src="images/walletYoutube.png" alt="YouTube" />
                  </Button>
                  <Button
                    onClick={() =>
                      window.open("https://in.pinterest.com/GyanBatua/", "_blank")
                    }
                  >
                    <img src="images/walletPintrest.png" alt="Pinterest" />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="filtersection">
        <FilterComponent
          type="myWallet"
          accountSearch={search}
          onSearchChange={handleSearchChange}
          toDate={toDate}
          fromDate={fromDate}
          onFromDateChange={handleFromDateChange}
          onToDateChange={handleToDateChange}
        />
      </Box>

      <Box className={classes.tableMainContainer}>
        <Table className={classes.tableMain}>
          <TableHead>
            <TableRow>
              {[
                "Date & Time",
                "Description",
                "Txn Hash",
                "Verified",
                "Amount",
                "Action",
              ].map((item, i) => (
                <TableCell
                  key={i}
                  style={{ background: "rgba(72, 73, 73, 1)", color: "#fff" }}
                >
                  <Typography variant="body2" className="tableTitle">
                    {item}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} style={{ textAlign: "center" }}>
                  <DataLoader />
                </TableCell>
              </TableRow>
            ) : (
              transactionData?.transactions?.map((value, i) => (
                <TableRow key={i}>
                  <TableCell>
                    {moment(value.transactionDate).format("DD/MMM/YYYY, hh:mm A")}
                  </TableCell>
                  <TableCell>
                    {value?.comment ? value.comment.slice(0, 20) + "..." : ""}
                  </TableCell>
                  <TableCell style={{ color: "#0856CC" }}>
                    {value?.transactionHash
                      ? `${value.transactionHash.slice(
                        0,
                        20
                      )}...${value.transactionHash.slice(-6)}`
                      : ""}
                  </TableCell>
                  <TableCell>
                    {value?.transactionStatus === "SUCCESS" ? "YES" : "NO"}
                  </TableCell>
                  <TableCell>{value?.amount ? value?.amount : 0}</TableCell>
                  <TableCell>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDialogBoxOpen(value)}
                    >
                      <Button
                        style={{ color: "#0856CC", textTransform: "none" }}
                        onClick={() => handleDialogBoxOpen(value)}
                      >
                        View
                      </Button>
                      <img
                        src="/images/viewAction.png"
                        alt="View Icon"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
          <Dialog
            open={open}
            onClose={handleDialogBoxClose}
            className={classes.dialoguebox}
          >
            <Box className={classes.DialogMainBox}>
              <DialogActions
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography className={classes.btnHeading} variant="h5">
                  Transactions Detail
                </Typography>
                <Button
                  onClick={handleDialogBoxClose}
                  className={classes.crossIcon}
                  color="primary"
                >
                  <RxCross1 />
                </Button>
              </DialogActions>
              <Divider />
              <Box className="firstBox">
                <Box className="boxInsideBox">
                  <Typography className="timedata" variant="body2">
                    14/Apr/2021, 01:43 PM
                  </Typography>
                  <Typography className="signUp" variant="h5">
                    Sign up Welcome Bonus
                  </Typography>
                </Box>
                <Box>
                  <Typography className="GCCCC" variant="h2">
                    100 GC
                  </Typography>
                  <Typography className="receivedTitle" variant="body2">
                    Received
                  </Typography>
                </Box>
              </Box>
              <Divider />
              <Typography className="received" variant="body2">
                Discriptions
              </Typography>
              <Typography className="lorem" variant="body2">
                Lorem ipsum dolor sit amet consectetur. Scelerisque nec nunc amet
                vitae lobortis. Mattis adipiscing faucibus dignissim posuere
                consequat cursus nibh metus ullamcorper. Phasellus nisi id ornare
                venenatis.
              </Typography>
              <Typography className="received" variant="body2">
                Txn Hash:
              </Typography>
              <Typography className="trsnHash" variant="body2">
                0xc3709e0ff9c5a7c30410f7cf9239
              </Typography>
            </Box>
          </Dialog>
        </Table>
      </Box>

      {!isLoading &&
        transactionData?.transactions &&
        transactionData?.transactions.length === 0 && (
          <Box className="NoDataClass" mt={4}>
            <img
              src="images/NaDataimg.png"
              alt=""
              style={{ height: "100px", width: "100px" }}
            />
            <Typography
              variant="body1"
              style={{
                marginTop: "10px",
                textAlign: "center",
                fontSize: "18px",
              }}
            >
              No Data Found
            </Typography>
          </Box>
        )}

      {!isLoading && transactionData && noOfPages > 1 && (
        <PaginationComponent
          count={noOfPages}
          page={page}
          onChange={(e, value) => setPage(value)}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      )}
    </Box>
  );
};
export default Wallet;
