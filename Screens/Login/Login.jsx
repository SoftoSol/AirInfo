import React from "react";
import { Button,TextInput, Image,  Text, View } from "react-native";
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