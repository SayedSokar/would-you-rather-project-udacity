import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Grid,
  Header,
  Image,
  Form,
  Loader,
  Dimmer
} from 'semantic-ui-react';
import {useState} from 'react'
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';



function Login() {
  const [loading, setLoading] = useState(false)
  const users = useSelector(state => state.entities.users.list)
  console.log('here is the userssss === >', users)
  
  

  //----------------------------------------
    const handleLoading = () => {
    setLoading(true);
  };
  //----------------------------------------
 
  //----------------------------------------
      return (
      <Fragment>
        <Segment.Group>
          <LoginHeader />
          <LoginGridLayout
            image={<BrandImage />}
              form={<LoginForm onLoading={handleLoading} users={ users}/>}
            loading={loading}
          />
        </Segment.Group>
        <footer className="footer">
          <a href="https://www.freepik.com/free-photos-vectors/design">
            Avatar characters created by freepik - www.freepik.com
          </a>
        </footer>
      </Fragment>
    );
}


//----------------------------------------------------------------------
const LoginHeader = () => (
  <Header as="h4" block attached="top" textAlign="center">
    <Header.Content>Welcome to the Would You Rather App!</Header.Content>
    <Header.Subheader>Please sign in to continue</Header.Subheader>
  </Header>
);

const LoginGridLayout = ({ image, form, loading }) => (
  <div>
    <Grid padded textAlign="center">
      <Grid.Row className="login">
        <Grid.Column width={16}>
          {loading === true && (
            <Dimmer active inverted>
              <Loader inverted content="Loading" />
            </Dimmer>
          )}
          {image}
          <br />
          {form}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

const BrandImage = () => (
  <Image src="/images/avatars/animals.png" size="medium" centered />
);

//----------------------------------------------------------------------

export default Login
