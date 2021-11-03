import React from 'react'
import SearchInput from './SearchInput'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const onSearch = () => {}
configure({ adapter: new Adapter() })
it("SearchInput rendered without crashing", () => {
    shallow(<SearchInput onSearch={onSearch}/>);
})
it("should render initial layout", () => {
    const component = shallow(<SearchInput onSearch={onSearch} />);
    expect(component.getElements()).toMatchSnapshot();
})