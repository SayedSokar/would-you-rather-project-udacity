import { createSlice } from '@reduxjs/toolkit'
import { saveQuestionAnswer } from '../utils/api';
import { addAnswerToQuestion } from '../store/questionsSlice';

export const usersReducer = createSlice({
  name: 'users',
    initialState: {
        list:[]
    },
  reducers: {
    RECEIVE_USERS: (users, action) => {
      users.list = action.payload
      },
      ADD_ANSWER_TO_USER: (authUser, qid, answer) => {
          return {
              authUser,
              qid,
              answer
          }
        
      },
      ADD_QUESTION_TO_USER: ({ id, author }) => {
          return {
              id,
              author
          }
        
      },
    }
})


export function handleSaveQuestionAnswer(authUser, qid, answer) {
  return dispatch => {
    // dispatch(addAnswerToUser(authUser, qid, answer));
    // dispatch(addAnswerToQuestion(authUser, qid, answer));

    return saveQuestionAnswer(authUser, qid, answer).catch(e => {
      console.warn('Error in handleSaveQuestionAnswer:', e);
    });
  };
}


// Action creators are generated for each case reducer function
export const { RECEIVE_USERS } = usersReducer.actions

export default usersReducer.reducer