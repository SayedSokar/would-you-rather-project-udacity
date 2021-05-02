import { createSlice } from '@reduxjs/toolkit'



// export function handleInitialData() {
//   return getInitialData().then(({ users, questions }) => {
//       { users, questions }
//     });
//   }; 



export const questionsSlic = createSlice({
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
export const { RECEIVE_QUESTIONS } = questionsSlic.actions

export default questionsSlic.reducer