import React from "react";

const Logo = (props) => {
  return (
    <img
      src={
        props?.skillMarketPlaceRoute
          ? "/images/transparent_logo.png"
          : "/images/logo.png"
      }
      alt="Logo"
      {...props}
    />
  );
};

export default Logo;
