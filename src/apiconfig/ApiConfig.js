export const baseUrl = "https://nodev3-learningrecords.mobiloitte.io/api/v1";
// export const baseUrl = "http://172.16.6.52:2055/api/v1" // nandkishor sir local
// export const baseUrl  = "http://172.16.2.35:2055/api/v1" //aniket sir local
//const baseUrl = "http://172.16.6.158:2055/api/v1" // aniket yadav

const user = `${baseUrl}/user`;
const course = `${baseUrl}/course`;
const watchlist = `${baseUrl}/watchlist`;
const skill = `${baseUrl}/skill`;
const certificate = `${baseUrl}/certificate`;
const notification = `${baseUrl}/notification`;
const ticket = `${baseUrl}/ticket`;
const cart = `${baseUrl}/cart`;
const payment = `${baseUrl}/payment`;

export const apiConfig = {
  removeWatchlist: `${watchlist}/removeWatchlist`,
  register: `${user}/register`,
  signUpBounty: `${user}/signUpBounty`,
  login: `${user}/login`,
  newGyanis: `${user}/newGyanis`,
  forgotPassword: `${user}/forgotPassword`,
  verify_email_otp: `${user}/verify_email_otp`,
  resend_otp_email: `${user}/resend_otp_email`,
  resetPassword: `${user}/resetPassword`,
  listTrendingCourse: `${course}/listTrendingCourse`,
  getUserProfile: `${user}/profile`,
  updateUserProfile: `${user}/updateProfile`,
  searchUserWithSkills: `${user}/searchUserWithSkills`,
  getAllCategory: `${course}/getAllCategory`,
  transactionHBD: `${user}/transactionHBD`,
  getAllSubCategory: `${course}/getAllSubCategory`,
  getDetails: `${user}/getDetails`,
  checkWatchlistStatus: `${user}/checkWatchlistStatus`,
  filterCourse: `${course}/filterCourse`,
  getTrendingSubCategory: `${course}/getTrendingSubCategory`,
  getSpotlightSubCategory: `${course}/getSpotlightSubCategory`,
  subscribeEmail: `${user}/subscribe`,
  userBalance: `${user}/userBalance`,
  listWatchList: `${watchlist}/listWatchList`,
  listOwnWatchList: `${watchlist}/listOwnWatchList`,
  updateStatusWatchlist: `${watchlist}/updateStatusWatchlist`,
  transaction: `${user}/transaction`,
  skillList: `${skill}/skillsList`,
  subSkillList: `${skill}/subSkillsList`,
  uploadImage: `${user}/uploadImage`,
  addCertificate: `${certificate}/addCertificate`,
  socialLogin: `${user}/socialLogin`,
  getUserBadge: `${user}/getUserBadge`,
  certificateList: `${certificate}/certificateList`,
  getAllCoursesBySubCategory: `${course}/getAllCoursesBySubCategory`,
  changePassword: `${user}/changePassword`,
  listCourse: `${course}/listCourse`,
  getCourse: `${course}/getCourse`,
  listNotification: `${notification}/listNotification`,
  deleteNotification: `${notification}/deleteNotification`,
  clearNotification: `${notification}/clearNotification`,
  addResume: `${user}/addResume`,
  sendMobileOtp: `${user}/resend_otp_mobile`,
  mobileOtpVerification: `${user}/mobileOtpVerification`,
  addProfilePic: `${user}/addProfilePic`,
  ticketEnquiryList: `${ticket}/ticketEnquiryList`,
  addTicketEnquiry: `${ticket}/addTicketEnquiry`,
  viewTicketEnquiry: `${ticket}/viewTicketEnquiry`,
  addToCart: `${cart}/addToCart`,
  viewCart: `${cart}/viewCart`,
  removeFromCart: `${cart}/removeItemFromCart`,
  getAllDropCourse: `${user}/getAllDropCourse`,
  getDetails: `${user}/getDetails`,
  transactionHBD: `${user}/transactionHBD`,
  myCourse: `${course}/myCourse`,
  scanCode: `${user}/scanCode`,
  recomendCourse: `${course}/recomendCourse`,
  viewTemplate: `${course}/viewTemplate`,
  partnerForm: `${baseUrl}/landingUniversity/addLandingUniversity`,

  //payment
  checkOut: `${payment}/checkOut`,
  getTransactionId: `${payment}/getTransaction`,
  checkOutCart: `${payment}/checkOutCart`,

  // add watchlist
  addWatchlist: `${watchlist}/addWatchList`,
};
