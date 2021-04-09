import React from 'react';
import {  shallow,mount } from 'enzyme'
import RecipeReviewCard from './RecipeCard';
import {findByTestAtrr,storeFactory } from '../tests/testUtils'
import {Provider} from 'react-redux'

import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'

Enzyme.configure({ adapter: new Adapter() });

const history = createMemoryHistory()


const setUp =( initialState={} ) => { 
    const store = storeFactory(initialState)

 return mount(<Provider store={store}>
     <Router history={history} >

      <RecipeReviewCard id='6059807e118b8c3dc4aaf7d0' 
 cookingTime='22' name = 'test' user='{recipe.user}'
  ingredients='{recipe.ingredients}' description = '{recipe.description}' 
  directions='{recipe.directions}' date='{recipe.date}'  
  image="uploads\\image-1616478324282.jpg" rating='{recipe.rating}' numReviews='{recipe.numReviews}' /> 
  
  </Router>

  </Provider>)
}


describe('render card  ' , () => { 
let wrapper
        beforeEach (() => { 
            wrapper=setUp()
        })


        it('render header without error' , () => { 
            const header = findByTestAtrr(wrapper, 'card-header')
            expect(header.length).toBe(1)
        
        })


    it('render whatsup ' , () => { 
        const whatsup = findByTestAtrr(wrapper, 'card-whatsup')
        expect(whatsup.length).toBe(1)
    
    })

    
    it('render directions ' , () => { 
        const directionss = findByTestAtrr(wrapper, "card-directions")
        expect(directionss.length).toBe(1)
    
    })

    
    it('render desc ' , () => { 
        const desc = findByTestAtrr(wrapper, "card-desc")
        expect(desc.length).toBe(1)
    
    })
})


