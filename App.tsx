import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'; 
import { enableScreens } from 'react-native-screens';
import HomeScreen from "./srcmain/screens/HomeScreen";
import CharacterDetail from "./srcmain/screens/DetailScreen";

enableScreens();  // had to add this because project was crashing in ios simulator

const Stack = createStackNavigator();

const App = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={CharacterDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
