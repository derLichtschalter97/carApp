import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login';
import Tabs from './components/tabs';
import applicationStore from "./store"
import {Provider} from 'mobx-react'


const Stack = createNativeStackNavigator();


function App() {
  return (
    <Provider store={applicationStore}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login', headerShown: false}}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{title: '', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;