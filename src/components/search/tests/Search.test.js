import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow  } from 'enzyme';
import Search from '../Search.js'

describe('<Search />', () => {
    const wrapper = shallow(<Search />);
    it("should match the snapshot", () => {
      expect(wrapper.html()).toMatchSnapshot();
    });
    it('renders one search button', () => {
        const searchBtn = wrapper.find('#search-button')
        expect(searchBtn.length).toBe(1)
    })
    it('renders one search field', () => {
        const searchBtn = wrapper.find('#search-button')
        expect(searchBtn.length).toBe(1)
    })
})