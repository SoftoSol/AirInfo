import React from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Styles from "./Login.style";

function Login(props) {
  return (
    <View style={Styles.container}>
      <View style={Styles.logo}>
        <Text>Bosch Sensors</Text>
      </View>
      <View style={Styles.emailLogin}>
        <Text>Sign in</Text>
        <Text>Hi there, nice to see you again</Text>
        <View>
          <Text>Email</Text>
          <TextInput placeholder="Email" />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput placeholder="Password" />
        </View>
        <Button
          title="Sign In"
          onPress={() => {
            console.log(props.navigation.navigate("Home"));
          }}
        />
        <Text>or use one of your social profiles</Text>
      </View>
      <View style={Styles.socialLogin}>
        <Button title="Facebook" style={Styles.buttons} />
        <Button title="Twitter" style={Styles.buttons} />
      </View>
      <View style={Styles.signUp}>
        <Text>Forgot Password</Text>
        <Text>Sign up</Text>
      </View>
    </View>
  );
}

export default Login;
