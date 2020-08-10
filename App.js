import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {StyleSheet, Platform} from 'react-native';

import {Scene, Router, Actions, Stack} from 'react-native-router-flux';

import {Home} from './components';

export default function App() {
  // useEffect(() => {
  // return Actions.home();
  // }, []);

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
            initial
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
}

const styles = StyleSheet.create({});
