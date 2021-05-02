import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'authUser',
  initialState: null,
  reducers: {
    SET_AUTHUSER: (authUser, action) => {
      return action.payload.id
          
    },
    }
})

// Action creators are generated for each case reducer function
export const { SET_AUTHUSER } = authSlice.actions

export default authSlice.reducer