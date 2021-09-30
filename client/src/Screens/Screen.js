import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import LoginScreen from './LoginScreen';
import LoggedInScreen from './LoggedInScreen';

export default function Screen() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [receivedName, setReceivedName] = useState();
  const [receivedUsername, setReceivedUsername] = useState();

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
    />
  );
}
