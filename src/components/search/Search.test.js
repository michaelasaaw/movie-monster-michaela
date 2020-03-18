import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Searchbar from './Searchbar'

describe('Searchbar renders', () => {
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
      expect(shallow(<Searchbar />).find('form.input').exists()).toBe(true)
    })
   })