import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { DemoComponent } from 'react-native-demo-sdk';

export default function App() {
  return (
    <View style={styles.container}>
      <DemoComponent text="Hello world" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
