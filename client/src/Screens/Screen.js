import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import LoginScreen from './LoginScreen';
import LoggedInScreen from './LoggedInScreen';
import {useMutation} from '@apollo/client';
import {CREATE_USER} from '../Graphql/Mutation';

export default function Screen() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [receivedName, setReceivedName] = useState();
  const [receivedUsername, setReceivedUsername] = useState();
  const [receivedPassword, setReceivedPassword] = useState();

  const [createUser, {data}] = useMutation(CREATE_USER);

  useEffect(() => {
    if (receivedName && receivedUsername && receivedPassword) {
      createUser({
        variables: {
          name: receivedName,
          username: receivedUsername,
          password: receivedPassword,
        },
      });
      console.log(data);
    }
  }, [receivedName, receivedUsername, receivedPassword]);

  return loggedIn ? (
    <LoggedInScreen
      name={receivedName}
      username={receivedUsername}
      setLogin={setLoggedIn}
    />
  ) : (
    <LoginScreen
      setLogin={setLoggedIn}
      setName={setReceivedName}
      setUsername={setReceivedUsername}
      setPassword={setReceivedPassword}
    />
  );
}
