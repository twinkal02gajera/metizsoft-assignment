import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import map from './src/screen/map';
import myTrip from './src/screen/myTrip';
import savedPlaces from './src/screen/savedPlaces';
import planTrip from './src/screen/planTrip';
import profile from './src/screen/profile';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
       <Tab.Screen name="Map" component={map} />
        <Tab.Screen name="My trips" component={myTrip} />
        <Tab.Screen name="Saved Places" component={savedPlaces} />
        <Tab.Screen name="Paln trip" component={planTrip} />
        <Tab.Screen name="Profile" component={profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}