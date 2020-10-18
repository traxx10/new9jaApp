import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SurveyScreen = () => {
  return (
    <View style={styles.container}>
      <Text> SurveyScreen</Text>
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

SurveyScreen.screenName = 'SurveyScreen';

export default SurveyScreen;
