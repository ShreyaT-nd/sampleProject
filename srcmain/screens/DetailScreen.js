import React, { useEffect, useState } from "react";  //useEffect fetches data when the components loads
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import { fetchCharacterById } from "../services/api";

const DetailScreen = ({ route }) => {   //detail screen receives id from route params
  const { id } = route.params; //containes the id i passed from homescreen by clicking the particular card
  const [character, setCharacter] = useState(null);

  useEffect(() => {                                 // this snippet fetches the character details from the API
    const loadCharacter = async () => {
      const data = await fetchCharacterById(id);
      setCharacter(data);
    };
    loadCharacter();
  }, [id]);

  if (!character) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  return (   //this displays the fecthed daya in the UI
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text>Status: {character.status}</Text>
      <Text>Species: {character.species}</Text>
      <Text>Origin: {character.origin.name}</Text>
      <Text>Created Date: {new Date(character.created).toDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  image: { width: 150, height: 150, borderRadius: 75 },
  name: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
});

export default DetailScreen;
