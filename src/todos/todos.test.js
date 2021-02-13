import { mount } from "enzyme";
import Todos from "./todos";
import React from "react";

describe("Todos tests", () => {
  let wrapper;
  const props = {
    todos: ["TDD", "SSR", "TypeScript"],
    deleteTodo: jest.fn(),
  };

  beforeEach(() => {
    wrapper = mount(<Todos {...props} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("render todos", () => {
    expect(wrapper.find(".todos-item")).toHaveLength(props.todos.length);
  });
  test("delete button item", () => {
    expect(wrapper.find(".todos-item").first().childAt(1).text()).toEqual(
      "delete"
    );
  });
  test("deleteTodo called", () => {
    wrapper.find("button").first().simulate("click");
    expect(props.deleteTodo).toHaveBeenCalledTimes(1);
  });
});
