import React from "react";
import MediaQuery from "react-responsive";

export const DesktopView=(props)=> {
  return <MediaQuery minWidth={768}>{props.children}</MediaQuery>;
} 

// export const ImgContainer=(props)=> {
//   return <MediaQuery maxWidth={768}>{props.children}</MediaQuery>;
// } 
export const NonDesktopView=(props)=> {
  return <MediaQuery maxWidth={768}>{props.children}</MediaQuery>;
} 
