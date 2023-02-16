import React from "react";
import { View, StyleSheet, Text, Pressable,ScrollView } from "react-native";

function GoalList(props) {

    const deleteHandler=()=>{
        props.onDeleteItem(props.id)
    }
  return (
     <Pressable onPress={deleteHandler} android_ripple={{color:'red'}} style={({pressed})=>{pressed && styles.pressedItem}}>
        <View style={styles.inputView}>
        <Text style={styles.input}>{props.text}</Text>
        </View>
     </Pressable>
  
  );
}

export default GoalList;

const styles = StyleSheet.create({
  inputView: {
    margin: 5,
    borderColor: "pink",
    borderWidth: 1,
    width: "90%",
    backgroundColor: "#cb416b",
    borderRadius: 4,
    height: 40,
    padding: 8,
    textTransform:'upper-case'
  },
  input: {
    color: "#fff",
  },
  pressedItem:{
    opacity:0.4
  }
});
