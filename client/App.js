import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import 'cross-fetch/polyfill';
import Screen from './src/Screens/Screen';

const App = () => {
  const client = new ApolloClient({
    uri: 'http://10.0.2.2:3001/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Screen />
    </ApolloProvider>
  );
};

export default App;
