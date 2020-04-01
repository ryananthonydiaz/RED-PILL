import React, { useState } from 'react';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import ApolloProvider, { client } from './src/apollo/client/client';
import { Provider as UserProvider } from './src/context/UserContext';
import Routes from './src/routes/Routes';

export default () => {
  const [isReady, setIsReady] = useState(false);

cacheImages = (images) => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

_loadAssetsAsync = async () => {
  const imageAssets = cacheImages([
    require('./src/assets/splash.jpg'),
    require('./src/assets/idea.png'),
  ]);

  await Promise.all([...imageAssets]);
  setIsReady(true);
}

if (isReady === false) {
  return (
    <AppLoading
      startAsync={_loadAssetsAsync}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );
}
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Routes/>
      </UserProvider>
    </ApolloProvider>
  );
};
