import React from 'react';
import { shallow } from 'enzyme';
import CreatePart from '../../pages/CreatePart';

test('should test CreatePart component', () => {
    const wrapper = shallow(<CreatePart />);
    expect(wrapper).toMatchSnapshot();
});