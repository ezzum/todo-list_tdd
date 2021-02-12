import { mount } from 'enzyme';
import Input from './input';

describe('Input tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Input />);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  test('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('render input', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
