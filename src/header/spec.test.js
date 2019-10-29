import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

const setUp = (Component, props = {}) => shallow(<Component {...props} />);

const findByTestAttribute = (shallowedComponent, attributeValue) => {
  return shallowedComponent.find(`[data-test="${attributeValue}"]`);
};

describe("Testing Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp(Header);
  });

  it("Should renders without errors", () => {
    //console.log(component.debug()); Used to get component information
    const wrapper = findByTestAttribute(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should renders the logo", () => {
    //console.log(component.debug()); Used to get component information
    const wrapper = findByTestAttribute(component, "logoImg");
    expect(wrapper.length).toBe(1);
  });
});
