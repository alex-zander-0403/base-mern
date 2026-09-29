import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//
export const getItems = createAsyncThunk(
  "GET_ITEMS",
  async (_arg, thunkAPI) => {
    try {
      return await itemService.getItems();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: null,
    isError: false,
    isLoading: false,
    message: "",
  },
});

export default itemsSlice.reducer;
