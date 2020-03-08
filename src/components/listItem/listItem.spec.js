import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils";
import ListItem from "./index";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        title: "Example title",
        desc: "Example of desc"
      };

      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        title: "Example ListItem text",
        desc: "Example of desc"
      };

      wrapper = shallow(<ListItem {...props} />);
    });

    it("Should renders without error", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a title", () => {
      const title = findByTestAttr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });

    it("Should render a desc", () => {
      const desc = findByTestAttr(wrapper, "componentDesc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Should NOT render", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        desc: "Example of desc"
      };

      wrapper = shallow(<ListItem {...props} />);
    });

    it("Component is not rendered", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");

      expect(component.length).toBe(0);
    });
  });
});
