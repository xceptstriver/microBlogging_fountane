import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ListScreen from '../containers/ListScreen'
import PostScreen from '../containers/PostScreen'
import { Root } from "native-base"

const Stack = createStackNavigator()

function MainStackNavigator() {

  return (
   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='List' component={ListScreen} options={{headerShown:false}} />
        <Stack.Screen name='Post' component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default MainStackNavigator
