import { mount } from 'enzyme';
import Tooltip from '../../components/Tooltip';

describe('Tooltip component', () => {
  it('should render Tooltip component with success', () => {
    const wrapper = mount(<Tooltip title="teste" className="name-teste" />);

    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render Tooltip component not passed property className with success', () => {
    const wrapper = mount(<Tooltip title="teste" />);

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
