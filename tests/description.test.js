import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import Description from '../client/components/Description.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('react test', () => {
  test('should test that react tests work', () => {
    const wrapper = shallow(<Description desc='Hello' />);
    expect(wrapper.find('div')).toExist();
  })
})