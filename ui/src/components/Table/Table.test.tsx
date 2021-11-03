import React from 'react'
import Table from './Table'
import { shallow,  configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const tableRows: [] = []
configure({ adapter: new Adapter() })
it("Table rendered without crashing", () => {
    shallow(<Table tableRows={tableRows}/>);
})
it("should render initial layout", () => {
    const component = shallow(<Table tableRows={tableRows}/>);
    expect(component.getElements()).toMatchSnapshot();
})