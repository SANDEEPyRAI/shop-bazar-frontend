import { Button } from "@material-ui/core";
import React from "react";

export const menuProps = {
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  elevation: 0,
  PaperProps: {
    style: {
      maxHeight: 200,
    },
  },
};
export const setCryptoDecimals = (amt) => {
  amt = exponentialToDecimal(amt || 0);

  amt = amt?.replace(",", "");
  let arr = amt?.toString().split(".");

  if (arr.length > 1) {
    if (arr[1].length > 8) {
      return numberWithCommas(
        exponentialToDecimal(parseFloat(amt)).toString()
      ).toString();
    } else {
      return numberWithCommas(amt).toString();
    }
  } else {
    if (amt) {
      return numberWithCommas(amt).toString();
    }
    return "0";
  }
};
const numberWithCommas = (x) => {
  let str = toFixedFunction(x, 6);

  let arr = str.split(".");

  let numbers = arr[0];
  let decimalNum = "";
  if (arr.length > 1) {
    decimalNum = arr[1];
    return `${numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${decimalNum}`;
  } else {
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
export const toFixedFunction = (amt, decimals) => {
  let str = amt?.toString();
  if (str?.includes(".")) {
    str = str.slice(0, str.indexOf(".") + (decimals + 1));
  }
  return str;
};
export const exponentialToDecimal = (exponential) => {
  let decimal = exponential?.toString()?.toLowerCase();
  if (decimal?.includes("e+")) {
    const exponentialSplitted = decimal?.split("e+");
    let postfix = "";
    for (
      let i = 0;
      i <
      +exponentialSplitted[1] -
        (exponentialSplitted[0].includes(".")
          ? exponentialSplitted[0].split(".")[1].length
          : 0);
      i++
    ) {
      postfix += "0";
    }
    const addCommas = (text) => {
      let j = 3;
      let textLength = text.length;
      while (j < textLength) {
        text = `${text.slice(0, textLength - j)},${text.slice(
          textLength - j,
          textLength
        )}`;
        textLength++;
        j += 3 + 1;
      }
      return text;
    };
    decimal = addCommas(exponentialSplitted[0].replace(".", "") + postfix);
  }
  if (decimal?.toLowerCase().includes("e-")) {
    const exponentialSplitted = decimal?.split("e-");
    let prefix = "0.";
    for (let i = 0; i < +exponentialSplitted[1] - 1; i++) {
      prefix += "0";
    }
    decimal = prefix + exponentialSplitted[0].replace(".", "");
  }
  return decimal;
};
export const bannerData = [
  {
    title: "Incentivizing & Celebrating Skills",
    description: "Global Skills Market Place",
    dotimage: "images/firstSlideDot.png",
  },
  {
    title: "कौशल का महोत्सव",
    description: "वैश्विक कौशल बाजार",
    dotimage: "images/second_banner-dot.svg",
  },
  {
    title: "कौशल्यांना प्रोत्साहन देणे आणि साजरे करणे",
    description: '"जागतिक कौशल्य बाजारपेठ"',
    dotimage: "images/third_banner_dot.svg",
  },
  {
    title: "કૌશલ્યોને પ્રોત્સાહન આપવું અને ઉજવણી કરવી",
    description: "વૈશ્વિક કૌશલ્ય બજાર સ્થળ",
    dotimage: "images/fourthSlideDot.png",
  },
];

export const transactiontabledata = [
  {
    img: "images/transaction_profile.svg",
    txhash: "0x7f7532...2016",
    blockhash: "0x7f7532...2016",
    gyancoins: "100",
    datetime: "Jun 3, 2023 4:37 PM",
    txindex: "8108",
    blockNo: "7793",
    rewardtype: "Bounty f...n Up",
  },

  {
    img: "images/transaction_profile.svg",
    txhash: "0x7f7532...2016",
    blockhash: "0x7f7532...2016",
    gyancoins: "100",
    datetime: "Jun 3, 2023 4:37 PM",
    txindex: "8108",
    blockNo: "7793",
    rewardtype: "Bounty f...n Up",
  },

  {
    img: "images/transaction_profile.svg",
    txhash: "0x7f7532...2016",
    blockhash: "0x7f7532...2016",
    gyancoins: "100",
    datetime: "Jun 3, 2023 4:37 PM",
    txindex: "8108",
    blockNo: "7793",
    rewardtype: "Bounty f...n Up",
  },

  {
    img: "images/transaction_profile.svg",
    txhash: "0x7f7532...2016",
    blockhash: "0x7f7532...2016",
    gyancoins: "100",
    datetime: "Jun 3, 2023 4:37 PM",
    txindex: "8108",
    blockNo: "7793",
    rewardtype: "Bounty f...n Up",
  },

  {
    img: "images/transaction_profile.svg",
    txhash: "0x7f7532...2016",
    blockhash: "0x7f7532...2016",
    gyancoins: "100",
    datetime: "Jun 3, 2023 4:37 PM",
    txindex: "8108",
    blockNo: "7793",
    rewardtype: "Bounty f...n Up",
  },

  {
    img: "images/transaction_profile.svg",
    txhash: "0x7f7532...2016",
    blockhash: "0x7f7532...2016",
    gyancoins: "100",
    datetime: "Jun 3, 2023 4:37 PM",
    txindex: "8108",
    blockNo: "7793",
    rewardtype: "Bounty f...n Up",
  },

  {
    img: "images/transaction_profile.svg",
    txhash: "0x7f7532...2016",
    blockhash: "0x7f7532...2016",
    gyancoins: "100",
    datetime: "Jun 3, 2023 4:37 PM",
    txindex: "8108",
    blockNo: "7793",
    rewardtype: "Bounty f...n Up",
  },

  {
    img: "images/transaction_profile.svg",
    txhash: "0x7f7532...2016",
    blockhash: "0x7f7532...2016",
    gyancoins: "100",
    datetime: "Jun 3, 2023 4:37 PM",
    txindex: "8108",
    blockNo: "7793",
    rewardtype: "Bounty f...n Up",
  },

  {
    img: "images/transaction_profile.svg",
    txhash: "0x7f7532...2016",
    blockhash: "0x7f7532...2016",
    gyancoins: "100",
    datetime: "Jun 3, 2023 4:37 PM",
    txindex: "8108",
    blockNo: "7793",
    rewardtype: "Bounty f...n Up",
  },

  {
    img: "images/transaction_profile.svg",
    txhash: "0x7f7532...2016",
    blockhash: "0x7f7532...2016",
    gyancoins: "100",
    datetime: "Jun 3, 2023 4:37 PM",
    txindex: "8108",
    blockNo: "7793",
    rewardtype: "Bounty f...n Up",
  },
];

export const transactiontabledataWallet = [
  {
    datetime: "Jun 3, 2023 4:37 PM",
    description:
      "Proficient in Angular, a powerful front-end framework, for creating dynamic..",
    txhash: "0xc3709e0ff9c5a7c30410f7cf9239",
    verified: "Yes",
    amount: "100 GC",
    action: <Button style={{ color: "#0856CC" }}>View</Button>,
  },
  {
    datetime: "Jun 3, 2023 4:37 PM",
    description:
      "Proficient in Angular, a powerful front-end framework, for creating dynamic..",
    txhash: "0xc3709e0ff9c5a7c30410f7cf9239",
    verified: "Yes",
    amount: "100 GC",
    action: <Button style={{ color: "#0856CC" }}>View</Button>,
  },
  {
    datetime: "Jun 3, 2023 4:37 PM",
    description:
      "Proficient in Angular, a powerful front-end framework, for creating dynamic..",
    txhash: "0xc3709e0ff9c5a7c30410f7cf9239",
    verified: "Yes",
    amount: "100 GC",
    action: <Button style={{ color: "#0856CC" }}>View</Button>,
  },
  {
    datetime: "Jun 3, 2023 4:37 PM",
    description:
      "Proficient in Angular, a powerful front-end framework, for creating dynamic..",
    txhash: "0xc3709e0ff9c5a7c30410f7cf9239",
    verified: "Yes",
    amount: "100 GC",
    action: <Button style={{ color: "#0856CC" }}>View</Button>,
  },
  {
    datetime: "Jun 3, 2023 4:37 PM",
    description:
      "Proficient in Angular, a powerful front-end framework, for creating dynamic..",
    txhash: "0xc3709e0ff9c5a7c30410f7cf9239",
    verified: "Yes",
    amount: "100 GC",
    action: <Button style={{ color: "#0856CC" }}>View</Button>,
  },
  {
    datetime: "Jun 3, 2023 4:37 PM",
    description:
      "Proficient in Angular, a powerful front-end framework, for creating dynamic..",
    txhash: "0xc3709e0ff9c5a7c30410f7cf9239",
    verified: "Yes",
    amount: "100 GC",
    action: <Button style={{ color: "#0856CC" }}>View</Button>,
  },
  {
    datetime: "Jun 3, 2023 4:37 PM",
    description:
      "Proficient in Angular, a powerful front-end framework, for creating dynamic..",
    txhash: "0xc3709e0ff9c5a7c30410f7cf9239",
    verified: "Yes",
    amount: "100 GC",
    action: <Button style={{ color: "#0856CC" }}>View</Button>,
  },
  {
    datetime: "Jun 3, 2023 4:37 PM",
    description:
      "Proficient in Angular, a powerful front-end framework, for creating dynamic..",
    txhash: "0xc3709e0ff9c5a7c30410f7cf9239",
    verified: "Yes",
    amount: "100 GC",
    action: <Button style={{ color: "#0856CC" }}>View</Button>,
  },
  {
    datetime: "Jun 3, 2023 4:37 PM",
    description:
      "Proficient in Angular, a powerful front-end framework, for creating dynamic..",
    txhash: "0xc3709e0ff9c5a7c30410f7cf9239",
    verified: "Yes",
    amount: "100 GC",
    action: <Button style={{ color: "#0856CC" }}>View</Button>,
  },
  {
    datetime: "Jun 3, 2023 4:37 PM",
    description:
      "Proficient in Angular, a powerful front-end framework, for creating dynamic..",
    txhash: "0xc3709e0ff9c5a7c30410f7cf9239",
    verified: "Yes",
    amount: "100 GC",
    action: <Button style={{ color: "#0856CC" }}>View</Button>,
  },
];

export const gyanisData = [
  {
    profileImage: "images/gyani_profile.svg",
    name: "Shubham Khanna",
    qr: "images/gyani_qr.svg",
  },
  {
    profileImage: "images/gyani_profile.svg",
    name: "Shubham Khanna",
    qr: "images/gyani_qr.svg",
  },
  {
    profileImage: "images/gyani_profile.svg",
    name: "Shubham Khanna",
    qr: "images/gyani_qr.svg",
  },
  {
    profileImage: "images/gyani_profile.svg",
    name: "Shubham Khanna",
    qr: "images/gyani_qr.svg",
  },
  {
    profileImage: "images/gyani_profile.svg",
    name: "Shubham Khanna",
    qr: "images/gyani_qr.svg",
  },
];

export const engeneeringData = [
  {
    image: "images/enginerringImg1.png",
    btnText: "Mechanical Engineering",
  },

  {
    image: "images/enginerringImg2.png",
    btnText: "Computer Engineering",
  },

  {
    image: "images/enginerringImg3.png",
    btnText: "IT Engineering",
  },

  {
    image: "images/enginerringImg4.png",
    btnText: "Electrical Engineering",
  },
  {
    image: "images/enginerringImg5.png",
    btnText: "Mining Engineering",
  },
];

export const topicsMap = [
  {
    id: 1,
    text: "Understanding IoT and Big Data: Gain insights into how IoT and Big Data can optimize energy utilization in thermal systems.",
  },
  {
    id: 2,
    text: "Leveraging Digital Twins: Discover the potential of digital twins in simulating and improving thermodynamic processes.",
  },
  {
    id: 3,
    text: "AI/ML Enhanced Fluid Flow: Learn how AI/ML can enhance fluid flow predictions in the context of Fluid Mechanics.",
  },
  {
    id: 4,
    text: "Optimizing Fluid Systems with Big Data: Explore the application of Big Data in optimizing fluid systems.",
  },
  {
    id: 5,
    text: "Blockchain in Materials Quality: Understand Blockchain's role in ensuring materials' traceability and quality within Materials Engineering.",
  },
  {
    id: 6,
    text: "Data-Driven Materials Selection: Explore how Big Data enhances materials selection processes.",
  },
  {
    id: 7,
    text: "Predicting Material Behavior with Digital Twins: Learn how digital twins aid in predicting material behavior.",
  },
  {
    id: 8,
    text: "Simulating Material Properties with Cloud Computing: Understand how Cloud Computing can simulate and analyze material properties.",
  },
  {
    id: 9,
    text: "IoT in Smart Manufacturing: Grasp the role of IoT in smart manufacturing and process optimization.",
  },
  {
    id: 10,
    text: "AI/ML in Quality Control: Explore how AI/ML can improve quality control in manufacturing.",
  },
];

export const internshipList = [
  {
    id: 1,
    text: "To gain experience through internships in materials testing labs, which are sought after in fields related to Strength of Materials.",
  },
  {
    id: 2,
    text: "Seek internships with manufacturing companies actively adopting IoT in their processes, leveraging your understanding of IoT in Smart Manufacturing.",
  },
  {
    id: 3,
    text: "Pursue opportunities in roles that focus on AI/ML-powered quality assurance in the manufacturing sector, utilizing your knowledge of AI/ML in Quality Control.",
  },
  {
    id: 4,
    text: "Internships with energy-efficient companies in the renewable energy sector are available for students with expertise in IoT and Big Data as they relate to Thermodynamics.",
  },
  {
    id: 5,
    text: "Opportunities in roles focused on IoT-based energy conservation are accessible for students with an understanding of IoT and Big Data as part of Thermodynamics.",
  },
  {
    id: 6,
    text: "Internships in aerospace, automotive, or HVAC companies are available for students with expertise in fluid dynamics from Fluid Mechanics.",
  },
  {
    id: 7,
    text: "Opportunities in roles where expertise in fluid systems data analysis is sought after can be found for students with knowledge of Fluid Mechanics.",
  },
  {
    id: 8,
    text: "Internships with companies emphasizing supply chain and materials quality are open to students with knowledge of Blockchain in Materials Quality.",
  },
];


export const AllCategories = [
  {
    image: "images/enginerringImg1.png",
    btnText: "Mechanical Engineering",
  },

  {
    image: "images/enginerringImg2.png",
    btnText: "Computer Engineering",
  },

  {
    image: "images/enginerringImg3.png",
    btnText: "IT Engineering",
  },

  {
    image: "images/enginerringImg4.png",
    btnText: "Electrical Engineering",
  },
  {
    image: "images/enginerringImg5.png",
    btnText: "Mining Engineering",
  },
  {
    image: "images/enginerringImg1.png",
    btnText: "Mechanical Engineering",
  },

  {
    image: "images/enginerringImg2.png",
    btnText: "Computer Engineering",
  },

  {
    image: "images/enginerringImg3.png",
    btnText: "IT Engineering",
  },

  {
    image: "images/enginerringImg4.png",
    btnText: "Electrical Engineering",
  },
  {
    image: "images/enginerringImg5.png",
    btnText: "Mining Engineering",
  },
  {
    image: "images/enginerringImg1.png",
    btnText: "Mechanical Engineering",
  },

  {
    image: "images/enginerringImg2.png",
    btnText: "Computer Engineering",
  },

  {
    image: "images/enginerringImg3.png",
    btnText: "IT Engineering",
  },

  {
    image: "images/enginerringImg4.png",
    btnText: "Electrical Engineering",
  },
  {
    image: "images/enginerringImg5.png",
    btnText: "Mining Engineering",
  },
  {
    image: "images/enginerringImg1.png",
    btnText: "Mechanical Engineering",
  },

  {
    image: "images/enginerringImg2.png",
    btnText: "Computer Engineering",
  },

  {
    image: "images/enginerringImg3.png",
    btnText: "IT Engineering",
  },

  {
    image: "images/enginerringImg4.png",
    btnText: "Electrical Engineering",
  },
  {
    image: "images/enginerringImg5.png",
    btnText: "Mining Engineering",
  },
  {
    image: "images/enginerringImg1.png",
    btnText: "Mechanical Engineering",
  },

  {
    image: "images/enginerringImg2.png",
    btnText: "Computer Engineering",
  },

  {
    image: "images/enginerringImg3.png",
    btnText: "IT Engineering",
  },

  {
    image: "images/enginerringImg4.png",
    btnText: "Electrical Engineering",
  },
  {
    image: "images/enginerringImg5.png",
    btnText: "Mining Engineering",
  },
  {
    image: "images/enginerringImg1.png",
    btnText: "Mechanical Engineering",
  },

  {
    image: "images/enginerringImg2.png",
    btnText: "Computer Engineering",
  },

  {
    image: "images/enginerringImg3.png",
    btnText: "IT Engineering",
  },

  {
    image: "images/enginerringImg4.png",
    btnText: "Electrical Engineering",
  },
  {
    image: "images/enginerringImg5.png",
    btnText: "Mining Engineering",
  },
];

export function checkNumber(value) {
  const re = /^(?!0+$)[0-9]{1,10}$/gm;
  return re.test(value);
}

export const SubcategoryDataMain = [
  {
    image: <img src="images/Learning1.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "60 Hour",
    technology: "AI/ML,IoT",
    techName: "Technology",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/Learning2.png" alt="l1" />,
    title: "Internship",
    time: "60 Hour",
    technology: "Blockchain",
    techName: "Technology",
    Price: "₹ 1999",
    priceName: "Price",
  },
  {
    image: <img src="images/Learning3.png" alt="l1" />,
    title: "Industry Expert Sessions",
    time: "60 Hour",
    technology: "AI/ML",
    techName: "Technology",
    Price: "₹ 600",
    priceName: "Price",
  },
  {
    image: <img src="images/Learning4.png" alt="l1" />,
    title: "Employer Watchlist",
    time: "60 Hour",
    technology: "Global Access",
    techName: "Technology",
    Price: "₹ 300",
    priceName: "Price",
  },
  {
    image: <img src="images/Learning1.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "60 Hour",
    technology: "AI/ML,IoT",
    techName: "Technology",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/Learning2.png" alt="l1" />,
    title: "Internship",
    time: "60 Hour",
    technology: "Blockchain",
    techName: "Technology",
    Price: "₹ 1999",
    priceName: "Price",
  },
  {
    image: <img src="images/Learning3.png" alt="l1" />,
    title: "Industry Expert Sessions",
    time: "60 Hour",
    technology: "AI/ML",
    techName: "Technology",
    Price: "₹ 600",
    priceName: "Price",
  },
  {
    image: <img src="images/Learning4.png" alt="l1" />,
    title: "Employer Watchlist",
    time: "60 Hour",
    technology: "Global Access",
    techName: "Technology",
    Price: "₹ 300",
    priceName: "Price",
  },
];

export const dropsData = [
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/mech.png" alt="l1" />,
    title: "Mechanical Engineering",
    time: "Semester-1",
    technology: "482/1000",
    techName: "Available Sessions",
    Price: "₹ 1450",
    priceName: "Price",
  },
];

export const allCartData = [
  {
    imageSrc: "images/Cart1.png",
    title: "B.Tech Mechanical Engineering",
    semester: 3,
    price: 2999,
    additionalInfo: "(AI/ML, Blockchain, IoT, Metaverse)",
    duration: 18,
  },
  {
    imageSrc: "images/Carty.png",
    title: "B.Tech Mechanical Engineering",
    semester: 3,
    price: 2999,
    additionalInfo: "(AI/ML, Blockchain, IoT, Metaverse)",
    duration: 18,
  },
];

export const SubcategoryData = [
  {
    image: <img src="images/Learning1.png" alt="l1" />,
    title: "Working Project",
    time: "60 Hour",
    technology: "AI/ML,IoT",
    techName: "Technology",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/Learning2.png" alt="l1" />,
    title: "Internship",
    time: "60 Hour",
    technology: "Blockchain",
    techName: "Technology",
    Price: "₹ 1999",
    priceName: "Price",
  },
  {
    image: <img src="images/Learning3.png" alt="l1" />,
    title: "Industry Expert Sessions",
    time: "60 Hour",
    technology: "AI/ML",
    techName: "Technology",
    Price: "₹ 600",
    priceName: "Price",
  },
  {
    image: <img src="images/Learning4.png" alt="l1" />,
    title: "Employer Watchlist",
    time: "60 Hour",
    technology: "Global Access",
    techName: "Technology",
    Price: "₹ 300",
    priceName: "Price",
  },
];


export const CartSubcategoryData = [
  {
    image: <img src="images/C1.png" alt="l1" />,
    title: "Working Project",
    time: "60 Hour",
    technology: "AI/ML,IoT",
    techName: "Technology",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/C2.png" alt="l1" />,
    title: "Internship",
    time: "60 Hour",
    technology: "Blockchain",
    techName: "Technology",
    Price: "₹ 1999",
    priceName: "Price",
  },
  {
    image: <img src="images/C3.png" alt="l1" />,
    title: "Industry Expert Sessions",
    time: "60 Hour",
    technology: "AI/ML",
    techName: "Technology",
    Price: "₹ 600",
    priceName: "Price",
  },
  {
    image: <img src="images/C4.png" alt="l1" />,
    title: "Employer Watchlist",
    time: "60 Hour",
    technology: "Global Access",
    techName: "Technology",
    Price: "₹ 300",
    priceName: "Price",
  },
];

export const CartData = [
  {
    image: <img src="images/Learning1.png" alt="l1" />,
    title: "Working Project",
    time: "60 Hour",
    technology: "AI/ML,IoT",
    techName: "Technology",
    Price: "₹ 1450",
    priceName: "Price",
  },
  {
    image: <img src="images/Learning2.png" alt="l1" />,
    title: "Internship",
    time: "60 Hour",
    technology: "Blockchain",
    techName: "Technology",
    Price: "₹ 1999",
    priceName: "Price",
  },
  {
    image: <img src="images/Learning3.png" alt="l1" />,
    title: "Industry Expert Sessions",
    time: "60 Hour",
    technology: "AI/ML",
    techName: "Technology",
    Price: "₹ 600",
    priceName: "Price",
  },
  {
    image: <img src="images/Learning4.png" alt="l1" />,
    title: "Employer Watchlist",
    time: "60 Hour",
    technology: "Global Access",
    techName: "Technology",
    Price: "₹ 300",
    priceName: "Price",
  },
];

export const myCartData = [
  {
    image: <img src="images/CartImg.png" alt="cart" />,
    courseName: "MCA",
    semester: "Semester-5",
    timeDuration: "18 Hours",
    price: 1999,
  },
  {
    image: <img src="images/CartImg.png" alt="cart" />,
    courseName: "MCA",
    semester: "Semester-5",
    timeDuration: "18 Hours",
    price: 1999,

  },
]

export const BlogData = [
  {
    img: "images/BlogImages/theglobal.jpg",
    // headText: "Google.com",
    firstText: "Bridging the Global Skills Gap with Blockchain and AI Magic",
    secondText:"In an era where technological advancements are reshaping the global workforce, the emergence of skill gaps poses a significant challenge. Gyan Batua, a pioneering initiative, stands at the forefront of addressing this issue by harnessing the transformative powers ofBlockchain and Artificial Intelligence (AI). This comprehensive exploration delves into how Gyan Batua is not just closing the skills gap but also paving the way for a future-ready workforce. ", 
    datetime: "Nov 1, 2023 . 02 min read",
  },
  {
    img: "images/BlogImages/theraising.jpg",
    // headText: "Apple.in",
    firstText: "The Rising Challenge of the Global Skills Gap",
    secondText:
      "As industries evolve, the demand for new and specialized skills is growing exponentially. Traditional educational systems often struggle to keep pace with these rapid changes, leading to a significant skills gap. This gap not only affects individuals' career prospects but also hampers organizational growth and global economic development.",
    datetime: "Nov 1, 2023 . 02 min read",
  },
  {
    img: "images/BlogImages/beacon.jpg",
    // headText: "Amazon.in",
    firstText: "Gyan Batua: A Beacon of Innovation",
    secondText:
      "Gyan Batua emerges as a beacon of innovation in this landscape. By integrating Blockchain and AI, it offers a unique solution to the skills gap challenge. Blockchain technology ensures  transparency and security in skill verification, while AI provides personalized learning pathways and skill assessments.",
    datetime: "Nov 1, 2023 . 02 min read",
  },
  {
    img: "images/BlogImages/thebackbone.jpg",
    // headText: "Microsoft.com",
    firstText: "Blockchain: The Backbone of Skill Verification",
    secondText:
      "Blockchain technology in Gyan Batua plays a pivotal role. It creates a decentralized and tamper-proof ledger of skills and qualifications. This feature is crucial for employers who seek authentic verification of skills and educational credentials.",
    datetime : "Nov 1, 2023 . 02 min read.png",
  },
  {
    img: "images/BlogImages/aipersonalization.jpg",
    // headText: "Apple.com",
    firstText: "Personalizing the Learning Experience",
    secondText:
      "AI in Gyan Batua personalizes the learning experience for individuals. It analyzes a person's  existing skill set, learning pace, and career goals to recommend tailored learning modules. This  adaptive learning approach is key to efficiently bridging the skills gap. ",
    datetime: "Nov 1, 2023 . 02 min read",
  },
  {
    img: "images/BlogImages/unblocking.jpg",
    // headText: "Devians Arts.com",
    firstText: " A Glimpse into GyanBatua's Innovative Approach",
    secondText:
      "Dive into the world of GyanBatua and discover how our innovative platform is revolutionizing the way people learn and connect. From blockchain-enabled credentials to AI-powered matchmaking, explore the cutting-edge features that are shaping the future of education and unlocking boundless opportunities for learners worldwide. ",
    datetime: "Nov 1, 2023 . 02 min read",
  },
  {
    img: "images/BlogImages/Transforming.jpg",
    // headText: "Google.com",
    firstText: " Transforming Credentials with GyanBatua",
    secondText:
      "Blockchain technology is revolutionizing the way educational credentials are verified, stored, and shared with GyanBatua. Explore the benefits of blockchain-enabled credentials, including enhanced security, transparency, and portability, and discover how GyanBatua is leading the way in credential innovation. ",
    datetime: "Nov 1, 2023 . 02 min read",
  },
  {
    img: "images/BlogImages/insight.jpg",
    // headText: "Google.com",
    firstText: "Insights from GyanBatua's AI Matchmaking Engine",
    secondText:
      "Gain insights into the skills landscape with GyanBatua's AI matchmaking engine. Explore how our advanced algorithms analyze user skills, preferences, and industry trends to connectlearners with personalized opportunities for growth, whether it's finding the perfect course, internship, job, or project.",
    datetime: "Nov 1, 2023 . 02 min read",
  },
  {
    img: "images/BlogImages/formclassroom.jpg",
    // headText: "Google.com",
    firstText: "GyanBatua's Guide to Launching Your Professional Journey",
    secondText:
  "Transition seamlessly from the classroom to the workforce with GyanBatua as your trusted  companion. Learn about the essential skills, tools, and resources you need to launch your professional journey and kickstart your career with confidence and clarity. ",
    datetime: "Nov 1, 2023 . 02 min read",
  },
  {
    img: "images/BlogImages/fostering.jpg",
    // headText: "Google.com",
    firstText: "Fostering Collaboration Between Education and Industry",
    secondText:
      "Explore the power of collaboration between education and industry with GyanBatua. Learn how we're bringing together educators, employers, and learners to co-create innovative solutions that address real-world challenges and drive positive change in education and beyond",
    datetime: "Nov 1, 2023 . 02 min read",
  },
];


export const partnerCardData = [
  {
    img: '/images/ResourcesImg/vits_logo.png',
    head: 'VIT',
    city: 'Satna'
  },
  {
    img: '/images/ResourcesImg/bit_logo.png',
    head: 'Buddha Institute of Technology',
    city: 'Gorakhpur'
  },
  {
    img: '/images/ResourcesImg/hiu_log.png',
    head: 'HJU',
    city: 'Jaipur'
  },
  {
    img: '/images/ResourcesImg/mpgi_logo.png',
    head: 'MPGI (blend of fine education)',
    city: 'Kanpur'
  },
  {
    img: '/images/ResourcesImg/rsm_logo.png',
    head: 'Rajarshi School of Management & Technology',
    city: 'Varanasi'
  },
  {
    img: '/images/ResourcesImg/iom_logo.png',
    head: 'ITM',
    city: 'Gorakhpur'
  }
];
