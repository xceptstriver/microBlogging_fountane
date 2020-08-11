import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {ThemeProvider} from 'react-native-elements';
import {StyleSheet, Platform} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';

import {Scene, Router, Actions, Stack} from 'react-native-router-flux';

import {Home, Login} from './screens';

export default function App() {
  const stateHandler = (prevState, newState, action) => {
    console.log('onStateChange: ACTION:', action);
  };

  const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

  return (
    <>
      <ThemeProvider>
        <Provider store={store}>
          <Router
            onStateChange={stateHandler}
            sceneStyle={styles.scene}
            uriPrefix={prefix}>
            <Stack key="root">
              <Scene
                key="login"
                initial
                component={Login}
                title="Login"
                type="reset"
                onEnter={() => console.log('Login: onEnter')}
                backTitle="Back"
                panHandlers={null}
                duration={1}
              />
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
        </Provider>
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({});
