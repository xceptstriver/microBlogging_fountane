import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

import {Scene, Router, Actions, Stack} from 'react-native-router-flux';

import {Home} from './components';

const App = () => {
  useEffect(() => {
    return Actions.home();
  }, []);

  const stateHandler = (prevState, newState, action) => {
    console.log('onStateChange: ACTION:', action);
  };

  const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

  return (
    <>
      <Router
        onStateChange={stateHandler}
        sceneStyle={styles.scene}
        uriPrefix={prefix}>
        <Stack key="root">
          <Scene
            key="home"
            component={Home}
            title="Home"
            onEnter={() => console.log('Home: onEnter')}
            backTitle="Back"
            panHandlers={null}
            duration={1}
          />
        </Stack>
      </Router>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
