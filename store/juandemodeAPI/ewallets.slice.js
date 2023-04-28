import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_ewallet_list = createAsyncThunk(
  "ewallets/api_v1_ewallet_list",
  async payload => {
    const response = await apiService.api_v1_ewallet_list(payload)
    return response.data
  }
)
export const api_v1_ewallet_create = createAsyncThunk(
  "ewallets/api_v1_ewallet_create",
  async payload => {
    const response = await apiService.api_v1_ewallet_create(payload)
    return response.data
  }
)
export const api_v1_ewallet_retrieve = createAsyncThunk(
  "ewallets/api_v1_ewallet_retrieve",
  async payload => {
    const response = await apiService.api_v1_ewallet_retrieve(payload)
    return response.data
  }
)
export const api_v1_ewallet_update = createAsyncThunk(
  "ewallets/api_v1_ewallet_update",
  async payload => {
    const response = await apiService.api_v1_ewallet_update(payload)
    return response.data
  }
)
export const api_v1_ewallet_partial_update = createAsyncThunk(
  "ewallets/api_v1_ewallet_partial_update",
  async payload => {
    const response = await apiService.api_v1_ewallet_partial_update(payload)
    return response.data
  }
)
export const api_v1_ewallet_destroy = createAsyncThunk(
  "ewallets/api_v1_ewallet_destroy",
  async payload => {
    const response = await apiService.api_v1_ewallet_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const ewalletsSlice = createSlice({
  name: "ewallets",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_ewallet_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ewallet_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_ewallet_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ewallet_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ewallet_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_ewallet_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ewallet_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ewallet_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_ewallet_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ewallet_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ewallet_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_ewallet_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ewallet_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ewallet_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_ewallet_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_ewallet_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_ewallet_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_ewallet_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_ewallet_list,
  api_v1_ewallet_create,
  api_v1_ewallet_retrieve,
  api_v1_ewallet_update,
  api_v1_ewallet_partial_update,
  api_v1_ewallet_destroy,
  slice: ewalletsSlice
}
