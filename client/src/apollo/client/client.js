import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';
import { withClientState } from 'apollo-link-state';
import { AsyncStorage } from 'react-native';
import resolvers from './resolvers';
import defaults from './Defaults';

const cache = new InMemoryCache();
const stateLink = withClientState({ cache, resolvers, defaults });

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, path }) => {
      console.log(`[GraphQL Error]: Message: ${message}, Path: ${path}`);
    });
  }

  if (networkError) {
    console.log(
      `[ network error: ${networkError.message} ] Operation: ${operation.operationName}`
    )
  }
});

const authLink = setContext((_, { headers, ...rest }) => {
  return AsyncStorage.getItem('token', (error, result) => {
    if (error) {
      throw new Error(error);
    }

    return {
      ...rest,
      headers: {
        ...headers,
        authorization: `Bearer ${result}`
      },
    };
  });
});

const httpLink = new HttpLink({ uri: 'http://192.168.1.39:5000/' });

const link = ApolloLink.from([errorLink, stateLink, authLink, httpLink]);

const client = new ApolloClient({ cache, link });

export { ApolloProvider as default, client };