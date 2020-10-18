import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const RateNowScreen = () => {
  return (
    <View style={styles.container}>
      <Text> RateNow Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

RateNowScreen.screenName = 'RateNowScreen';

export default RateNowScreen;
