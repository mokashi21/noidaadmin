import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL for API
const API_URL = 'http://localhost:3003/api';

export const addFinancialRecord = createAsyncThunk(
  'financials/addFinancialRecord',
  async (financialData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/financial-records/add-financial-data`, financialData);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: 'Network Error' });
      }
    }
  }
);

// Async thunk to fetch financial records
export const fetchFinancialRecords = createAsyncThunk(
  'financials/fetchFinancialRecords',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/financial-records`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: 'Network Error' });
      }
    }
  }
);

// Async thunk to delete a financial record
export const deleteFinancialRecord = createAsyncThunk(
  'financials/deleteFinancialRecord',
  async (recordId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/financial-records/${recordId}`);
      return recordId;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue({ message: 'Network Error' });
      }
    }
  }
);

const financialsSlice = createSlice({
  name: 'financials',
  initialState: {
    financialRecords: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle addFinancialRecord
      .addCase(addFinancialRecord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addFinancialRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.financialRecords.push(action.payload);
      })
      .addCase(addFinancialRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || 'Failed to add financial record';
      })
      // Handle fetchFinancialRecords
      .addCase(fetchFinancialRecords.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFinancialRecords.fulfilled, (state, action) => {
        state.loading = false;
        state.financialRecords = action.payload;
      })
      .addCase(fetchFinancialRecords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || 'Failed to fetch financial records';
      })
      // Handle deleteFinancialRecord
      .addCase(deleteFinancialRecord.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteFinancialRecord.fulfilled, (state, action) => {
        state.loading = false;
        state.financialRecords = state.financialRecords.filter(
          (record) => record._id !== action.payload
        );
      })
      .addCase(deleteFinancialRecord.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || 'Failed to delete financial record';
      });
  },
});

export default financialsSlice.reducer;
