import React from 'react';
import ApolloProvider, { client } from './src/apollo/client/client';
import Routes from './src/routes/Routes';

// const initData = () => {
//   client.writeData({
//     data: {
//       authToken: {
//         __typename: 'Token',
//         id: '',
//       },
//       user: {
//         __typename: 'User',
//         id: '',
//         name: '',
//         role: '',
//       },
//     },
//   })
// }

// initData();
// client.onResetStore(async () => initData());
// client.onClearStore(async () => initData());

export default () => (
  <ApolloProvider client={client}>
    <Routes/>
  </ApolloProvider>
);
