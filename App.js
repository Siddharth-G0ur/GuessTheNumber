import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Text,View,StyleSheet,SafeAreaView} from 'react-native';
import Card from "./FlipCard";

  var num=[];
  let count=0;
  for(let i=0;i<9;i++){
    num[i]={key:Math.floor(Math.random()*9)+1,
            value: Math.floor(Math.random()*100)+1
           };
  }
  var ans=num[Math.floor(Math.random()*9)];
  const num1=[num.slice(0,3).sort(() => Math.random() - 0.5),ans];
  const num2=[num.slice(3,6).sort(() => Math.random() - 0.5),ans];
  const num3=[num.slice(6,9).sort(() => Math.random() - 0.5),ans];
  
  console.log(ans);
 
export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>

      <View style={{alignItems:"center" }}>
        <Text style={{fontSize:40}}>Guess The Number</Text>
      </View>

          <View style={{flexDirection:"row"}}>
             <Card Prop={num1} />
             <Card Prop={num2} />
             <Card Prop={num3}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    alignItems:"center",
    justifyContent:"space-evenly",
  },
  
});
