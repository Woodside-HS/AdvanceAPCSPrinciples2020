import React from 'react';
import { shallow } from 'enzyme';
import GUI from './GUI';

describe('GUI', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<GUI />);
    expect(wrapper).toMatchSnapshot();
  });
});
