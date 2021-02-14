import { mount } from "enzyme";
import App from "../app";

describe("App integrative test", () => {
  let wrapper;
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
    const todos = wrapper.find("Todos").props().todos;
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
});
