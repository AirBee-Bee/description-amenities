import 'jsdom-global/register';
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
      baths: 1,
      hostPhoto: 'URL'
    };
    const title = mount(<Title info={info} />);
    expect(title).toExist();
    expect(title.find('img')).toExist();
    expect(title).toIncludeText('title');
    expect(title).toIncludeText('host');
    expect(title).toIncludeText('2');
    expect(title).toIncludeText('1');
  });

});

describe('Highlights Component', () => {

  test('div should exist with the correct text and images', () => {
    const highlights = [{ID: 1, url: 'URL', name: 'name'}];
    const highlightsComponent = mount(<Highlights highlights={highlights} />);
    expect(highlightsComponent).toExist();
    expect(highlightsComponent.find('img').prop('src')).toEqual('URL');
    expect(highlightsComponent).toIncludeText('name');
  });

});

describe('Description Component', () => {

  test('div should exist with the correct text', () => {
    const description = mount(<Description desc='Hello' />);
    expect(description.find('div')).toExist();
    expect(description).toIncludeText('Hello');
    expect(description).toIncludeText('Contact host');
  });

});
