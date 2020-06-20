import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
const naviagation = naviagation;

export default class FirstPage extends Component{

  constructor(props){
    super(props);
    const { navigation } = props;
    this.state = {
      gameState: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ],

      currentPlayer: 1,
    };
  }
  
  
componentDidMount(){
  this.initializeGame();
};

initializeGame = () => {
    this.setState({ gameState: [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ],
    currentPlayer: 1,
  });
  };

  GetWinner = () => {
    const numTiles = 3;
    var arr = this.state.gameState;
    var sum;

    //Checking Winner For Row.
    for(var i = 0; i < numTiles; i++){
     
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if(sum == 3){
        return 1;
      }
      else if(sum == -3){
        return -1;
      }
    }

    //Checking Winner For Column.
    for(var i = 0; i < numTiles; i++){
     
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if(sum == 3){
        return 1;
      }
      else if(sum == -3){
        return -1;
      }
    }

    //Checking Winner For Diagonal 1.
    sum = arr[0][0] + arr[1][1] + arr[2][2];
      if(sum == 3){
        return 1;
      }
      else if(sum == -3){
        return -1;
      }

    //Checking Winner For Diagonal 1.
    sum = arr[0][2] + arr[1][1] + arr[2][0];
    if(sum == 3){
      return 1;
    }
    else if(sum == -3){
      return -1;
    }

    return 0;
  };

  onTilePress = (row, col) =>{
   
    // Not Allowing Tile to Change.
    var value = this.state.gameState[row][col];
    if(value !== 0) {return;}

    // Taking Value of Current Player.
    var currentPlayer = this.state.currentPlayer;

    // Changing Value of Tile.
    var arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});

    // Switching To Next Player.
    var nextPlayer = (currentPlayer == 1) ? -1 : 1;
    this.setState({currentPlayer: nextPlayer});

    // Winner
    var winner = this.GetWinner();
    var message;
    if(winner == 1){

      message = 'Player 1 Won The Game';
      this.props.navigation.navigate('Second', {message})
      this.initializeGame();
    }
    else if(winner == -1){
      message = 'Player 2 Won The Game';
      this.props.navigation.navigate('Second',  {message})
      this.initializeGame();
    }
  };

  renderIcon = (row, col) => {
    var value = this.state.gameState[row][col];
    switch(value){
      case 1:
        return (<Text style = {styles.tileX}>X</Text>);
      case -1:
        return (<Text style = {styles.tileO}>O</Text>);
      default: 
        return (<View/>)
  }
  };


  render(){
    return(
      <View style = {styles.container}>
        
        <View style ={{flexDirection: 'row'}}>
          <TouchableOpacity onPress = {() => this.onTilePress(0,0)} style = {[styles.Tile, {borderLeftWidth: 0, borderTopWidth: 0}]}>
            {this.renderIcon(0,0)}
          </TouchableOpacity>
       
       <TouchableOpacity onPress = {() => this.onTilePress(0,1)} style = {[styles.Tile, {borderTopWidth: 0}]}>
         {this.renderIcon(0,1)}
       </TouchableOpacity>
      
       <TouchableOpacity onPress = {() => this.onTilePress(0,2)} style = {[styles.Tile, {borderTopWidth: 0, borderRightWidth: 0}]}>
         {this.renderIcon(0,2)} 
       </TouchableOpacity>
       
      </View>
      
      <View style ={{flexDirection: 'row'}}>
      
       <TouchableOpacity onPress = {() => this.onTilePress(1,0)} style = {[styles.Tile, {borderLeftWidth: 0}]}>
       {this.renderIcon(1,0)}
       </TouchableOpacity>
       
       <TouchableOpacity onPress = {() => this.onTilePress(1,1)} style = {[styles.Tile]}>
       {this.renderIcon(1,1)}
       </TouchableOpacity>
      
       <TouchableOpacity onPress = {() => this.onTilePress(1,2)} style = {[styles.Tile, {borderRightWidth: 0}]}>
       {this.renderIcon(1,2)}
       </TouchableOpacity>
       
      </View>
      
      <View style ={{flexDirection: 'row'}}>
       
       <TouchableOpacity onPress = {() => this.onTilePress(2,0)} style = {[styles.Tile, {borderLeftWidth: 0, borderBottomWidth: 0}]}>
       {this.renderIcon(2,0)}
       </TouchableOpacity>
       
       <TouchableOpacity onPress = {() => this.onTilePress(2,1)} style = {[styles.Tile, {borderBottomWidth: 0}]}>
       {this.renderIcon(2,1)}
       </TouchableOpacity>

       <TouchableOpacity onPress = {() => this.onTilePress(2,2)} style = {[styles.Tile, {borderBottomWidth: 0, borderRightWidth: 0}]}>
       {this.renderIcon(2,2)}
       </TouchableOpacity>

      </View>
      
      <View style={{padding: 50}}>
        <Button
        title='Reset' 
        color='coral'
        onPress={() => this.initializeGame()}/>
      </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 50,
  },
  
  Tile:{
    borderWidth: 1.5,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileX:{
    color: 'red',
    fontSize: 70,
  },
  tileO:{
    color: 'green',
    fontSize: 70,
  },
});
