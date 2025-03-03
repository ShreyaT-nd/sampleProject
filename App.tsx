import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'; 
import { enableScreens } from 'react-native-screens';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import { store, persistor } from "./store"; 
import HomeScreen from "./srcmain/screens/HomeScreen";
import CharacterDetail from "./srcmain/screens/DetailScreen";

enableScreens();  // had to add this because project was crashing in ios simulator

const Stack = createStackNavigator();

const App = () => { 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={CharacterDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
