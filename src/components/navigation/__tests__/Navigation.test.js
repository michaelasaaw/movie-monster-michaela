import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import Navigation from '../Navigation.js'

describe('Navigation', () => {
    it('matches snapshot', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper).toMatchSnapshot();
    })
})