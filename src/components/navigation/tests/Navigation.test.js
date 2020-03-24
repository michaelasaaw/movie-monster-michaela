import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import Navigation from '../Navigation.js'

describe('Navigation', () => {
    const wrapper = shallow(<Navigation />);
    it('matches snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })
})