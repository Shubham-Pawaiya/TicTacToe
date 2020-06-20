import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

const Stack = createStackNavigator()

export default class App extends Component{
  render(){
    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Home' 
        component={FirstPage}
        options={{
          title:'TicTacToe',
          headerTitleAlign:'center',
          headerTintColor: 'white',
          headerStyle:{backgroundColor:'coral'}}}/>
        
        <Stack.Screen 
        name='Second' 
        component={SecondPage}
        options={{
          title:'Result',
          headerTitleAlign:'center',
          headerTintColor: 'white',
          headerLeft: null,
          headerStyle:{backgroundColor:'coral'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
};
