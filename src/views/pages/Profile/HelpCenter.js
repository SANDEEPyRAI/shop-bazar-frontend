import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const HelpCenter = () => {
  const faqs = [
    {
      q: "How can I track my order?",
      a: "You can track it from 'My Orders' section.",
    },
    {
      q: "How to change my password?",
      a: "Go to Security Settings and update password.",
    },
    {
      q: "How can I return a product?",
      a: "Visit 'My Orders' and select 'Return' option.",
    },
  ];

  return (
    <Box>
      <Typography variant="h6" style={{ color: "#C19A6B", fontWeight: 700 }}>
        Help Center
      </Typography>
      <Box mt={2}>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{faq.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary">{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default HelpCenter;
