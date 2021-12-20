import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const config_global = require("../config/global.json")

export default class Login extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.jpg')} />
        <View style={styles.inputView}>
          <Input
            style={styles.inputText}
            placeholder="Benutzername / E-Mail"
            onChangeText={text => this.setState({email: text})}
            leftIcon={<Icon name="user" size={24} color="black" />}
          />
        </View>
        <View style={styles.inputView}>
          <Input
            secureTextEntry
            style={styles.inputText}
            placeholder="Passwort"
            onChangeText={text => this.setState({password: text})}
            leftIcon={<Icon name="lock" size={24} color="black" />}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Passwort vergessen?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'Tabs'}],
            })
          }>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Registrieren</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: config_global.color_secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  Input:{
    height:50,
    color:"white",
    placeholderTextColor: config_global.color_holder

  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor: config_global.color_primary,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"black"
  }
});