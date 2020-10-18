import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text> MoreScreen</Text>
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

MoreScreen.screenName = 'MoreScreen';

export default MoreScreen;
