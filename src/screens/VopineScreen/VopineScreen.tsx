import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const VopineScreen = () => {
  return (
    <View style={styles.container}>
      <Text> VopineScreen</Text>
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

VopineScreen.screenName = 'VopineScreen';

export default VopineScreen;
