import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_ALL_USERS} from '../Graphql/Queries';

export default function LoginScreen(props) {
  const onSubmit = () => {
    props.setLogin(false);
  };
  const {data} = useQuery(GET_ALL_USERS);

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
      {data &&
        data.getAllUsers.map(e => {
          return (
            <View style={{flexDirection: 'row'}} key={e.name}>
              <Text>{e.name} as </Text>
              <Text>{e.username}</Text>
            </View>
          );
        })}
      <View style={{flex: 1}}>
        <Button title="Logout" color="black" onPress={onSubmit} />
      </View>
    </View>
  );
}
