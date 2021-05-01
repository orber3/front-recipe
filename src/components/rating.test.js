import {findByTestAtrr , checkProps, storeFactory , findFirstAttr,findHookAttr} from '../utills/testUtils'
import Rating from './rating'
import { shallow,mount } from 'enzyme'


const setUp =( props, initialState={}) => { 

    const store = storeFactory(initialState)
    return shallow(
        <Provider store={store}>
       <Rating {...props} />
         </Provider> )
}


describe('should render staricons according to value ', () => { 


    test('value equal 1 ,should render 1 star icon' , () => { 

        const wrapper = setUp(value=1)
        const span = wrapper.find('span')
        // const RList = findByTestAtrr(wrapper, 'recipe-list');
        expect(span.length).toBe(1)
    })





})