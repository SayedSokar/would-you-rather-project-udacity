import Home from './Home';
import { getInitialData } from '../utils/api';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RECEIVE_QUESTIONS } from '../store/questionsSlice'
import {RECEIVE_USERS} from '../store/usersSlice'
function App() {
  // const [users, setUsers] = useState([])
  // const [questions, setQuestions] = useState([])
  // const [data, setData] = useState([])
  const dispatch = useDispatch()
  
  useEffect(() => {
    return getInitialData().then(({ users, questions }) => {
        console.log(users, questions)
         dispatch(RECEIVE_QUESTIONS(questions))
          dispatch(RECEIVE_USERS(users))
        
      })
      
  }, [])
  
  

  return (
    <div className="App">
      
      <Home />,
      <div>
        
        

      </div>
     
       
      
      
    </div>
  );
}

export default App;
