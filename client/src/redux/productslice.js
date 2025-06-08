import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../utils/api";

const productInitialState = {
  items: [],
  status: "idle",
  error: null,
};

const filterInitialState = {
  category: [],
  subCategory: [],
  sort: "",
  search: "",
  minPrice: 0,
  maxPrice: 1000,
  page: 1,
  limit: 12,
};

const isDeployed = import.meta.env.PROD;

export const getProducts = createAsyncThunk(
  "products/fetchProducts",
  async (filters, thunkAPI) => {
    const params = {
      category: filters.category,
      subCategory: filters.subCategory,
      "price[gte]": filters.minPrice,
      "price[lte]": filters.maxPrice,
      sort: filters.sort,
      page: filters.page,
      limit: filters.limit,
    };

    try {
      const endpoint = isDeployed ? "/actualProducts" : "/testingProducts";
      const response = await api.get(endpoint, { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || "network error"
      );
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: productInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setFilters: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { setFilters } = filterSlice.actions;
export const productReducer = productSlice.reducer;
export const filterReducer = filterSlice.reducer;
