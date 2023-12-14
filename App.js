import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './Pages/Signup';
import LoginScreen from './Pages/Login';
import CodeVerification from './Pages/CodeVerification';
import Home from './Pages/Home';
import Deals from './Pages/Deals';
import Category from './Pages/Category';
import Menswear from './Pages/Menswear';
import Womenswear from './Pages/Womenswear';
import Groceries from './Pages/Groceries';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Groceries">
        <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CodeVerification" component={CodeVerification} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Deals" component={Deals} options={{ headerShown: false }} />
        <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
        <Stack.Screen name="Menswear" component={Menswear} options={{ headerShown: false }} />
        <Stack.Screen name="Womenswear" component={Womenswear} options={{ headerShown: false }} />
        <Stack.Screen name="Groceries" component={Groceries} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
