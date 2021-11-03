import React from 'react'
import Logo from './Logo'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const logoText = 'Recruitment task'
configure({ adapter: new Adapter() })
it("Logo rendered without crashing", () => {
    shallow(<Logo title={logoText}/>);
})
it("should render initial layout", () => {
    const component = shallow(<Logo title={logoText} />);
    expect(component.getElements()).toMatchSnapshot();
})
describe("", () => {
    it("accepts Navbar props", () => {
        const wrapper = mount(<Logo title={logoText}/>)
        expect(wrapper.props().title).toEqual(logoText)
    })
    it("contains logo text", () => {
        const wrapper = mount(<Logo title={logoText}/>)
        const value = wrapper.find("div.logo__name").text()
        expect(value).toEqual("Recruitment task")
    })
})