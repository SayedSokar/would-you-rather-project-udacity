import Home from './Home';
import { getInitialData } from '../utils/api';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RECEIVE_QUESTIONS } from '../store/questionsSlice'
import { RECEIVE_USERS } from '../store/usersSlice'

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Login from './Login';
import Nav from './Nav';
import UserCard from './UserCard';
import NewPoll from './NewPoll';
import Leaderboard from './Leaderboard';
import NoMatch from './NoMatch';
import {useState} from 'react'

function App() {
   const [authUser, setAuthUser] = useState(null)
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
      <Router>
        <div className="App">
          {authUser === null ? (
            <Route
              render={() => (
                <ContentGrid>
                  <Login />
                </ContentGrid>
              )}
            />
          ) : (
            <Fragment>
              <Nav />
              <ContentGrid>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/questions/bad_id" component={NoMatch} />
                  <Route path="/questions/:question_id" component={UserCard} />
                  <Route path="/add" component={NewPoll} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route component={NoMatch} />
                </Switch>
              </ContentGrid>
            </Fragment>
          )}
        </div>
      </Router>
    );
}

const ContentGrid = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

export default App;
