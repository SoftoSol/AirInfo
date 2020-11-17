const { StyleSheet, Dimensions } = require("react-native");

const height = Dimensions.get("screen").height - 80;
const pink = "#F95F6B";
const Styles = StyleSheet.create({
  container: { padding: 40, backgroundColor: "#fff" },
  logo: {
    height: (height / 10) * 2,
  },
  logoImage: {
    height: 120,
    width: 120,
    resizeMode: "contain",
    alignSelf: "center",
  },
  emailLogin: {
    height: (height / 10) * 6,
    justifyContent: "space-around",
  },
  socialLogin: {
    height: height / 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  signUp: {
    height: height / 10,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  signUpLink: {
    fontWeight: "bold",
    fontSize: 18,
    color: pink,
  },
  buttons: {
    width: "90%",
  },
  text: {
    fontFamily: "Open Sans",
    color: pink,
  },

  btnSigin: {},
  ForgotPassword: {
    alignItems: "flex-start",
  },
  textCenter: {
    textAlign: "center",
  },
  inputControl: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  signUpBtn: {
    backgroundColor: pink,
  },
  textPink: {
    color: pink,
  },
  input: {
    marginBottom: 10,
  },
});

export default Styles;
