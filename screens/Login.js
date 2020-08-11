import React from 'react';
import {View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import {Spacer} from '../components';

export default function Login(props) {
  const handleLogin = () => {
    Actions.home();
  };

  return (
    <>
      <View>
        <Spacer y={1} />
        <Input
          inputStyle={{color: '#999'}}
          placeholder="Email"
          label="Email"
          labelStyle={{color: '#999'}}
          leftIcon={{
            type: 'feathericons',
            name: 'mail',
            color: '#999',
          }}></Input>
        <Spacer y={1} />
        <Input
          inputStyle={{color: '#999'}}
          placeholder="Password"
          secureTextEntry
          label="Password"
          labelStyle={{color: '#999'}}
          leftIcon={{
            type: 'feathericons',
            name: 'lock',
            color: '#999',
          }}></Input>
        <Spacer y={1} />
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
