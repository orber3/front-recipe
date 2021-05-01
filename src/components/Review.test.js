import React from 'react';
import { shallow,mount } from 'enzyme'
import {findByTestAtrr , checkProps, storeFactory , findFirstAttr,findHookAttr} from '../utills/testUtils'
import Review from './Review'
import moxios from 'moxios'
import { MemoryRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {Provider} from 'react-redux'
// import * as reactRedux from 'react-redux'
import { useDispatch , useSelector} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import {
    TextField,
 
    
  } from "@material-ui/core";
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
  }));

  
const mockedUserInfo = { 
    userLogin: { 
        userInfo: { 
        "id": "60843b1742cd522ad036e2b3",
        "isAdmin": false,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODQzYjE3NDJjZDUyMmFkMDM2ZTJiMyIsImlhdCI6MTYxOTI3ODYxNSwiZXhwIjoxNjIxODcwNjE1fQ.Gv24pkWBzx6H-uB8qQEtGBiLHFSM7Fx55ghbXqalgms",
         "name": " or",
        "email": "ddd@gmail.com"
        }
    }
}
const mockedrecipeReviewCreate = {
    recipeReviewCreate: { 
       "error": "dasdas",
       "loading": false,
        }

    
}

const mockedrecipeReviewCreateError = {
    recipeReviewCreate: { 
        "error": "dasdas",
        "loading": false,
         }
}


const setUp =( props, initialState={}) => { 

    const store = storeFactory(initialState)
    return mount(
        <Provider store={store}>
       <Review {...props} />
         </Provider> )
}

describe('Review test -renders' , () => { 
let store
const initialState={}
    beforeEach (() => { 
     store = storeFactory(initialState)
                // mocking the use selector

                useSelector.mockImplementationOnce(callback => {
                    return callback(mockedrecipeReviewCreate);
                })
                
                useSelector.mockImplementationOnce(callback => {
                    return callback(mockedUserInfo);
                })
                        
                useSelector.mockImplementationOnce(callback => {
                    return callback(mockedrecipeReviewCreateError);
                })
                
                useSelector.mockImplementationOnce(callback => {
                    return callback(mockedrecipeReviewCreateError);
                })
                
                useSelector.mockImplementationOnce(callback => {
                    return callback(mockedrecipeReviewCreateError);
                })
                
                useSelector.mockImplementationOnce(callback => {
                    return callback(mockedUserInfo);
                })

            })
    afterEach(() => {
            useSelector.mockClear()
                })



    test('check main div renders', () => { 
        const wrapper = setUp()
        const materialPaper = wrapper.find(Paper).find('div');

        const review = findByTestAtrr(materialPaper, 'review-div');
        expect(review.length).toBe(1)
    })

    test.skip('submit button works and error is called ' , () => { 
        const wrapper = setUp()

        const hookTextArea = wrapper.find(TextField).find('textarea');
        const comment = findHookAttr(hookTextArea, 'comment');

        const message = findByTestAtrr(wrapper, 'message');
        expect(message.length).toBe(1)

        const mockEvent = { target: { value: '1234' } };

        const materialButton = wrapper.find(Button).find('button');
        const button = findByTestAtrr(materialButton, 'submit-button');
        act(() => { 
            comment.simulate('change', mockEvent);

            button.simulate("submit", {preventDefault() {}})
        })


    })




})