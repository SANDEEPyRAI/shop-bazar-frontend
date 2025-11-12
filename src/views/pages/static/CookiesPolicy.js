import {
  Box,
  Button,
  Container,
  Dialog,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles((theme) => ({
  CookiesPolicyContainer: {
    padding: "0 3%",
    "& .cookiesPolicy": {
      "& h2": {
        color: theme.palette.text.primary,
        fontSize: "40px",
        fontWeight: 600,
        marginBottom: "26px",
      },
      "& h3": {
        color: theme.palette.text.primary,
        marginBottom: "18px",
      },
      "& p": {
        color: theme.palette.primary.light,
        marginBottom: "22px",
      },
    },
    "& .loremIpsum": {
      color: theme.palette.primary.dark,
      "& h3": {
        fontWeight: 600,
        marginBottom: "20px",
      },
      "& p": {
        marginBottom: "27px",
      },
      "& ul, & ol": {
        paddingInlineStart: "17px",
        "& li": {
          "& p": {
            color: theme.palette.primary.light,
            marginBottom: "16px",
          },
        },
      },
    },
  },
  DialogBoxCookies: {
    "& .MuiDialog-paperWidthXs": {
      maxWidth: "496px",
    },
    "& svg": {
      color: "rgba(32, 33, 35, 0.51)",
      cursor: "pointer",
    },
    "& .DialogContentC": {
      padding: "10px 11px 30px 30px",
      "& h5": {
        color: "#000",
        fontWeight: 400,
        marginBottom: "20px",
      },
      "& p": {
        color: theme.palette.primary.light,
        marginBottom: "20px",
      },
      "& .btnCookieDialog": {
        gap: "14.09px",
      },
      "& .MuiButton-containedPrimary": {
        height: "58px",
        borderRadius: "50px",
        width: "50%",
        fontSize: "16px",
      },
      "& .MuiButton-outlinedPrimary": {
        border: `1.5px solid ${theme.palette.primary.main}`,
        height: "58px",
        borderRadius: "50px",
        width: "50%",
        fontSize: "16px",
        color: theme.palette.primary.main,
        "&:hover": {
          background: "transparent",
        },
      },
    },
  },
}));
const CookiesPolicy = () => {
  const classes = useStyles();
  const [cookiesOpen, setCookiesOpen] = useState(true);
  const history = useHistory();

  const handleDialogClose = () => {
    setCookiesOpen(false);
  };
  return (
    <Box className={classes.CookiesPolicyContainer}>
      <Box className="cookiesPolicy" mt={8}>
        <Typography variant="h2">Our Cookies Policy</Typography>
        <Typography variant="body2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
        <Typography variant="body2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
        <Typography variant="body2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.It
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
      </Box>

      <Box className="loremIpsum">
        <Typography variant="h3">What Is Lorem Ipsum</Typography>
        <Typography variant="body2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed like readable English.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
          </li>
        </ul>
      </Box>

      <Box className="cookiesPolicy">
        <Typography variant="h3">Where does it come from?</Typography>
        <Typography variant="body2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.It
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
        <Typography variant="body2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.It
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
      </Box>
      <Box className="loremIpsum">
        <Typography variant="h3">Where can I get some?</Typography>
        <Typography variant="body2">
          You as a parent/guardian expressly acknowledge and undertake that:
        </Typography>
        <ol>
          <li>
            <Typography variant="body2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed like readable English.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed like readable English.
            </Typography>
          </li>
        </ol>
      </Box>

      <Dialog
        open={cookiesOpen}
        onClose={handleDialogClose}
        className={classes.DialogBoxCookies}
        maxWidth="xs"
        fullWidth
      >
        <Box className="DialogContentC">
          <Box className="displayEnd">
            <CloseOutlined onClick={handleDialogClose} />
          </Box>
          <Typography variant="h5">We value your Privacy</Typography>
          <Typography variant="body2" className="descDialog">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used.In publishing and graphic design, Lorem ipsum is a
            placeholder text is a commonly fine to the used.Lorem ipsum is a
            placeholder text is a commonly fine to the ipsum is a placeholder
            text ipsum is a placeholder text used.
          </Typography>
          <Box className="displayStart btnCookieDialog">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleDialogClose}
            >
              Deny Cookies
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDialogClose}
            >
              Allow Cookies
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default CookiesPolicy;
