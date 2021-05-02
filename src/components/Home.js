import React from 'react'
import { useSelector } from 'react-redux'
import { Tab } from 'semantic-ui-react';
import UserCard from './UserCard'
// import { RECEIVE_QUESTIONS } from './store/questionsSlic'

function Home() {
    // const [ check, setCheck ] = useState('s')

    const questions = useSelector(state => state.entities.questions.list)
    const users = useSelector(state => state.entities.users.list)

    // console.log('this is Dashboard the questions: ',questions, 'type is ==== ', typeof(questions))
     

     
    return <Tab panes={panes({ questions })} className="tab" />;
}
const panes = props => {
  const { questions } = props;
  return [
    {
      menuItem: 'Unanswered',
      render: () => (
        <Tab.Pane>
          {questions.answered.map(question => (
            <UserCard
              key={question.id}
              question_id={question.id}
              unanswered={true}
            />
          ))}
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Answered',
      render: () => (
        <Tab.Pane>
          {questions.unanswered.map(question => (
            <UserCard
              key={question.id}
              question_id={question.id}
              unanswered={false}
            />
          ))}
        </Tab.Pane>
      )
    }
  ];
};

export default Home
