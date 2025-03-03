import React, { useEffect } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../CharacterSlice"; // ✅ Correct path

import CharacterCard from "../components/CharacterCard";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data: characters, loading } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters()); // Fetch characters from Redux store
  }, [dispatch]);

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CharacterCard character={item} onPress={() => navigation.navigate("Detail", { id: item.id })} />
      )}
      onEndReached={() => dispatch(fetchCharacters())} // Fetch more data when scrolling
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
    />
  );
};

export default HomeScreen;
