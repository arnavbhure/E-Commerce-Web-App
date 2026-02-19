import { createSlice } from "@reduxjs/toolkit";

const FetchDoneSlice = createSlice({
  name: "fetch",
  initialState: {
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  reducers: {
    setLoading: (state) => { state.status = "loading"; },
    setSucceeded: (state) => { state.status = "succeeded"; },
    setFailed: (state) => { state.status = "failed"; },
  },
});

export default FetchDoneSlice;
export const FetchDoneActions = FetchDoneSlice.actions;
