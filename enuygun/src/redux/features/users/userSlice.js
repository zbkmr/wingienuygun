import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { generateFakeUsers } from '@/utils/generateFakeUsers';

const initialState = {
    users: []
}
export const getUsers = createAsyncThunk('getUsers', async()=> {
    const data = await generateFakeUsers(15)
    return data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
})

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    incrementRate: (state, action) => {
      const tableItem = state.users.find((item)=> item.id === action.payload.id)
      tableItem.rating = tableItem.rating+1;
      state.users = state.users.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload
    })
  }
})

export const {incrementRate} = usersSlice.actions;
export default usersSlice.reducer