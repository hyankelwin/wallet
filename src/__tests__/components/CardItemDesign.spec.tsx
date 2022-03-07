import { mount } from 'enzyme';
import CardItemDesign from '../../components/CardItemDesign';

describe('CardItemDesign component', () => {
  it('should be able to render CardItemDesign component with success', () => {
    const img = '/static/logo.png';
    const wrapper = mount(<CardItemDesign src={img} />);

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
