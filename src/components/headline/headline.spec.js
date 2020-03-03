import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestAttr } from "../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "Test Header",
        decs: "Test Desc"
      };

      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("Should render h1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render p", () => {
      const p = findByTestAttr(wrapper, "desc");
      expect(p.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const component = findByTestAttr(wrapper);
      expect(component.length).toBe(0);
    });
  });
});
