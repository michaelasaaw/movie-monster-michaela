import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import Home from "../Home";

describe("<Home />", () => {
  const wrapper = shallow(<Home/>);
  it("should match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});