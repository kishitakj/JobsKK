export const ImageFactory = (imageName) => {
  switch (imageName) {
    case "sec1.png":
      return require("../assets/images/sec1.png").default;
     // break;
    case "office_man":
      return require("../assets/images/office_man.png").default;
     // break;
    case "ad":
      return require("../assets/images/adBg.png").default;
    //  break;
    case "home_banner":
      return require("../assets/images/home_banner.png").default;
    //  break;
    case "ad_banner":
      return require("../assets/images/ad_banner.png").default;
    //  break;
    case "ad_mobile":
      return require("../assets/images/ad_mobile.png").default;
    //  break;
      
    
    default:
      break;
  }
};
