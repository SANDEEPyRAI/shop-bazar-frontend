import React, { useContext, useState } from "react";
import { Apple, Facebook } from "@material-ui/icons";
import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Axios from "axios";
import { apiConfig } from "src/apiconfig/ApiConfig";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import jwt_decode from "jwt-decode";
import { AuthContext } from "src/context/Auth";
export default function SocailLogin() {
  const history = useHistory();
  const auth = useContext(AuthContext)
  console.log(auth, "afewgreuw")
  // ******* google authenticatio **********//

  const responseGoogle = async (response) => {
    var token = response.credential;
    const decoded = jwt_decode(token);

    try {
      const [firstName, lastName] = decoded.name.split(' ');
      const creadentails = {
        email: decoded?.email,
        firstName: firstName,
        lastName: lastName,
        // name: decoded?.name,
        socialType: "Google",
        socialId: decoded?.sub,
      };
      const res = await Axios({
        method: "POST",
        url: apiConfig.socialLogin,
        data: creadentails,
      });
      if (res.data.responseCode === 200) {
        // toast.success(res.data.responseMessage);
        console.log(decoded, "decodeddd");
        auth?.checkLogin(res.data.result.token);
        auth?.getProfileData()
        // if(res?.data?.result?.token) {
        // }
        auth?.setIsLogin(true)
        window.sessionStorage.setItem("token", res.data.result.token);
        window.localStorage.setItem("token", res.data.result.token);
        history.push({
          pathname: "/profile",
        });
      }
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.responseMessage);
      } else {
        // toast.error(response.error);
      }
    }
  };

  return (
    <Box
    // style={{
    //   width: '100%',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // }}
    >
      <Grid
        container
        spacing={1}
      // style={{
      //   width: '100%',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center'
      // }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <GoogleOAuthProvider
            customStyle="custom-google-login-button"
            clientId="9202304500-ro7v3ne4ni467a9bthdve4p8om69ed62.apps.googleusercontent.com"
          >
            <GoogleLogin
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              text="Login with Google"
              theme="filled_blue"
              size="large"
              shape="rectangular"
              scope="profile email"
            />
          </GoogleOAuthProvider>
        </Grid>
      </Grid>
    </Box>
  );
}
