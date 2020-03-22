import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import Favourites from "./../Favourites";


describe("<Favourites />", () => { 
    const wrapper = shallow(<Favourites />);
    it("should match the snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
})