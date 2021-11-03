import React from 'react'
import Header from './Header'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const numberOfServers = 16
const dataToSearch = () => {}
configure({ adapter: new Adapter() })
it("Header rendered without crashing", () => {
    shallow(<Header numberOfServers={numberOfServers} dataToSearch={dataToSearch}/>);
})
it("should render initial layout", () => {
    const component = shallow(<Header numberOfServers={numberOfServers} dataToSearch={dataToSearch}/>);
    expect(component.getElements()).toMatchSnapshot();
})