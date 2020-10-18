import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const OpineScreen = () => {
  return (
    <View style={styles.container}>
      <Text> OpineScreen</Text>
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

OpineScreen.screenName = 'OpineScreen';

export default OpineScreen;
