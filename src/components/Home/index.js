import React, { Component } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import styles from "./style";
class Home extends Component {
  state = {
    username: "",
    password: ""
  };
  static navigationOptions = {
    header: null
  };
  checkLogin() {
    const { username, password } = this.state;
    if (username == "admin" && password == "admin") {
      this.props.navigation.navigate("Dashboard");
    } else {
      Alert.alert("Error", "Usernamer/Password mismatch", [
        {
          text: "Ok?"
        }
      ]);
    }
  }

  render() {
    return (
      <View style={styles.parent}>
        <Text style={styles.heading}> Log In</Text>
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          onChangeText={text => this.setState({ username: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
          secureTextEntry={true}
        />
        <Button title={"Log In"} onPress={_ => this.checkLogin()} />
      </View>
    );
  }
}
export default Home;
