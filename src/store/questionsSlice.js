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
    ADD_ANSWER_TO_QUESTION: (questions, action) => {
      action.payload.authUser,
        action.payload.id,
        action.payload.answer
    },
    ADD_QUESTION: (question) => {
      question
    },
      
    
      
    }
    

  
})

//-------------------------------------------
export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      question => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      }
    );
  };
}


///----------------------------------------



// Action creators are generated for each case reducer function
export const { RECEIVE_QUESTIONS } = questionsSlice.actions

export default questionsSlice.reducer