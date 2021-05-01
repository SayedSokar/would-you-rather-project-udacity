import { createSlice } from '@reduxjs/toolkit'



// export function handleInitialData() {
//   return getInitialData().then(({ users, questions }) => {
//       { users, questions }
//     });
//   }; 



export const questionsSlic = createSlice({
  name: 'questions',
  initialState: {},
  reducers: {
    RECEIVE_QUESTIONS: (state, action) => {
      return {
        ...state,
        ...action.questions,
        
      }
      
    },
    RECEIVE_USERS: (state, action) => {
      return {
        ...state,
        ...action.users,
        
      }
      
    },
      
    
      
    }
    

  
})

// Action creators are generated for each case reducer function
export const { RECEIVE_QUESTIONS, RECEIVE_USERS } = questionsSlic.actions

export default questionsSlic.reducer