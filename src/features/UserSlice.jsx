// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import "tailwindcss/tailwind.css";

// export const getUsers = createAsyncThunk("users/getUsers", async () => {
//   try {
//     const request1 = await axios.get("https://reqres.in/api/users?page=1");
//     const request2 = await axios.get("https://reqres.in/api/users?page=2");
//     const response = await axios.all([request1, request2]);
//     return response.flatMap((res) => res.data.data);
//   } catch (error) {
//     throw new Error(error.message);
//   }
// });

const UserSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null,
    color: null,
  },
  reducers: {
    changeColor(state, action) {
      state.color = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getUsers.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(getUsers.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.data = action.payload;
  //     })
  //     .addCase(getUsers.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     });
  // },
});
export const { changeColor } = UserSlice.actions;
export default UserSlice.reducer;
