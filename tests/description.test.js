import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import Description from '../client/components/Description.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Description should be rendered on the page', () => {

  test('Description should exist with the correct text', () => {
    const wrapper = shallow(<Description desc='Hello' />);
    expect(wrapper.find('div')).toExist();
    expect(wrapper.find('div')).toHaveText('Hello');
    expect(wrapper).toIncludeText('Contact host');
  });

});


