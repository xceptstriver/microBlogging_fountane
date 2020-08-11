import React, {useEffect, useReducer, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import Toast, {DURATION} from 'react-native-easy-toast';
import {Spacer} from '../components';

const Home = ({count, asyncIncrement, increment}) => {
  const toast = useRef();
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   if (count > 0) {
  //     toast.current.show('Updated');
  //   }
  // }, [count]);

  const handleIncrement = (e) => {
    increment(1);
    toast.current.show('updated');
  };

  const handleIncrementAsync = async (e) => {
    setLoading(true);
    await asyncIncrement(1);
    toast.current.show('updated async');
    setLoading(false);
  };

  return (
    <>
      <View>
        <Toast position="center" ref={toast} />
        <Spacer y={2} />
        <Text>{count}</Text>
        <Spacer y={2} />
        <Button title="Increment" onPress={handleIncrement} />
        <Spacer y={2} />
        <Button
          loading={loading}
          title="Increment Async"
          onPress={handleIncrementAsync}
        />
      </View>
    </>
  );
};

const mapState = (state) => ({
  count: state.count,
});

const mapDispatch = (dispatch) => ({
  increment: dispatch.count.increment,
  asyncIncrement: dispatch.count.incrementAsync,
});

export default connect(mapState, mapDispatch)(Home);
