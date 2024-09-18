import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.links,
        headerShown: false
    }}>
        <Tabs.Screen name="home" options={{
            tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color} />,
            tabBarLabel: "Home",
            title: "Welcome Home",
        }}/>
        <Tabs.Screen name="about" options={{
            tabBarIcon: ({color}) => <Ionicons name="information-circle" size={24} color={color} />,
            tabBarLabel: "About",
            title: "All About Us"
        }}/>
        <Tabs.Screen name="products" options={{
            tabBarIcon: ({color}) => <Ionicons name="bag" size={24} color={color}/>,
            tabBarLabel: "Products",
            title: "Products"
        }}/>
        <Tabs.Screen name="contact" options={{
            tabBarIcon: ({color}) => <Ionicons name="mail" size={24} color={color}/>,
            tabBarLabel: "Contact",
            title: "Contact Us"
        }}/>
        
    </Tabs>
  )
}
