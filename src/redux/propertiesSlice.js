// frontend/src/slices/propertiesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to add a new property
export const addProperty = createAsyncThunk(
  'properties/addProperty',
  async (propertyData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3003/api/properties/add-data', propertyData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch all properties
export const fetchProperties = createAsyncThunk(
  'properties/fetchProperties',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3003/api/properties');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to delete a property
export const deleteProperty = createAsyncThunk(
  'properties/deleteProperty',
  async (propertyId, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3003/api/properties/${propertyId}`);
      return propertyId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    properties: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle addProperty
      .addCase(addProperty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProperty.fulfilled, (state, action) => {
        state.loading = false;
        state.properties.push(action.payload);
      })
      .addCase(addProperty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || 'Failed to add property';
      })
      // Handle fetchProperties
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || 'Failed to fetch properties';
      })
      // Handle deleteProperty
      .addCase(deleteProperty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProperty.fulfilled, (state, action) => {
        state.loading = false;
        state.properties = state.properties.filter(
          (property) => property._id !== action.payload
        );
      })
      .addCase(deleteProperty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || 'Failed to delete property';
      });
  },
});

export default propertiesSlice.reducer;
