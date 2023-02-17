import React from 'react';
import { Text, View } from 'react-native';

export function DemoComponent({ text }: { text: string }): JSX.Element {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
