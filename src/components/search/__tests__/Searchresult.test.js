import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { mount } from 'enzyme';
import Searchresult from '../Searchresult.js'
import MOCK_SEARCH_SUCCESS from './../../../testdata/mock_search-success'

describe('Searchresult component', () => {
    it('renders correctly', () => {
        const wrapper = mount(<Searchresult movies={MOCK_SEARCH_SUCCESS} />);
        expect(wrapper).toMatchSnapshot();
    })
})