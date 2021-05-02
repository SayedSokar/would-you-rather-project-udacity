import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Tab } from 'semantic-ui-react';
// import { RECEIVE_QUESTIONS } from './store/questionsSlic'

function Home() {
    // const [ check, setCheck ] = useState('s')

    const questions = useSelector(state => state.entities.questions.list)
    const users = useSelector(state => state.entities.users.list)

    // console.log('this is Dashboard the questions: ',questions, 'type is ==== ', typeof(questions))
     

     
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

export default Home
