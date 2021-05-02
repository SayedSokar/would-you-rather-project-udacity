import { createSlice } from '@reduxjs/toolkit'


export const slice = createSlice({
  name: 'users',
    initialState: [],
  reducers: {
    RECEIVE_USERS: (users, action) => {
      users = action.payload
    },
    }
})


// Action creators are generated for each case reducer function
export const { RECEIVE_USERS } = slice.actions

export default slice.reducer