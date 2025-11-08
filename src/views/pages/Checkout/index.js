import React, { useState } from "react";
import { Container, Grid, Typography, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import AddressForm from "./AddressForm";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 0),
    backgroundColor: "#faf9f6",
    minHeight: "100vh",
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(3),
    color: "#C19A6B",
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(3),
    borderRadius: "20px",
    background: "linear-gradient(145deg, #fff 0%, #f8f5f0 100%)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  placeOrderBtn: {
    marginTop: theme.spacing(3),
    borderRadius: "50px",
    background: "linear-gradient(275deg, #C19A6B 0%, #D4AF37 100%)",
    color: "#fff",
    padding: "12px 40px",
    fontWeight: 600,
    "&:hover": {
      background: "linear-gradient(275deg, #B8860B 0%, #FFD700 100%)",
      boxShadow: "0 0 12px rgba(212,175,55,0.5)",
    },
  },
}));

const CheckoutPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [address, setAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handlePlaceOrder = () => {
    // If online payment selected -> go to payment page
    if (paymentMethod === "online") {
      history.push({
        pathname: "/payment",
        state: { address, paymentMethod },
      });
    } else {
      alert("Order placed successfully with Cash on Delivery!");
      history.push("/");
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h4" className={classes.title}>
          Checkout
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
              <AddressForm onAddressChange={setAddress} />
              <PaymentMethod
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <OrderSummary />
              <Button
                fullWidth
                className={classes.placeOrderBtn}
                onClick={handlePlaceOrder}
              >
                {paymentMethod === "cod"
                  ? "Place Order (COD)"
                  : "Proceed to Payment"}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CheckoutPage;
