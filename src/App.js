import './App.css';
import DashboardCount from './DashboardCount';
import { getInitialData } from './utils/api';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {RECEIVE_QUESTIONS, RECEIVE_USERS} from './store/questionsSlic'

function App() {
  const [users, setUsers] = useState([])
  const [questions, setQuestions] = useState([])
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  
  useEffect(() => {
    return getInitialData()
      .then(response => {
        
         setUsers(response.users)
        setQuestions(response.questions)
        setData (response)
        
      })
      
  }, [])
  
  console.log("this is the response data === ", data.questions)
  dispatch(RECEIVE_QUESTIONS(data.questions))
  dispatch(RECEIVE_USERS(data.users))

  return (
    <div className="App">
      
      <DashboardCount />,
      <div>
        
        

      </div>
     
       
      
      
    </div>
  );
}

export default App;
