import { mount } from 'enzyme';
import Header from '../../components/Header';

describe('Header component', () => {
  it('should be able to render Header component with success', () => {
    const wrapper = mount(<Header />);

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
