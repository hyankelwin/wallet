import { mount } from 'enzyme';
import Loader from '../../components/Loader';

describe('Loader component', () => {
  it('should be able to render Loader component with success', () => {
    const wrapper = mount(<Loader text="Carregando" />);

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
