import { mount } from "enzyme";
import Input from "../input";
import React from "react";

describe("Input tests", () => {
  let wrapper;
  const props = {
    newTodo: jest.fn(),
  };

  beforeEach(() => {
    wrapper = mount(<Input {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  test("snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("render input", () => {
    expect(wrapper.find("input")).toHaveLength(1);
  });
  test("newTodo called", () => {
    wrapper.find("input").simulate("change");
    expect(props.newTodo).toHaveBeenCalledTimes(1);
  });
});
