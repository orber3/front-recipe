
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from "react";
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup} from '@testing-library/react'
import Login from '../components/login'
import * as ACTIONS from '../Actions/userAction.js'
import * as Reducer from '../Reducers/userReducer'
import { shallow, configure, mount  } from "enzyme";
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup)

// login action test - reducer check
describe.skip('test the reducer and actions', () => {
  it('should return the initial state', () => {
    expect(Reducer.initialState).toEqual({loading: false})
  })


  // it('should change loading from false to true', () => {
  //   expect(Reducer(Reducer.UserLoginReducer(Reducer.initialState, ACTIONS.USER_LOGIN_REQUEST ))
  //     .toEqual({ loading: true  })
  // })

  

  it.skip('should change loading from false to true', () => {
    expect(Reducer.UserLoginReducer(Reducer.initialState, {action: ACTIONS.loginUser.USER_LOGIN_SUCCESS }))
      .toEqual({ loading: false  })
  })



})


// describe('test the form and the data inside the action', () => {
//   it('should return data in the form', () => {
//     expect(Login.initialState).toEqual({loading: false})
//   })



// })
