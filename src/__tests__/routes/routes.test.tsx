import { shallow } from 'enzyme';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../routes';
import RouteProps from '../../routes/Route';

describe('Routes page', () => {
  it('should render Routes with success', () => {
    const wrapper = shallow(<Routes />);

    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render RouteProps with success', () => {
    const wrapper = shallow(
      <Router>
        <RouteProps />
      </Router>,
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
