import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './homeScreen';
import ProfileScreen from './profileScreen';
import DataScreen from './dataScreen';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MyComponent() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    tabBar={({ navigation, state, descriptors, insets }) => (
      <BottomNavigation.Bar
        navigationState={state}
        safeAreaInsets={insets}
        style={{ backgroundColor: '#1F41BB', height: 55}} 
        onTabPress={({ route, preventDefault }) => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (event.defaultPrevented) {
            preventDefault();
          } else {
            navigation.dispatch({
              ...CommonActions.navigate(route.name, route.params),
              target: state.key,
            });
          }
        }}
        renderIcon={({ route, focused, color }) => {
          const { options } = descriptors[route.key];
          if (options.tabBarIcon) {
            return options.tabBarIcon({ focused, color, size: 24 });
          }

          return null;
        }}
        getLabelText={({ route }) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.title;
          return label;
        }}
      />
    )}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        // tabBarLabel: 'Home',
        tabBarLabelStyle: { color: '#1F41BB' },
        tabBarIcon: ({ color, size, focused }) => {
          return <Icon name="home" size={size} color={focused ? '#1F41BB' : 'white'} />;
        },
      }}
    />
    <Tab.Screen
      name="Data"
      component={DataScreen}
      options={{
        // tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size, focused }) => {
          return <FontAwesome name="tasks" size={20} color={focused ? '#1F41BB' : 'white'} style={{paddingTop: '8%'}}/>;
        },
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        // tabBarLabel: 'Profile',
        // if tabBarIcon is active icon color change to be #1F41BB
        tabBarIcon: ({ color, size, focused }) => {
          return <Icon name="account-circle" size={25} color={focused ? '#1F41BB' : 'white'} />;
        },
      }}
    />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});