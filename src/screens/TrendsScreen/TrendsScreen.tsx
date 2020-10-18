import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const TrendsScreen = () => {
  return (
    <View style={styles.container}>
      <Text> TrendsScreen</Text>
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

TrendsScreen.screenName = 'TrendsScreen';

export default TrendsScreen;
