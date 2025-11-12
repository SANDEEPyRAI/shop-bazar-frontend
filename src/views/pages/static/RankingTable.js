import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  TrendingTableContainer: {
    "& .MuiTableCell-head": {
      color: "#636880",
      fontSize: "16px",
      fontWeight: "400",
      background: theme.palette.background.default,
      borderBottom: "1px solid #E8E8E8",
      whiteSpace:'nowrap',
    },
    "& .MuiTableCell-body": {
      color: "#262626",
    },
    "& .mechanical": {
      "& h6": {
        color: "#262626",
      },
    },
    "& .floorPr , & .gray": {
      color: "#0856CC",
    },
  },
}));

const tableData = [
  {
    rank: "01",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "02",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "03",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "04",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "05",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "06",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "07",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "08",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "09",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "10",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },

  {
    rank: "11",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "12",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "13",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "14",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "15",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "16",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "17",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "18",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "19",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
  {
    rank: "20",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
  },
];

const tableData1 = [
    {
        rank: "21",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "22",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "23",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "24",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "25",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "26",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "27",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "28",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "29",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "30",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
    
      {
        rank: "31",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "32",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "33",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "34",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "35",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "36",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "37",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "38",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "39",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
      {
        rank: "40",
        image: <img src="images/Mechanical.png" alt="" />,
        packageName: "Mechanical Engineering",
        floorPrice: "2,900 RS",
        volume: "482/1000",
      },
];

const TrendingTable = () => {
  const classes = useStyles();
  return (
    <Box className={classes.TrendingTableContainer}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <CustomTable tableData={tableData} />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <CustomTable tableData={tableData1} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrendingTable;

const CustomTable = ({ tableData }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {["Rank", "Packages", "Floor Price", "Volume"].map((header, i) => (
              <TableCell align={i === 1 ? "left" : "center"} key={i}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="center">{row?.rank}</TableCell>
              <TableCell align="left">
                <Box className="displayStart mechanical" gridGap={27}>
                  {row?.image}
                  <Typography variant="h6">{row?.packageName}</Typography>
                </Box>
              </TableCell>
              <TableCell align="center" className="floorPr">
                {row?.floorPrice}
              </TableCell>
              <TableCell align="center" className="volume">
                <span className="green">{row?.volume.split("/")[0]}</span>/
                <span className="gray">{row?.volume.split("/")[1]}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
