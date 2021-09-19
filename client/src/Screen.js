import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default function Screen() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
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
        GraphQL + ERN Client
      </Text>
      <View style={{flex: 3, justifyContent: 'space-evenly'}}>
        <TextInput
          placeholder="Enter Name"
          value={name}
          onChangeText={e => {
            setName(e);
          }}
          style={{borderWidth: 1, borderRadius: 10}}
        />
        <TextInput
          placeholder="Enter Username"
          value={username}
          onChangeText={e => {
            setUsername(e);
          }}
          style={{borderWidth: 1, borderRadius: 10}}
        />
        <TextInput
          placeholder="Enter Password"
          value={password}
          onChangeText={e => {
            setPassword(e);
          }}
          secureTextEntry={true}
          style={{borderWidth: 1, borderRadius: 10}}
        />
      </View>
      <View style={{flex: 1}}>
        <Button
          title="Submit"
          color="black"
          onPress={() => console.log('das')}
        />
      </View>
    </View>
  );
}
