// import React from "react";
// import { Container, Grid, Typography, Box } from "@material-ui/core";

// function App() {
//   const styles = {
//     logo: {
//       position: "absolute",
//       marginTop: "-70px",
//     },
//     heading: {
//       marginLeft: "7%",
//       marginTop: "5%",
//       marginBottom: "2%",
//     },
//     paragraph: {
//       color: "#636880",
//       fontSize: "10px",
//     },
//     listStyle: {
//       color: "#636880",
//       fontSize: "10px",
//     },
//     footerimg: {
//       width: "100%",
//       height: "auto",
//       maxHeight: "500px",
//     },
//     campusimgbox: {
//       border: "1px solid white",
//       backgroundColor: "white",
//       borderRadius: "20px",
//       position: "relative",
//     },
//     campusimg: {
//       border: "1px solid #ECECEC",
//       borderRadius: "20px",
//       height: "361px",
//       width: "100%",
//       objectFit: "cover",
//     },
//   };

//   return (
//     <div style={{ backgroundColor: "#ECECEC" }}>
//       <Container>
//         <div style={styles.campusimgbox}>
//           <div style={{ maxWidth: "1282px", maxHeight: "361px" }}>
//             <img
//               src="images/Madras.png"
//               alt="iitmadraash"
//               style={styles.campusimg}
//             />
//             <div
//               style={{
//                 spacing: "4",
//                 maxWidth: "91px",
//                 maxHeight: "92px",
//                 ...styles.logo,
//               }}
//             >
//               <img
//                 src="images/MadrasLogo.png"
//                 alt="iitmadraashlogo"
//                 style={{ height: "91px", width: "92px", paddingLeft: "30%" }}
//               />
//             </div>
//           </div>

//           <div>
//             <div style={styles.heading}>
//               <Typography style={{ color: "#0856CC", fontSize: "30px" }}>
//                 IIT Madras - Indian Institute of Technology
//               </Typography>
//               <Typography>
//                 {" "}
//                 <b>Address: </b>{" "}
//                 <span style={{ color: "#636880" }}>
//                   Chennai, Tamil Nadu 600036
//                 </span>
//               </Typography>
//               <Typography>
//                 {" "}
//                 <span
//                   style={{
//                     backgroundColor: "#F7F7F7",
//                     color: "#636880",
//                     fontSize: "14px",
//                   }}
//                 >
//                   {" "}
//                   Public/Government Institute{" "}
//                 </span>
//                 <span
//                   style={{
//                     backgroundColor: "#F7F7F7",
//                     color: "#636880",
//                     fontSize: "14px",
//                     marginLeft: "2%",
//                   }}
//                 >
//                   {" "}
//                   Estd. 1935
//                 </span>
//               </Typography>
//             </div>
//           </div>
//         </div>
//         <br />

//         <Grid container spacing={6}>
//           <Grid item xs={12} sm={6} md={6}>
//             <img
//               src="images/AkashSir.png"
//               alt="iitmadraash"
//               style={{ height: "100%", width: "100%", objectFit: "cover" }}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6} md={6}>
//             <Typography variant="h6" style={{ color: "#262626" }}>
//               <b>I&AI CoE at [Name of Partner Institute]</b>
//             </Typography>
//             <Typography style={styles.paragraph}>
//               We are delighted to announce the establishment of the GyanBatua
//               Innovation & Artificial Intelligence Center of Excellence (I&AI
//               CoE) in collaboration with [Partner Institute Name]. The
//               memorandum of understanding (MoU) was signed on [Date of MoU
//               Signing] by [Name and Designation of Institute Authority] and
//               [Name and Designation of GyanBatua Representative], solidifying
//               our commitment to fostering innovation and technology adoption in
//               education. The CoE was inaugurated on [Date of Inauguration] by
//               [Name of Key Management Personnel of the Institute], marking a
//               significant milestone in our partnership journey.
//             </Typography>
//             <Typography style={styles.paragraph}>
//               Since its inception, the CoE has been instrumental in organizing
//               various activities, under the guidance of [Name of Key Management
//               Personnel of the Institute], aimed at empowering students and
//               faculty with cutting-edge skills in artificial intelligence,
//               machine learning, blockchain, and other emerging technologies.
//               Through these initiatives, we aim to create a dynamic learning
//               ecosystem that prepares students for the challenges and
//               opportunities of the future
//             </Typography>

//             <Grid item xs={12} sm={12} md={12}>
//               <div style={{ height: "300px", maxWidth: "100%" }}>
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7975.85217825692!2d103.85141638029147!3d1.2902356818871847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19b6a358b8fb%3A0x3187729d77288a41!2s10%2010%20High%20Street%20Centre%201%20North%20Bridge%20Rd%2C%20Singapore%20179094!5e0!3m2!1sen!2sca!4v1624308918396!5m2!1sen!2sca"
//                   width="100%"
//                   frameborder="0"
//                   style={{ height: "100%", width: "100%", objectFit: "cover" }}
//                 ></iframe>
//               </div>
//             </Grid>
//           </Grid>
//         </Grid>

//         <Grid container spacing={3} style={{ marginTop: "5%" }}>
//           <Grid item xs={12} sm={4} md={4} lg={4}>
//             <img src="images/team1.png" alt="pic1" style={styles.footerimg} />
//           </Grid>

//           <Grid item xs={12} sm={4} md={4} lg={4}>
//             <img src="images/team2.png" alt="pic1" style={styles.footerimg} />
//           </Grid>

//           <Grid item xs={12} sm={4} md={4} lg={4}>
//             <img src="images/team3.png" alt="pic1" style={styles.footerimg} />
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default App;
