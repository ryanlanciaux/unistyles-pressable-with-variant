import { Link, Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Text>This screen doesn't exist.</Text>
    </>
  );
}

