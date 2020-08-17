import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/reducers';
//Stack Navigator
import MainStackNavigator from './src/navigation/AppNavigator'
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga'; 
import { Root } from 'native-base';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


export default class App extends Component {

  render() {
      return (
          <Provider store={store}>
             <Root>
              <MainStackNavigator />
             </Root>
          </Provider>
         
      );
  }
  
}

/* const App = () => (
  <Provider store={store}>
      <MainStackNavigator />
  </Provider>
);
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('rnboiler', () => App); */



/* export default function App() {
  return <MainStackNavigator />
} */