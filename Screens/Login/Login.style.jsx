const { StyleSheet, Dimensions } = require("react-native");

const height = Dimensions.get("screen").height - 80;

const Styles = StyleSheet.create({
  container: { padding: 40 },
  logo: {
    height: (height / 10) * 2,
    backgroundColor: "yellow",
  },
  emailLogin: {
    height: (height / 10) * 6,
    backgroundColor: "red",
    justifyContent: "space-around",
  },
  socialLogin: {
    height: height / 10,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  signUp: {
    height: height / 10,
    backgroundColor: "grey",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttons: {
    width: "90%",
  },
});

export default Styles;
