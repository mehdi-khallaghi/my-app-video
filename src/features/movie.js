import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchMovie = createAsyncThunk('get/fetch', async () => {
  try {
    const response = await fetch("https://parseapi.back4app.com/classes/movie", {
      headers: {
        "X-Parse-Application-Id": " HFUbZ9kF8sSlRVb8WnHhC8AXiFRJqbaL3W8u2u5E",
        "X-Parse-REST-API-Key": "L9O1pqNiuv6m36FePsxxXqI9u3kw7QQRkh0XjrRa",
      }
    })

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
});

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movieList: [],
    loading: false,
    errorMessage: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.movieList = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.error;
      });
  }

});
export default movieSlice.reducer;