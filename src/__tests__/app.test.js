import { mount } from "enzyme";
import App from "../app";

describe("App tests unit", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  test("snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("render App title", () => {
    expect(wrapper.find("h1").text()).toEqual("Todo list");
  });
});
