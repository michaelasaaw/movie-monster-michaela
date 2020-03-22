import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import Movie from "./../Movie";

describe("<Movie />", () => {
  const props = {
    id: 123,
    title: "Test",
    release_date: "1970-01-01",
    overview: "We don’t serve their kind here! What? Your droids.",
    poster_path: "/2UDsmTvWSxVvuGoRQyV3zVaIRyu.jpg"
  };
  const wrapper = shallow(
    <Movie
      id={props.id}
      key={1}
      title={props.title}
      year={props.release_date}
      description={props.overview}
      imagePath={props.poster_path}
    />
  );
  it("should match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("throws no error when clicking on add favourite button", () => {
    const addFavouriteBtn = wrapper.find("#add-to-favourites-btn");
    addFavouriteBtn.simulate("click");
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
