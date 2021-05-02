import { createSlice } from '@reduxjs/toolkit'


export const questionsSlice = createSlice({
  name: 'questions',
  initialState: {},
  reducers: {
    RECEIVE_QUESTIONS: (state, action) => {
      return {
        ...state,
        ...action.questions,
        
      }
      
    },
        
      
    }
    

  
})


// Action creators are generated for each case reducer function
export const { RECEIVE_QUESTIONS } = questionsSlice.actions

export default questionsSlice.reducer