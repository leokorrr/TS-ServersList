import React from 'react'
import Navbar from './Navbar'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
it("Navbar rendered without crashing", () => {
    shallow(<Navbar />);
})
it("should render initial layout", () => {
    const component = shallow(<Navbar />);
    expect(component.getElements()).toMatchSnapshot();
})