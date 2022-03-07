import { mount } from 'enzyme';
import HeaderImage from '../../components/HeaderImage';

describe('HeaderImage component', () => {
  it('should be able to render HeaderImage component with success', () => {
    const wrapper = mount(<HeaderImage />);

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
