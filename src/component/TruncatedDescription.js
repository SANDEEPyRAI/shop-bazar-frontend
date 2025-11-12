import React from "react";
import Typography from "@material-ui/core/Typography";

const MAX_DESCRIPTION_LENGTH = 50;

const TruncatedDescription = ({ description }) => {
  
  const truncatedDescription =
    description.length > MAX_DESCRIPTION_LENGTH
      ? description.substring(0, MAX_DESCRIPTION_LENGTH).trim() + "..."
      : description;

  return <Typography variant="h6" color="secondary">{truncatedDescription}</Typography>;
};

export default TruncatedDescription;