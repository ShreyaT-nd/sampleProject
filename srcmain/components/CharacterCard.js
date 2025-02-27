import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CharacterCard = ({ character, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{character.name}</Text>
        <Text>Status: {character.status}</Text>
        <Text>Species: {character.species}</Text>
        <Text>Origin: {character.origin.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff", 
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 3,
  },
  image: { 
    width: 80, 
    height: 80, 
    borderRadius: 40 
},
  info: { 
    marginLeft: 10 
},
  name: { 
    fontSize: 18, 
    fontWeight: "bold" 
},
});

export default CharacterCard;
