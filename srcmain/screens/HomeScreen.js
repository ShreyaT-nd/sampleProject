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

  const loadCharacters = async () => {
    if (loading) return;
    setLoading(true);
    const data = await fetchCharacters(page);
    if (data) {
      setCharacters((prev) => [...prev, ...data.results]);
      setPage(page + 1);
    }
    setLoading(false);
  };

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CharacterCard character={item} onPress={() => navigation.navigate("Detail", { id: item.id })} />
      )}
      onEndReached={loadCharacters}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
    />
  );
};

export default HomeScreen;
