import React from 'react';
import {  shallow,mount } from 'enzyme'
import RecipeListScreen from './recipeListScreen';
import {findByTestAtrr,storeFactory } from '../tests/testUtils'
import {Provider} from 'react-redux'

import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { useSelector } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

// jest.mock("react-redux", () => ({
//     ...jest.requireActual("react-redux"),
//     useSelector: jest.fn()
//   }));

let mockallRecipes = { loading: false , recipes: []  };

jest.mock('./recipeListScreen', () => {
    return jest.fn(() => {
        allRecipes: mockallRecipes
    })
})

const setUp =( initialState={}) => { 
    const store = storeFactory(initialState)

    

    
 return mount(
 <Provider store={store}>
<RecipeListScreen  />

  </Provider>).childAt[0]

}



describe('render recipe list  ' , () => { 
    let wrapper
            beforeEach (() => { 
                // useSelector.mockImplementation(callback => {

                //     let allRecipes =   {loading: false , recipes: []};
                  
                //     return callback(allRecipes);
                mockallRecipes = { loading: false , recipes: []  };
                wrapper=setUp()
console.log(wrapper.debug())
            })
           

            it('render listGrid main div componenet ' , () => { 
                
                const componenet = findByTestAtrr(wrapper, 'listGrid')
                console.log(wrapper.debug());

                expect(componenet.length).toBe(1)
            
            })





        })