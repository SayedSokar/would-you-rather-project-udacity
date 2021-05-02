import { createSlice } from '@reduxjs/toolkit'


export const usersReducer = createSlice({
  name: 'users',
    initialState: {
        list:[]
    },
  reducers: {
    RECEIVE_USERS: (users, action) => {
      users.list = action.payload
    },
    }
})


// Action creators are generated for each case reducer function
export const { RECEIVE_USERS } = usersReducer.actions

export default usersReducer.reducer