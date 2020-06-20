import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';


export default class App extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.message}>
                    {this.props.route.params.message}
                </Text>
                
                <View style={{padding: 50}}>
                    <Button  
                    title='New Game' 
                    color='coral'
                    onPress={() => this.props.navigation.pop()}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    message:{
        fontSize: 22,
    }
    
    
  });