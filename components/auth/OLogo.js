import React from "react";
import {  View, Image } from "react-native";

const OLogo = () => (
<View
    style={{
      justifyContent: "center",
      alignItems: "center",
    }}
>
{/* <Image source={(uri: "")} /> */}
   <Image 
     source={require("../../assets/vida.png")} 
     style={{ width: 300, height: 300, marginVertical: 50 }} 
    />

</View>
);

export default OLogo;