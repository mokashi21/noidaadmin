// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from '../src/redux/propertiesSlice';
import financialsReducer from '../src/redux/financialsSlice';

export const store = configureStore({
  reducer: {
    properties: propertiesReducer,
    financials: financialsReducer,
  },
});
