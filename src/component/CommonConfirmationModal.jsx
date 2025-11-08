import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ButtonCircularProgress from "./ButtonCircularProgress";
import toast from "react-hot-toast";


const useStyles = makeStyles((theme) => ({
  RemoveCartContainer: {
    "& .btnsContainer": {
      width: "100%",
      "& button": {
        width: "100%",
        maxWidth: "156px",
        fontWeight: 400,
        fontFamily: "Public Sans",
      },
    },
    "& .inside": {
      padding: "0 10px",
      "& .allContainer": {
        width: "100%",
        maxWidth: "207px",
      },
      "& .removeSure": {
        color: "rgba(99, 104, 128, 1)",
        textAlign: "center",
        marginBottom: "45px",
      },
    },
    "& .topImage": {
      position: "relative",
      height: "100px",
      textAlign: "center",
      marginTop: "25px",
    },
    "& .remove": {
      color: "rgba(240, 27, 40, 0.87)",
      textAlign: "center",
      margin: "15px 0",
    },
    "& .MuiDialog-paperWidthSm": {
      width: "100%",
      maxWidth: "520px !important",
    },
  },
}));

const CommonConfirmationModal = ({
  type,
  buyCourseHandler,
  title,
  description,
  open,
  setOpen,
  isLoading,
}) => {
  const history = useHistory();
  const classes = useStyles();
  const [apiError, setApiError] = useState(false);

  
  const handleYesClick = async () => {
    try {
    
      const response = await buyCourseHandler();

  
      if (response.data.responseCode === 200) {
        setOpen(false);

        history.push("/subscription");
      } else {
        if (response.data && response.data.errorMessage) {
          toast.error(response.data.errorMessage);
        } else {
          toast.error("API request failed");
        }
  
        setApiError(true);
      }
    } catch (error) {
      
      setApiError(true);
    }
  };

  return (
    <Dialog
      open={open}
      className={classes.RemoveCartContainer}
      onClose={() => {
        if (!isLoading) {
          setOpen(false);
        }
      }}
    >
      <DialogContent>
        <Box className="displayColumnCenter inside">
          <Box className="allContainer">
            {type !== "buy" && (
              <Box className="topImage">
                <img src="images/Remover.png" alt="remove" />
              </Box>
            )}
            {/* <Typography variant="h5" className="remove">
           {title}
          </Typography> */}
            <Typography variant="body2" className="removeSure">
              {description}
            </Typography>
          </Box>
          <Box className="displayCenter btnsContainer" gridGap={13} mb={5.5}>
            <Button
              disabled={isLoading}
              variant="containedSecondary"
              onClick={() => setOpen(false)}
            >
              No
            </Button>
            <Button
              disabled={isLoading}
              variant="containedPrimary"
              onClick=
                {handleYesClick}
              
            >
              Yes {isLoading && <ButtonCircularProgress />}
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CommonConfirmationModal;
