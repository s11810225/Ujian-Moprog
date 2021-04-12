import React, { Component } from 'react';
import { Text, Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      namaLengkap: '',
      username: '',
      email: '',
      alamat: '',
      nohp: '',
    };
  }
  
  onLogin() {
    const { namaLengkap, username, email, alamat, nohp } = this.state;

    Alert.alert('Users List',`
    Nama Lengkap\t:${namaLengkap}
    Username\t\t\t\t\t\t\t:${username}
    Email\t\t\t\t\t\t\t\t\t\t\t\t\t:${email}
    Alamat\t\t\t\t\t\t\t\t\t\t\t:${alamat}
    No Telepon\t\t\t\t\t:${nohp}`);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.font_title}> Registration</Text>
        <TextInput
          value={this.state.namaLengkap}
          onChangeText={(namaLengkap) => this.setState({ namaLengkap })}
          placeholder={'Masukan nama lengkap anda'}
          style={styles.input}
        />
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Masukan username anda'}
          style={styles.input}
        />
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Masukan email anda'}
          style={styles.input}
        />
        <TextInput
          value={this.state.alamat}
          onChangeText={(alamat) => this.setState({ alamat })}
          placeholder={'Masukan alamat anda'}
          style={styles.input}
        />
        <TextInput
          value={this.state.nohp}
          onChangeText={(nohp) => this.setState({ nohp })}
          placeholder={'Masukan nomor telepon'}
          style={styles.input}
        />
       
        
        <Button
          title={'Register'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  font_title: {fontWeight: 'bold',fontSize: 30},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});