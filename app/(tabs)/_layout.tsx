import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Iconicon from 'react-native-vector-icons/Ionicons';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <EntypoIcon name="home" size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color, size }) => <Iconicon name="analytics" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
