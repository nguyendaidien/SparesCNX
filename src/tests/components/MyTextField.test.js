import React from 'react';
import { shallow } from 'enzyme';
import MyTextField from '../../components/MyTextField';

test('should test MyTextField component', () => {
    const wrapper = shallow(<MyTextField />);
    expect(wrapper).toMatchSnapshot();
});