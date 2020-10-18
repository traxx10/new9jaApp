import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const WhatsNewScreen = () => {
  return (
    <View style={styles.container}>
      <Text> WhatsNewScreen</Text>
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

WhatsNewScreen.screenName = 'WhatsNewScreen';

export default WhatsNewScreen;
