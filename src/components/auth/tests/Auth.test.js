import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import Auth from "./../Auth";

describe("<Auth />", () => {
  const wrapper = shallow(<Auth />);
  it("should match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("should render error element on error", () => {
    wrapper.error = "Something is wrong";
    wrapper.find("#error-box");
  });
  it("should not render error element when state error equals null", () => {
    wrapper.error = null;
    wrapper.find("#error-box");
  });
});
