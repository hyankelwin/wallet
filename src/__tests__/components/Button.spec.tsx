import { mount } from 'enzyme';

import Button from '../../components/Button';
import Color from '../../styles/color';

describe('Button component', () => {
  it('should be able to render Button component with success', () => {
    const wrapper = mount(
      <Button color={Color.white} background={Color.primary.default} />,
    );

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
