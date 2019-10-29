import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import checkPropTypes from "check-prop-types";

// By default only uncommittted changes run. If want to run all test suites, then run npm run test and then enter w and then enter a for all test suites

const setUp = (Component, props = {}) => shallow(<Component {...props} />);

const findByTestAttribute = (shallowedComponent, attributeValue) => {
  return shallowedComponent.find(`[data-test="${attributeValue}"]`);
};

describe("Headline Component", () => {
  describe("PropTypes", () => {
    it("Passing correct props, component should render", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempAr: [
          {
            fName: "Yatin",
            lName: "Gupta",
            age: 24,
            email: "yatin.gupta@gmail.com",
            hobbies: ["Football", "Cricket", "Video Games"],
            profile: [
              { company: "A Company", position: "SE" },
              { company: "B Company", position: "SSE" }
            ]
          }
        ]
      };
      const result = checkPropTypes(
        Headline.propTypes,
        expectedProps,
        "prop",
        Headline.name
      );
      expect(result).toBeUndefined();
    });
  });
  describe("Have Props", () => {
    let component;
    beforeEach(() => {
      const props = { header: "Test Header", desc: "Test Description" };
      component = setUp(Headline, props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAttribute(component, "HeadlineComponent");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Have No Props", () => {
    let component;
    beforeEach(() => {
      component = setUp(Headline);
    });

    it("Should not render", () => {
      expect(component.debug()).toBe("");
    });

    it("Should not render other way", () => {
      const wrapper = findByTestAttribute(component, "HeadlineComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
