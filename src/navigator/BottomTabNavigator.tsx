import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/homeScreen";
import { ProfileScreen } from "../screens/profileScreen";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScoreScreen } from "../screens/scoreScreen";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#14FF00' }, 
        tabBarActiveTintColor: '#ffffff', 
        tabBarInactiveTintColor: '#888888' 
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ 
          tabBarLabel: "Home", 
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Puntajes"
        component={ScoreScreen}
        options={{ 
          tabBarLabel: "Puntajes",
          tabBarIcon: ({ color, size }) => (
            <Icon name="format-list-bulleted" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{ 
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};