import React, { useContext } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Delete, Add, Remove } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { CartContext } from "src/context/CartContext"; // ✅ import cart context

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: "#f7f7f7",
    minHeight: "100vh",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    borderRadius: 16,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  },
  productImage: {
    width: 100,
    height: 100,
    objectFit: "cover",
    borderRadius: 12,
    marginRight: theme.spacing(2),
  },
  quantityBox: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: 8,
    overflow: "hidden",
    width: 110,
  },
  qtyBtn: {
    minWidth: 36,
    height: 36,
    borderRadius: 0,
  },
  summaryBox: {
    background: "#fff",
    borderRadius: 16,
    padding: theme.spacing(3),
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  },
  checkoutBtn: {
    background: "linear-gradient(145deg, #C19A6B, #D4AF37)",
    color: "#fff",
    borderRadius: 50,
    padding: "12px 40px",
    fontWeight: 600,
    marginTop: theme.spacing(2),
    "&:hover": {
      background: "linear-gradient(145deg, #B8860B, #FFD700)",
    },
  },
  removeBtn: {
    color: "#681E65",
    "&:hover": { color: "#B8860B" },
  },
}));

const CartPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const { cartItems, addToCart, removeFromCart } = useContext(CartContext); // ✅ use context

  const handleQuantityChange = (id, type) => {
    const item = cartItems.find((i) => i.id === id);
    if (!item) return;

    if (type === "inc") {
      addToCart(item); // ✅ same function increases quantity
    } else if (type === "dec") {
      if (item.quantity > 1) {
        removeFromCart(id, true); // partial remove (if implemented)
      }
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <Box className={classes.root}>
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontWeight: 700, color: "#681E65" }}
      >
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography
          variant="h6"
          color="textSecondary"
          style={{ textAlign: "center", marginTop: "100px" }}
        >
          Your cart is empty 😔
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {/* Cart Items */}
          <Grid item xs={12} md={8}>
            {cartItems.map((item) => (
              <Box key={item.id} className={classes.cartItem}>
                <img
                  src={item.img}
                  alt={item.name}
                  className={classes.productImage}
                />

                <Box flexGrow={1}>
                  <Typography variant="h6">{item.name}</Typography>

                  <Box display="flex" alignItems="center" mt={1}>
                    <Box className={classes.quantityBox}>
                      <Button
                        className={classes.qtyBtn}
                        onClick={() => handleQuantityChange(item.id, "dec")}
                      >
                        <Remove />
                      </Button>
                      <Typography
                        style={{
                          flex: 1,
                          textAlign: "center",
                          fontWeight: 600,
                        }}
                      >
                        {item.quantity}
                      </Typography>
                      <Button
                        className={classes.qtyBtn}
                        onClick={() => handleQuantityChange(item.id, "inc")}
                      >
                        <Add />
                      </Button>
                    </Box>

                    <Typography
                      variant="h6"
                      style={{ marginLeft: 20, color: "#C19A6B" }}
                    >
                      $
                      {(
                        parseFloat(item.price.replace("$", "")) * item.quantity
                      ).toFixed(2)}
                    </Typography>
                  </Box>
                </Box>

                <IconButton
                  className={classes.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  <Delete />
                </IconButton>
              </Box>
            ))}
          </Grid>

          {/* Summary Section */}
          <Grid item xs={12} md={4}>
            <Box className={classes.summaryBox}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>

              <Divider style={{ margin: "10px 0" }} />

              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Subtotal</Typography>
                <Typography>${subtotal.toFixed(2)}</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Tax (8%)</Typography>
                <Typography>${tax.toFixed(2)}</Typography>
              </Box>

              <Divider style={{ margin: "10px 0" }} />

              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6" style={{ color: "#C19A6B" }}>
                  ${total.toFixed(2)}
                </Typography>
              </Box>

              <Button
                fullWidth
                className={classes.checkoutBtn}
                onClick={() => history.push("/checkout")}
              >
                PROCEED TO CHECKOUT
              </Button>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default CartPage;
