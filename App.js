/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Base64, nacl } from "react-native-tweetnacl";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      publicKey: "",
      privateKey: ""
    };
  }
  componentWillMount() {
    const keyPair = nacl.box.keyPair();
    const encodedPublicKey = Base64.encode(keyPair.publicKey);
    const encodedPrivateKey = Base64.encode(keyPair.privateKey);
    this.setState({
      publicKey: encodedPublicKey,
      privateKey: encodedPrivateKey
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Nacl!</Text>
        <Text style={styles.instructions}>
          Public Key: {this.state.publicKey}
        </Text>
        <Text style={styles.instructions}>
          Private Key: {this.state.privateKey}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
