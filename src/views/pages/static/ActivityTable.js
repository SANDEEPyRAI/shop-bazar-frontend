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
      whiteSpace: "nowrap",
    },
    "& .MuiTableCell-body": {
      color: "#262626",
    },
    "& .mechanical": {
      "& h6": {
        color: "#262626",
        fontWeight: 500,
      },
    },
    "& .floorPr , & .gray": {
      color: "#0856CC",
    },
    "& .from": {
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
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "02",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "03",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "04",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "05",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "06",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "07",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "08",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "09",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "10",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },

  {
    rank: "11",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "12",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "13",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "14",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "15",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "16",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "17",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "18",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "19",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
  {
    rank: "20",
    image: <img src="images/Mechanical.png" alt="" />,
    packageName: "Mechanical Engineering",
    floorPrice: "2,900 RS",
    volume: "482/1000",
    rarity: "#294",
    from: "leslevresdenini",
    to: "--",
    time: "2m ago",
  },
];

const TrendingTable = () => {
  const classes = useStyles();
  return (
    <Box className={classes.TrendingTableContainer}>
      <CustomTable tableData={tableData} />
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
            {[
              "#",
              "Packages",
              "Floor Price",
              "Volume",
              "Rarity",
              "From",
              "To",
              "Time",
            ].map((header, i) => (
              <TableCell align={i === 1 ? "left" : "center"} key={i} style={{ width: i === 1 ? 275 : "auto" }}>
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
              <TableCell variant="h6" align="center">
                {row?.rarity}
              </TableCell>
              <TableCell variant="h6" align="center" className="from">
                {row?.from}
              </TableCell>
              <TableCell variant="h6" align="center">
                {row?.to}
              </TableCell>
              <TableCell variant="h6" align="center">
                {row?.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
