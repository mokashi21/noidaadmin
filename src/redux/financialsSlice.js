// src/features/properties/propertiesSlice.js
import { createSlice,  } from '@reduxjs/toolkit';


const financialsSlice = createSlice({
  name: 'properties',
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  reducers: {},

});

export default financialsSlice.reducer;
