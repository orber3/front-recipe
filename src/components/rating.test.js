import {findByTestAtrr , checkProps, storeFactory , findFirstAttr,findHookAttr} from '../utills/testUtils'
import Rating from './rating'
import { shallow,mount } from 'enzyme'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const setUp =( props, initialState={}) => { 

    const store = storeFactory(initialState)
    return shallow(
        
       <Rating {...props} />
         )
}


describe('should render staricons according to value ', () => { 



    test('value equal 1 ,should render 1 star icon' , () => { 
        const props = { 
            value: 1
        }
        const wrapper = setUp(props)


        const fullstar = findByTestAtrr(wrapper, 'fullStar');
  
        expect(fullstar.length).toBe(1)
        
        const halfStar = findByTestAtrr(wrapper, 'halfStar');
  
        expect(halfStar.length).toBe(0)
          
        const borderStar = findByTestAtrr(wrapper, 'borderStar');
  
        expect(borderStar.length).toBe(4)


    })





})