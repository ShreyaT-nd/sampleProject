import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import NetInfo from '@react-native-community/netinfo';

// Async action to fetch characters from API
export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (_, { getState }) => {
    const netInfo = await NetInfo.fetch();
    
    // If offline, return cached data
    if (!netInfo.isConnected) {
      return getState().characters.data;
    }

    // Fetch new data if online
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data.results;
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default charactersSlice.reducer;
