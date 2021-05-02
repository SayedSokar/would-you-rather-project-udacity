import React from 'react'
import { useState } from 'react'
import {
  Segment,
  Grid,
  Header,
  Image,
  Form,
  Loader,
  Dimmer
} from 'semantic-ui-react';
import {SET_AUTHUSER}  from '../store/authSlice';
import { useSelector, useDispatch } from 'react-redux';



//--------------------------------------------
function LoginForm({ onLoading, users }) {
    console.log('here is the userssss === >',users)
    const dispatch = useDispatch()
    
//------------------------------------

    const onChange = (e, { value }) => {
    setValue(value);
    };
    
//--------------------------------------
    const handleSubmit = e => {
    e.preventDefault();
    const authUser = value;

    new Promise((res, rej) => {
      onLoading();
      setTimeout(() => res(), 500);
    }).then(() => {
        dispatch(SET_AUTHUSER(authUser))
    });
    };
//--------------------------------------------------
const generateDropdownData = () => {
    return Object.values(users).map(user => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL }
    }));
  };    
//------------------------------------------------
    const [value, setValue] = useState('')
    const disabled = value === '' ? true : false;
    return (
      <Form onSubmit={handleSubmit}>
        <Header as="h2" color="green">
          Sign In
        </Header>
        <Form.Dropdown
          placeholder="Select a Friend"
          fluid
          selection
          scrolling
          options={generateDropdownData()}
          value={value}
          onChange={onChange}
          required
        />
        <Form.Button content="Login" positive disabled={disabled} fluid />
      </Form>
    )
}

export default LoginForm
