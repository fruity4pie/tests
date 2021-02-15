import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../utils";
import React from "react";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();

  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title",
          body: "Some text"
        },
        {
          title: "Example title 2",
          body: "Some text 2"
        },
        {
          title: "Example title 3",
          body: "Some text 3"
        }
      ]
    };
    wrapper = setUp(initialState);
  });

  it("Should render without erros", () => {
    const component = findByTestAttr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });

  it("exampleMethod_updatesState method should update state as expected", () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updatesState();

    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it("exampleMethod_returnsValue method should return value", () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnsValue(6);

    expect(newValue).toBe(7);
  });
});
