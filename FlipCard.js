import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Pressable } from 'react-native';
import FlipCard from "react-native-flip-card-plus";



export default class Card extends Component {
  constructor(props) {
    super(props);
    this.multiCardRef = [];
    this.state = {
      cards: this.props.Prop[0],
      ans:this.props.Prop[1],
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.state.cards.map((item, index) => {
          return (
            <>
              <FlipCard
                flipDirection={'h'}
                style={styles.cardContainer}
                ref={(card) => (this.multiCardRef['card' + index] = card)}>
                <Pressable
                  style={styles.card}
                  onPress={() => {this.multiCardRef['card' + index].flipHorizontal(item,this.state.ans)}}>
                  <Text style={styles.label}>?</Text>
                </Pressable>
                <Pressable style={styles.card}>
                  <Text style={styles.label}>{item.value}</Text>
                </Pressable>
              </FlipCard>
            </>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:"space-around",
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardContainer: {
    width: 122,
    height: 122,
    justifyContent: 'space-around',
    margin:5,
  },
  card: {
    width: 122,
    height: 122,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor:'#FF0000',
    borderRadius: 5
  },
  label: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'System',
    color: '#ffffff',
  },
});