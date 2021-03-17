import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../pages/Home';

test('should test Home component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
});