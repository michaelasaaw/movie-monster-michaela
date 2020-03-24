import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import Watchlist from "../Watchlist";

describe("<Watchlist />", () => { 
    const wrapper = shallow(<Watchlist />);

    it("should match the snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

})