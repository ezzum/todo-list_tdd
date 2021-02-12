import { mount } from 'enzyme';
import Todos from './todos';

describe('Todos tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Todos />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('render todos', () => {
    expect(wrapper.find('.todos-item')).toHaveLength(3);
  });
  test('delete button item', () => {
    expect(wrapper.find('.todos-item').first().childAt(1).text()).toEqual(
      'delete'
    );
  });
});
