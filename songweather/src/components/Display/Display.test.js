import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper).toMatchSnapshot();
  });
});
