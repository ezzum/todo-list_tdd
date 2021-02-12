import { mount } from 'enzyme';
import AddButton from './add-button';

describe('AddButton test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<AddButton />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('render button', () => {
    expect(wrapper.find('button').text()).toEqual('add');
  });
});
