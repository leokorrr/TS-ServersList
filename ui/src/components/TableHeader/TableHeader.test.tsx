import React from 'react'
import TableHeader from './TableHeader'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
it("Table Header rendered without crashing", () => {
    shallow(<TableHeader />);
})
it("should render initial layout", () => {
    const component = shallow(<TableHeader />);
    expect(component.getElements()).toMatchSnapshot();
})