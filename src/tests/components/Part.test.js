import React from 'react';
import { shallow } from 'enzyme';
import Part from '../../components/Part';

test('should test Part component', () => {
    const wrapper = shallow(<Part />);
    expect(wrapper).toMatchSnapshot();
});