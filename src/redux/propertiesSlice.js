import { createSlice,  } from '@reduxjs/toolkit';


const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  reducers: {},

});

export default propertiesSlice.reducer;
