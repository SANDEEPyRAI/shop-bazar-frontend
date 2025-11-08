import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";
import LoginLayout from "src/layouts/LoginLayout";
import DashboardLayout from "src/layouts/DashboardLayout";

import Partners from "src/views/pages/static/Partners/Partners";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/LandingPage/Index")),
  },

  {
    exact: true,
    path: "/shop",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Shop/index")),
  },
  {
    exact: true,
    path: "/shop/product/:slug",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Shop/ProductDetail")),
  },

  {
    exact: true,
    path: "/cart",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Cart/index")),
  },

  {
    exact: true,
    path: "/checkout",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Checkout/index")),
  },

  {
    exact: true,
    guard: true,
    path: "/change-password",
    layout: DashboardLayout,
    component: lazy(() =>
      import("src/views/pages/Auth/changepassword/Changepassword")
    ),
  },

  {
    exact: true,
    // guard: true,
    path: "/profile",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Profile/MyProfile")),
  },
  {
    exact: true,
    path: "/account/orders",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Profile/MyOrders")),
  },
  {
    exact: true,
    path: "/account/addresses",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Profile/Addresses")),
  },
  {
    exact: true,
    path: "/account/wishlist",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Profile/Wishlist")),
  },
  {
    exact: true,
    path: "/account/notifications",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Profile/Notifications")),
  },
  {
    exact: true,
    path: "/account/security-settings",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Profile/SecuritySettings")),
  },
  {
    exact: true,
    path: "/account/help-center",
    layout: DashboardLayout,
    component: lazy(() => import("src/views/pages/Profile/HelpCenter")),
  },

  // {
  //   exact: true,
  //   path: "/payment",
  //   layout: HomeLayout,
  //   component: lazy(() => import("src/views/pages/Checkout/PaymentPage")),
  // },

  {
    exact: true,
    path: "/payment",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Payment")),
  },

  {
    exact: true,
    path: "/login",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Auth/login")),
  },

  {
    exact: true,
    path: "/register",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Auth/signup/Signup")),
  },
  {
    exact: true,
    path: "/forgot-password",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/Auth/forgotPassword/ForgotPassword")
    ),
  },
  {
    exact: true,
    path: "/reset-password",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/Auth/forgotPassword/ResetPassword")
    ),
  },

  {
    exact: true,
    path: "/register-password",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/Auth/regipassword/regipassword")
    ),
  },

  {
    exact: true,
    // guard:true,
    path: "/verify-otp",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/Auth/otpverification/otpverify")
    ),
  },

  {
    exact: true,
    path: "/signup-verified",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/Auth/verification/Signupverify")
    ),
  },

  {
    exact: true,
    path: "/login-verified",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/Auth/verification/Loginverify")
    ),
  },

  {
    exact: true,
    path: "/blog",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/Blog/Blog")),
  },

  {
    exact: true,
    path: "/faq",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/FAQ/Faq")),
  },

  {
    exact: true,
    path: "/tax-and-fee",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/Taxes/Taxes")),
  },

  {
    exact: true,
    path: "/community",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/Community/Index")),
  },

  {
    exact: true,
    path: "/light-paper",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/LightPaper/LightPaper")
    ),
  },

  {
    exact: true,
    path: "/platform-specifics",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/LightPaper/PlatformSpecifics")
    ),
  },

  {
    exact: true,
    path: "/data-privacy",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/LightPaper/DataPrivacy")
    ),
  },

  {
    exact: true,
    path: "/white-paper",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/LightPaper/WhitePaper")
    ),
  },

  {
    exact: true,
    path: "/privacy-policy",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/PrivacyPolicy")),
  },

  {
    exact: true,
    path: "/terms-and-condition",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/TermsAndCondition")),
  },

  {
    exact: true,
    path: "/media",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/Media/Media")),
  },
  {
    exact: true,
    path: "/careers",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/Career/Career")),
  },
  {
    exact: true,
    path: "/contact-us",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/ContactUs")),
  },

  {
    exact: true,
    path: "/gyan-blog",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/Blog/BlogSecond")),
  },

  {
    exact: true,
    path: "/sub-category",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/Courses/SubCategory")),
  },
  {
    exact: true,
    path: "/partner-with-us",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/IAICOE/PartnerWithUS")),
  },
  {
    exact: true,
    path: "/about",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/IAICOE/AboutIAICOES")),
  },

  {
    exact: true,
    path: "/our-partner",
    layout: HomeLayout,

    component: lazy(() => import("src/views/pages/static/Partners/Partners")),
  },
  {
    exact: true,
    path: "/vits-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/VITSDetails")
    ),
  },
  {
    exact: true,
    path: "/bitg-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/BITGDetails")
    ),
  },
  {
    exact: true,
    path: "/bitm-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/BITMDetails")
    ),
  },
  {
    exact: true,
    path: "/dypv-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/DYPVDetails")
    ),
  },
  {
    exact: true,
    path: "/git-college",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/Partners/GITDetails")),
  },
  {
    exact: true,
    path: "/ghrcem-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/GHRCEMDetails")
    ),
  },
  {
    exact: true,
    path: "/haridev-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/HJUJMCDetails")
    ),
  },
  {
    exact: true,
    path: "/itm-college",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/Partners/ITMDetails")),
  },
  {
    exact: true,
    path: "/mpgi-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/MPGIDetails")
    ),
  },
  {
    exact: true,
    path: "/mmmitp-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/MMMITPDetails")
    ),
  },
  {
    exact: true,
    path: "/mauj-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/MAUJDetails")
    ),
  },
  {
    exact: true,
    path: "/pitj-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/PITJDetails")
    ),
  },
  {
    exact: true,
    path: "/puj-college",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/Partners/PUJDetails")),
  },
  {
    exact: true,
    path: "/rsmtv-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/RSMTVDetails")
    ),
  },
  {
    exact: true,
    path: "/ritr-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/RITRDetails")
    ),
  },
  {
    exact: true,
    path: "/svpmp-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/SVPMPDetails")
    ),
  },
  {
    exact: true,
    path: "/smsl-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/SMSLDetails")
    ),
  },
  {
    exact: true,
    path: "/ti-college",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/Partners/TIDetails")),
  },
  {
    exact: true,
    path: "/zcer-college",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/static/Partners/ZCERDetails")
    ),
  },
  {
    exact: true,
    path: "/ranking",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/Ranking")),
  },
  {
    exact: true,
    path: "/activity",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/Activity")),
  },
  {
    exact: true,
    path: "/drop-details",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/Drops/CreateDrops")),
  },

  {
    exact: true,
    path: "/catalouge",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/Catalogue")),
  },

  {
    exact: true,
    path: "/resource-center",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/ResourceCenter")),
  },

  {
    exact: true,
    path: "/about-us",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/About/About")),
  },

  {
    exact: true,
    path: "/roadmap",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/static/Roadmap")),
  },
  {
    exact: true,
    path: "/payment-history",
    component: lazy(() => import("src/views/pages/Courses/SuccessScreen")),
  },
  {
    exact: true,
    path: "/payment-bundle-history",
    component: lazy(() => import("src/views/pages/Courses/SuccessScreen")),
  },
  {
    exact: true,
    path: "/media1",
    layout: HomeLayout,

    component: lazy(() => import("src/views/pages/static/Media/MediaContent1")),
  },
  {
    exact: true,
    path: "/media2",
    layout: HomeLayout,

    component: lazy(() => import("src/views/pages/static/Media/MediaContent2")),
  },
  {
    exact: true,
    path: "/media3",
    layout: HomeLayout,

    component: lazy(() => import("src/views/pages/static/Media/MediaContent3")),
  },
  {
    exact: true,
    path: "/media4",
    layout: HomeLayout,

    component: lazy(() => import("src/views/pages/static/Media/MediaContent4")),
  },
  {
    exact: true,
    path: "/media5",
    layout: HomeLayout,

    component: lazy(() => import("src/views/pages/static/Media/MediaContent5")),
  },
  {
    exact: true,
    path: "/media6",
    layout: HomeLayout,

    component: lazy(() => import("src/views/pages/static/Media/MediaContent6")),
  },
  {
    exact: true,
    path: "/media7",
    layout: HomeLayout,

    component: lazy(() => import("src/views/pages/static/Media/MediaContent7")),
  },
  {
    exact: true,
    path: "/media8",
    layout: HomeLayout,

    component: lazy(() => import("src/views/pages/static/Media/MediaContent8")),
  },
  {
    exact: true,
    path: "/media9",
    layout: HomeLayout,

    component: lazy(() => import("src/views/pages/static/Media/MediaContent9")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
