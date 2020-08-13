import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import App from '../client/components/App.jsx';
import Title from '../client/components/Title.jsx';
import Highlights from '../client/components/Highlights.jsx';
import Description from '../client/components/Description.jsx';
import Amenities from '../client/components/Amenities.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Title Component', () => {

  test('div should exist with the correct text and image', () => {
    const info = {
      title: 'title',
      host: 'host',
      guests: 2,
      rooms: 1,
      beds: 1,
      baths: 1
    };
    const wrapper = shallow(<Title info={info} />);
    expect(wrapper).toExist();
    expect(wrapper).toIncludeText('title');
  });

});

describe('Description Component', () => {

  test('div should exist with the correct text', () => {
    const wrapper = shallow(<Description desc='Hello' />);
    expect(wrapper.find('div')).toExist();
    expect(wrapper.find('div')).toHaveText('Hello');
    expect(wrapper).toIncludeText('Contact host');
  });

});
