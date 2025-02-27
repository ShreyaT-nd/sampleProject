import React, { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { fetchCharacters } from "../services/api";
import CharacterCard from "../components/CharacterCard";

const HomeScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCharacters();
  }, []);

 //http get request to fetch list of characters from the API
  const loadCharacter = async () => {
    if (loading) return; 
    setLoading(true);  //data being fetched
    const data = await fetchCharacters(page); //response from API is stored in variable data
    if (data) {
      setCharacters((prev) => [...prev, ...data.results]);
      setPage(page + 1); //for next API call to get new data (this happens when we do infinite scrolling)
    }
    setLoading(false); //to show that current API call is over and next one can be done
  };

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CharacterCard character={item} onPress={() => navigation.navigate("Detail", { id: item.id })} />  // when character card is pressed this line is called
      )}                                                                    
      onEndReached={loadCharacters}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
    />
  );
};

export default HomeScreen;
