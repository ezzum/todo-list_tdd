import { mount } from "enzyme";
import React from "react";

import AddButton from "../add-button";

describe("AddButton test", () => {
  let wrapper;
  const props = {
    addTodo: jest.fn(),
  };
  beforeEach(() => {
    wrapper = mount(<AddButton {...props} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("render button", () => {
    expect(wrapper.find("button").text()).toEqual("add");
  });
  test("addTodo called", () => {
    wrapper.find("button").simulate("click");
    expect(props.addTodo).toHaveBeenCalledTimes(1);
  });
});
