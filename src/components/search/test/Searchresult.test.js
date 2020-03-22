import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import Searchresult from '../Searchresult.js'
import MOCK_SEARCHRESULT from './Searchresult.testdata.js'

describe('Searchresult component', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Searchresult movies={MOCK_SEARCHRESULT} />);
        expect(wrapper).toMatchSnapshot();
    })
})