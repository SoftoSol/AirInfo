import React from "react";
import { Button,TextInput, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SocialButton from "../../Components/SocialButton/SocialButton.component";
import Styles from "./Login.style";

function Login(props) {
  return (
    <View style={Styles.container}>
      <View style={Styles.logo}>
        <Image source={require('../../assets/cloud.png')} style={Styles.logoImage}/>
        <Text  style={Styles.textCenter}>Bosch Sensors</Text>
      </View>
      <View style={Styles.emailLogin}>
        <Text style={Styles.title}>Sign in</Text>
        <Text>Hi there, nice to see you again</Text>
        <View>
        <View style={Styles.input}>
          <Text style={Styles.textPink}>Email</Text>
          <TextInput placeholder="Email" style={Styles.inputControl}/>
        </View>
        <View style={Styles.input}>
          <Text style={Styles.textPink}>Password</Text>
          <TextInput placeholder="Password" style={Styles.inputControl} secureTextEntry={true}/>
        </View>
        <Button
          title="Sign In"
          onPress={() => {
            console.log(props.navigation.navigate("Home"));
          }}
          color="#F95F6B"
          style={Styles.signUpBtn}
        />
        </View>
        <Text style={Styles.textCenter}>or use one of your social profiles</Text>
      </View>
      <View style={Styles.socialLogin}>
         <SocialButton platform="twitter"/>
         <SocialButton platform="facebook"/>
      </View>
      <View style={Styles.signUp}>
        <Text>Forgot Password</Text>
        <Text style={Styles.signUpLink}>Sign up</Text>
      </View>
    </View>
  );
}

export default Login;



// export default function Login() {
//   return (
//     <ScrollView>
//       <View
//         style={{
//           marginTop: 60,
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {/* <Image source={require("./assets/logo.png")} /> */}
//         <Text
//           style={[
//             styles.text,
//             { marginTop: 2, fontSize: 22, fontWeight: "500" },
//           ]}
//         >
//           Bosch Sensors
//         </Text>
//       </View>

//       <View>
//         <Text>Email</Text>
//         <TextInput
//           style={{ height: 40, borderColor: "grey", borderWidth: 1 }}
//         />
//         <Text>Password</Text>
//         <TextInput
//           style={{ height: 40, borderColor: "grey", borderWidth: 1 }}
//         />
//       </View>

//       <View style={styles.btnSigin}>
//         <Button title="Sign In" />
//       </View>

//       <View
//         style={{
//           marginTop: 14,
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Text>or use one of our social profiles</Text>
//       </View>
//       <View
//         style={{
//           marginTop: 10,
//           flexDirection: "row",
//           justifyContent: "center",
//         }}
//       >
//         <TouchableOpacity>
//           <View style={styles.socialButton}>
//             <Image
//               source={require("../../assets/twitter.png")}
//               style={styles.socialLogo}
//             />
//             <Text style={styles.text}>Twitter</Text>
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.socialButton}>
//           <Image
//             source={require("../../assets/twitter.png")}
//             style={styles.socialLogo}
//           />
//           <Text style={styles.text}>Facebook</Text>
//         </TouchableOpacity>
//       </View>

//       <View
//         style={{
//           marginTop: 14,
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Text style={styles.ForgotPassword}>Forgot Password?</Text>
//         <Text style={styles.SignUp}>Sign Up</Text>
//       </View>
//     </ScrollView>
//   );
// }

