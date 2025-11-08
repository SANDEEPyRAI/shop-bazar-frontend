import React from "react";
import {
  makeStyles,
  Typography,
  Button,
  Select,
  MenuItem,
  ButtonGroup,
  Box,
  Divider,
  Container,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  resourceCenterContainer: {
    padding: "50px 0",

    "& h1": {
      fontSize: "60px",
      fontWeight: 700,
      lineHeight: "70.31px",
    },

    "& .subtext": {
      marginTop: "40px",
      "& h2": {
        fontWeight: 500,
        lineHeight: "38px",
      },

      "& p": {
        color: "rgba(38, 38, 38, 0.75)",
        lineHeight: "22px",
        maxWidth: "502px",
        marginTop: "20px",
      },
    },

    "& .cardsContainer": {
      marginTop: "30px",

      "& .card": {
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "364px",
        height: "567px",
        background: "#F0F0F0",
        borderRadius: "10px",
        padding: "30px",
        margin: "0 auto 20px auto",

        "& h4": {
          marginTop: "30px",
          textAlign: "center",
        },

        "& .textData": {
          textAlign: "center",
          "& h6": {
            margin: "10px 0",
          },

          "& .text": {
            fontSize: "18px",
            lineHeight: "22px",
            fontWeight: 400,
            color: "#3490E6",
          },

          "& span": {
            color: "#9D9D9D",
            lineHeight: "22px",
            fontWeight: 400,
          },
        },
      },

      "& .card.smallerHeight": {
        height: "490px",
      },
    },
  },
}));

const resorsesData = [
  {
    img: "/images/bulb.svg",
    title: "Learning Resources",
    text: [
      "Gyanbatua Wiki",
      "Khan Academy",
      "Let's Talk Gyanbatua",
      "Gyanbatua Knowledge Podcast",
      "WeUseCoins.com",
      "GyanbatuaMining.com",
      "IamSatoshi",
      "Gyanbatua Information & Educational Resources",
    ],
  },

  {
    img: "/images/copy_img.svg",
    title: "Directories",
    text: [
      "Wallets ",
      "Merchants",
      "Merchants",
      "Merchants",
      "Merchants",
      "Exchanges",
      "Exchanges",
      "Merchant tools",
      "Projects",
    ],

    subtext: [
      "Gyanbatua.org",
      "Gyanbatua.org",
      "Gyanbatua.com",
      "Gyanbatua.org",
      "spendabit.co",
      "99Bitcoins.com",
      " buybitcoinworldwide.com",
      "bitrawr.com",
      "en.bitcoin.it",
      "BitcoinProjects.net",
    ],
  },

  {
    img: "/images/pie_img.svg",
    title: "Learning Resources",
    text: [
      "Statoshi.info",
      "Bitaps.com",
      "BlockCypher",
      "mempool.space",
      "TradeBlock",
      "Bitcoincharts.com",
      "GoBitcoin.io",
      "BitcoinAverage",
    ],
  },

  {
    img: "/images/video_img.svg",
    title: "Learning Resources",
    text: [
      "Ulterior States",
      "The Bitcoin Phenomenon",
      "Bitcoin: Beyond The Bubble",
      "Magic Money: The Bitcoin Revolution",
      "Evolution of Bitcoin",
    ],
  },

  {
    img: "/images/voucher_img.svg",
    title: "Learning Resources",
    text: ["Bitrefill", "Fold", "Gyft", "Opendime"],
  },

  {
    img: "/images/video_img.svg",
    title: "Guides",
    text: ["ColdCard", "Bitcoiner.Guide", "Node.Guide"],
  },
];

export default function ResourceCenter() {
  const classes = useStyles();

  return (
    <div className={classes.resourceCenterContainer}>
      <Container maxWidth="lg">
        <Typography variant="h1" color="secondary">
          Resource Center
        </Typography>
        <Box className="subtext">
          <Typography variant="h2" color="secondary">
            Useful websites and resources about Gyanbatua
          </Typography>
          <Typography variant="body2">
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator.
          </Typography>
        </Box>

        <Box className="cardsContainer">
          <Grid container>
            {resorsesData.map((resource, i) => (
              <Grid item xs={12} sm={12} md={6} lg={4} key={i}>
                <Box className={`card ${i >= 3 ? "smallerHeight" : ""}`}>
                  <Box className="displayCenter">
                    <img src={resource.img} />
                  </Box>

                  <Typography variant="h4" color="secondary">
                    {resource.title}
                  </Typography>

                  <Box mt={5} className="textData">
                    {resource.text.map((item, j) => (
                      <Typography variant="h6" key={j} className="text">
                        {item}
                        {resource.subtext && resource.subtext[j] && (
                          <span> - {resource.subtext[j]}</span>
                        )}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
