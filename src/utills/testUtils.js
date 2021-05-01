import checkPropTypes from 'check-prop-types'
import {createStore,applyMiddleware} from 'redux'
import {reducer} from '../store'
import thunk from 'redux-thunk'

// a testing store including initial state ( from the test file) and the real root reducer




    export const storeFactory = (initialState) => { 
        const middleware = [thunk]
        const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
        return createStoreWithMiddleware(reducer , initialState)
        
        }


        export const findHookAttr =(component, attr) => { 
            const wrapper = component.find(`[name='${attr}']`).first()
            return wrapper;
        }
        export const findFirstAttr =(component, attr) => { 
            const wrapper = component.find(`[data-test='${attr}']`).first()
            return wrapper;
        }

export const findByTestAtrr =(component, attr) => { 
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper;
}

  

export const checkProps = (component , conformingProps) => { 
    const propsError= checkPropTypes(component.propTypes
        ,conformingProps 
        , 'prop' 
        , component.name )
        expect(propsError).toBeUndefined()

}



 