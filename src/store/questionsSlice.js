import { createSlice } from '@reduxjs/toolkit'


export const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    list:[]
  },
  reducers: {
    RECEIVE_QUESTIONS: (questions, action) => {
      questions.list = action.payload
        
      
    },
    
      
    
      
    }
    

  
})

// Action creators are generated for each case reducer function
export const { RECEIVE_QUESTIONS } = questionsSlice.actions

export default questionsSlice.reducer