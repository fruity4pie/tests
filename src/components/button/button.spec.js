import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../utils";
import SharedButton from "./index";

describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        buttonText: "Example BTN text",
        emitEvent: () => {}
      };

      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        buttonText: "Btn text",
        emitEvent: () => {}
      };

      wrapper = shallow(<SharedButton {...props} />);
    });

    it("Should Render a btn", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
