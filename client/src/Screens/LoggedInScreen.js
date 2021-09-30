import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {useQuery, useMutation} from '@apollo/client';
import {GET_ALL_USERS} from '../Graphql/Queries';
import {DELETE_USER} from '../Graphql/Mutation';

export default function LoginScreen(props) {
  const forceUpdate = React.useReducer(() => ({}), {})[1];

  const onSubmit = () => {
    props.setLogin(false);
  };

  const handleDelete = () => {
    refetch();
    forceUpdate();
  };

  const {data, refetch} = useQuery(GET_ALL_USERS, {enabled: false});
  const [deleteUser, {error}] = useMutation(DELETE_USER);

  useEffect(() => {
    handleDelete();
  }, []);

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
            <View style={{flexDirection: 'row'}} key={e.id}>
              <Text>{e.name} as </Text>
              <Text>{e.username}</Text>
              <Button
                title="Delete"
                onPress={() => {
                  deleteUser({variables: {id: e.id}});
                  handleDelete();
                }}
              />
            </View>
          );
        })}
      <View style={{flex: 1}}>
        <Button title="Logout" color="black" onPress={onSubmit} />
      </View>
    </View>
  );
}
