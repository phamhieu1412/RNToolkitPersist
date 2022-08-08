import React from 'react';
import {StyleSheet, Text, Button, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {selectCount, increment, decrement} from '../slices';

const HomeScreen = () => {
  const count = useSelector(selectCount); // getting the counter value
  const dispatch = useDispatch(); // will use dispatch to call actions
  return (
    <SafeAreaView style={styles.container}>
      <Text>Counter Value = {count}</Text>
      <Button title="increment" onPress={() => dispatch(increment())} />
      <Button title="decrement" onPress={() => dispatch(decrement())} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
