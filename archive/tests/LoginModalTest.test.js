
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from "react";

import {render, fireEvent} from '@testing-library/react'
import LoginModal from '../components/LoginModal'
import { shallow, configure, mount  } from "enzyme";
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

// it test entire component

it('check login button render' , () => { 
const {queryByTitle} = render(<LoginModal/>)

    // const btn = queryByTitle('loginButton')
    const btn =shallow(<LoginModal/>).find("#loginButton")
expect(btn).toBeTruthy()

})

//first snapshot test
it.skip('renders correctly enzyme', () => {
    const wrapper = shallow(<LoginModal />)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });



describe("LoginModal", () => {
    it("renders correctly", () => {
      shallow(<LoginModal />);
    });
   
})

// //test a click event

// describe("clickButton" , () => { 
// it("onClick" , () => { 
//     const {queryByTitle} = render(<LoginModal/>)
//     const btn = queryByTitle('loginButton')
//     expect(btn.State).toBe(false)
//     fireEvent.click(btn)
//     expect(btn.State).toBe(true)

// })

// })

//test state change 
it("should update state on click", () => {
    const setOpen = jest.fn();
    const wrapper = shallow(<LoginModal onClick={setOpen} />);
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation(open => [open, setOpen]);
 
    wrapper.find("#loginButton").simulate("click");
    expect(setOpen).toBeTruthy();
  });