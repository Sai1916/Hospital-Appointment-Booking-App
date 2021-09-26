import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import {AntDesign,Feather,Ionicons} from 'react-native-vector-icons'
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function RootNavigation() {
  return (
      <>
        <Tab.Navigator tabBarOptions={{ showLabel: false }}>
            <Tab.Screen  
                name="Home"
                component={HomeScreen} 
                options={{ 
                    tabBarIcon : ({ color }) =><Feather name="home" size={26} color={color} />,
                    
                }}
            />
            <Tab.Screen 
                name="Schedule" 
                component={ScheduleScreen} 
                options = {{
                    tabBarIcon : ({ color }) =><Ionicons name="calendar-outline" size={26} color={color} />,
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options = {{
                    tabBarIcon : ({ color }) =><AntDesign name="user" size={26} color={color} />,
                }}
            />
        </Tab.Navigator>
      </>
  );
}