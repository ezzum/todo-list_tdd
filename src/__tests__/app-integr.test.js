import { mount } from "enzyme";
import App from "../app";

describe("App integrative test", () => {
  let wrapper, todos;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  test("render Input", () => {
    expect(wrapper.find("Input")).toHaveLength(1);
  });

  test("render AddButton", () => {
    expect(wrapper.find("AddButton")).toHaveLength(1);
  });

  test("render Todos", () => {
    expect(wrapper.find("Todos")).toHaveLength(1);
  });
  test("render todos items", () => {
    todos = wrapper.find("Todos").props().todos;

    expect(wrapper.find(".todos-item")).toHaveLength(todos.length);
    todos.forEach((item, index) => {
      expect(wrapper.find(".todos-item").at(index).childAt(0).text()).toEqual(
        item
      );
    });
  });
  test("render delete button", () => {
    expect(wrapper.find(".todos-item").first().find("button")).toHaveLength(1);
  });
  test("Input handler", () => {
    const text = "input change";

    wrapper
      .find("Input")
      .childAt(0)
      .simulate("change", { target: { value: text } });

    expect(wrapper.find("Input").props().value).toEqual(text);
  });
  test("AddButton handler", () => {
    wrapper
      .find("input")
      .simulate("change", { target: { value: "NPM publish" } });
    wrapper.find(".add").simulate("click");

    const newTodos = wrapper.find("Todos").props().todos;

    expect(newTodos.length === todos.length + 1).toBe(true);
    expect(wrapper.find("Input").props().value).toBe("");
  });
  test("todo delete handler", () => {
    wrapper.find(".delete").first().simulate("click");

    const newTodos = wrapper.find("Todos").props().todos;

    expect(newTodos.length === todos.length - 1).toBe(true);
  });
});
