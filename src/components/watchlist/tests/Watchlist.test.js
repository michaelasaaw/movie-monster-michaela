import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow, mount, render, unmount } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Watchlist from "./../Watchlist";
Enzyme.configure({ adapter: new Adapter() });



describe("<Watchlist />", () => { 
    const wrapper = render(<Watchlist />);

    it("should match the snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot();
      });
})