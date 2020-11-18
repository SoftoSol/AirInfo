const { StyleSheet } = require("react-native");

import Constants from "expo-constants";
const Styles=StyleSheet.create({
    container:{paddingTop:Constants.statusBarHeight},
    title:{ textAlign: "center", fontSize: 18,marginVertical:10 },
    row:{ flexDirection: "row", justifyContent: "space-evenly" },
    section:{marginTop:20}
})
export default Styles;