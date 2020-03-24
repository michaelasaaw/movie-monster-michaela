import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import Approved from "../Approved";

describe("<Approved />", () => {
    const wrapper = shallow(<Approved />);
    it("should match the snapshot", () => {
      expect(wrapper.html()).toMatchSnapshot();
    });
});
  