import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import test from './components/test'
import store from './store/configureStore'
// import { RECEIVE_QUESTIONS } from './store/questionsSlic'

function DashboardCount() {
    // const [ check, setCheck ] = useState('s')
const arr1='6ni6ok3ym7mf1p33lnez'
    const questions = useSelector(state => state)
    console.log('this is Dashboard the questions: ',questions)
     

    //  console.log(store)
    
    return (
        <div className="home">
            <h3>this is home </h3>

            {
                Object.entries(questions).map((question) => (
                    <div className="blog-preview" key={ question.id }>
                        <h3>
                            { question[1].id }
                            
                        </h3>
                    </div>
                    // <test question_author={ question[1].author }/>

                    
                //  console.log(question[1].author)
                ))
            }


            
        </div>
        
    );
}

export default DashboardCount
