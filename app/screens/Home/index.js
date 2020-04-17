import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function Home() {
  const sampleText = 'React Native Boilerplate is a starting point for React Native application. This project is configured with redux, redux saga and redux persist. Uses latest version of react-navigation (v5)'
  
  const sampleText2 = 'Features\nUses React Hooks\nReact Navigation\nReact Native Gesture Handler\nReact Native Paper\nReact Native Vector Icons\nRedux with hooks support\nRedux Saga\nRedux Persist\nJest\nEslint (Airbnb config)'
  return (
    <View style={styles.container}>
      <Text style={{margin:10}}>{sampleText}</Text>
      <Text style={{margin:10}}>{sampleText2}</Text>

    </View>
  );
}
