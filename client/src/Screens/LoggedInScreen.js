import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default function LoginScreen(props) {
  const onSubmit = () => {
    props.setLogin(false);
  };
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <Text
        style={{
          flex: 1,
          fontSize: 30,
          textAlignVertical: 'center',
          fontWeight: 'bold',
        }}>
        Welcome {props.name}
      </Text>
      <Text
        style={{
          flex: 1,
          fontSize: 20,
          textAlignVertical: 'center',
          fontWeight: 'bold',
        }}>
        You're logged in as {props.username}
      </Text>
      <View style={{flex: 1}}>
        <Button title="Logout" color="black" onPress={onSubmit} />
      </View>
    </View>
  );
}
