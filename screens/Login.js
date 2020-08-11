import React from 'react';
import {View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default function Login(props) {
  const handleLogin = () => {
    Actions.home();
  };

  return (
    <>
      <View>
        <Input
          placeholder="Email"
          leftIcon={{
            type: 'feathericons',
            name: 'mail',
          }}></Input>
        <Input
          placeholder="Password"
          type="password"
          leftIcon={{
            type: 'feathericons',
            name: 'lock',
          }}></Input>
        <Button
          onPress={handleLogin}
          title="Login"
          iconRight
          icon={{
            name: 'chevron-right',
            size: 15,
            color: 'white',
          }}
        />
      </View>
    </>
  );
}
