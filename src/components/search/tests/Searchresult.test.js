import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow, mount } from 'enzyme';
import Searchresult from '../Searchresult.js'
import MOCK_SEARCH_SUCCESS from './data/mock_search-success'

describe('<Searchresult />', () => {
    const wrapper = mount(<Searchresult movies={MOCK_SEARCH_SUCCESS} />)
    it("should match the snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
    it('renders all 4 results', () => {
        expect(wrapper.find('.media').length).toBe(4)
    })
})