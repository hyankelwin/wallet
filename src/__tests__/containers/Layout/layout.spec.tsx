import { mount } from 'enzyme';

import Layout from '../../../containers/Layout';

describe('Layout container', () => {
  it('should be able to render Layout container with success', () => {
    const wrapper = mount(<Layout />);

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
