import React from 'react'
import TableRow from './TableRow'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const _id = 1
const name = ''
const status = 'ONLINE'
configure({ adapter: new Adapter() })
it("Table Header rendered without crashing", () => {
    shallow(<TableRow _id={_id} name={name} status={status}/>);
})
it("should render initial layout", () => {
    const component = shallow(<TableRow _id={_id} name={name} status={status}/>);
    expect(component.getElements()).toMatchSnapshot();
})