import React from 'react';
import { shallow,mount } from 'enzyme'
import {findByTestAtrr , checkProps, storeFactory , findFirstAttr} from '../utills/testUtils'
import RecipeListScreen from './recipeListScreen'
import moxios from 'moxios'
import { MemoryRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {Provider} from 'react-redux'
// import * as reactRedux from 'react-redux'
import { useDispatch , useSelector} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';

const mockSetOpen = jest.fn()
jest.mock('react', () => ( { 
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState,mockSetOpen]
}))

const mockedRecipeList = { 
    allRecipes: {
        "loading": false,
        "recipes": [
            {
        "_id": "5cd95395de30eff6ebccde56",
        "name": "burgerRanch",
        "catagory": "junk-food",
        "description": 'lame burger',
        "directions": 'make a good burger instead',
        "image": "uploads\image-1616478324282.jpg",
        "numReviews": 1,
        "rating": 5,
        "user": {"_id": "6054d3305d5fcc27dc80ea79" , "name": "or" },
        "reviews": [
            {
                "_id": "60843d9f3a47335240f36a50",
                "user": "60843b1742cd522ad036e2b3",
                "commet": "blah blah" ,
                "name": "hila"


            },],
        },

            {
                "_id": "5cd95395de30effasdas6ebccde56",
                "name": "burgerRanddassach",
                "catagory": "junk-food",
                "description": 'lame burger',
                "directions": 'make a good burger instead',
                "image": "uploads\image-1616478324282.jpg",
                "numReviews": 1,
                "rating": 5,
                "user": {"_id": "6054d3305d5safcc27dc80ea79" , "name": "or" },
                "reviews": [
                    {
                        "_id": "60843d9fdas3a47335240f36a50",
                        "user": "60843b174das2cd522ad036e2b3",
                        "commet": "blah blah" ,
                        "name": "hila"
        
        
                    },
                
        ],
    }
    
]
}}


// second object inside recipe array causing the error , no reason why , mayb mockimplention once ? 

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

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
  }));

const setUp =( initialState={}) => { 
    const store = storeFactory(initialState)
    return mount(
        <Provider store={store}>
                    <Router> 

       <RecipeListScreen  />
       </Router>
         </Provider>)
}

  
describe('movie list tests' , () => { 

      
    beforeEach (() => { 
        // mocking the use selector
        useSelector.mockImplementationOnce(callback => {
            return callback(mockedRecipeList);
        })
        useSelector.mockImplementation(callback => {
            return callback(mockedUserInfo);
        })
    

    })


    afterEach(() => {
    useSelector.mockClear()

        })
   

        test('check div list exist' , () => { 

            const wrapper = setUp()
            const RList = findByTestAtrr(wrapper, 'recipe-list');
            expect(RList.length).toBe(1)
        })
        
        test('check cards exists according to recipes.length  ' , () => { 


            const wrapper = setUp()
            const materialCard = wrapper.find(Paper).find('div');

            const card = findByTestAtrr(materialCard, 'card-div');
            expect(card.length).toBe(2)
        })
    })
    describe('tests review modal inside card inside recipeList',() => { 
        let originalUseState=false;

        beforeEach (() => { 


            originalUseState=React.useState
            mockSetOpen.mockClear()

            // mocking the use selector
            useSelector.mockImplementationOnce(callback => {
                return callback(mockedRecipeList);
            })
            useSelector.mockImplementation(callback => {
                return callback(mockedUserInfo);
            })
        
    
        })
    
    
        afterEach(() => {
        useSelector.mockClear()
        React.useState= originalUseState

    
            })
    

            test(' rendered review button button should exists and open a Modal' , () => { 
                const wrapper = setUp()
                const materialButton = wrapper.find(Button).find('button');
                const button = findByTestAtrr(materialButton, 'button-review');
                expect(button.length).toBe(2)
                const firstButton = findFirstAttr(materialButton,"button-review")
                firstButton.simulate("click", {event() {}})
                expect(mockSetOpen).toHaveBeenCalled();

            })
            


    })

