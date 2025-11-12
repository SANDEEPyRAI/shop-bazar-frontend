import React, { useEffect } from "react";
import { Container, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 0),
    backgroundColor: "#faf9f6",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(4),
    borderRadius: "20px",
    background: "linear-gradient(145deg, #fff 0%, #f8f5f0 100%)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    maxWidth: 500,
    textAlign: "center",
  },
  payNowBtn: {
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

const PaymentPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const { address, paymentMethod } = location.state || {};
  const amount = 150 * 100; // amount in paise (₹150)

  // Load Razorpay script dynamically
  const loadRazorpayScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    const res = await loadRazorpayScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // 🔑 Test key, replace with your Razorpay key
      amount: amount,
      currency: "INR",
      name: "My E-Commerce Store",
      description: "Order Payment",
      image: "https://yourstorelogo.com/logo.png",
      handler: function (response) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
        history.push("/"); // redirect to home after success
      },
      prefill: {
        name: address?.name || "Customer Name",
        email: "customer@example.com",
        contact: address?.phone || "9999999999",
      },
      notes: {
        address: `${address?.address || ""}, ${address?.city || ""}`,
      },
      theme: {
        color: "#C19A6B",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  useEffect(() => {
    if (!paymentMethod || paymentMethod !== "online") {
      history.push("/checkout");
    }
  }, [paymentMethod, history]);

  return (
    <div className={classes.root}>
      <Container>
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            Complete Your Payment
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Total Amount: <b>₹150</b>
          </Typography>

          <Button className={classes.payNowBtn} onClick={handleRazorpayPayment}>
            Pay Now
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default PaymentPage;
