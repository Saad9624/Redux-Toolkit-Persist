import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {
  increment,
  incrementByAmount,
  decrement,
} from './../../features/counter/counterSlice';
import {useSelector, useDispatch} from 'react-redux';

const Login = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text style={{fontSize: 20, alignSelf: 'center', margin: 20}}>
          Login{count}
        </Text>

        <Button onPress={() => dispatch(increment())} title="increase" />

        <View style={{margin: 10}} />

        <Button onPress={() => dispatch(decrement())} title="decrease" />

        <View style={{margin: 10}} />

        <Button
          onPress={() => dispatch(incrementByAmount(5))}
          title="increase with payload 5"
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
