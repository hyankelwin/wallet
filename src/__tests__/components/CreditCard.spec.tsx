import { mount } from 'enzyme';
import CreditCard from '../../components/CreditCard';
import { mockCreditCard } from '../../__mocks__/creditCard.mock';
import { mockFlagCard } from '../../__mocks__/flagCard.mock';

describe('CreditCard component', () => {
  describe('should be able to passed in all tests on index.tsx', () => {
    it('should be able to render CreditCard component with success', () => {
      const props = {
        values: mockCreditCard,
        side: { name: 'front', value: false },
        fieldFocused: 'number',
        imageSelected: '/static/img1.png',
        flagCard: mockFlagCard,
      };
      const wrapper = mount(<CreditCard {...props} />);

      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should be able to render CreditCard when values.number of mountReplaceNumber is empty', () => {
      const props = {
        values: { ...mockCreditCard, number: '' },
        side: { name: 'front', value: false },
        fieldFocused: 'number',
        imageSelected: '/static/img1.png',
        flagCard: mockFlagCard,
      };
      const wrapper = mount(<CreditCard {...props} />);

      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should be able to render CreditCard when values.name is empty', () => {
      const props = {
        values: { ...mockCreditCard, name: '' },
        side: { name: 'front', value: false },
        fieldFocused: 'number',
        imageSelected: '/static/img1.png',
        flagCard: mockFlagCard,
      };
      const wrapper = mount(<CreditCard {...props} />);

      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should be able to render CreditCard when values.expiration_month is empty', () => {
      const props = {
        values: { ...mockCreditCard, expiration_month: '' },
        side: { name: 'front', value: false },
        fieldFocused: 'number',
        imageSelected: '/static/img1.png',
        flagCard: mockFlagCard,
      };
      const wrapper = mount(<CreditCard {...props} />);

      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should be able to render CreditCard when values.expiration_year is empty', () => {
      const props = {
        values: { ...mockCreditCard, expiration_year: '' },
        side: { name: 'front', value: false },
        fieldFocused: 'number',
        imageSelected: '/static/img1.png',
        flagCard: mockFlagCard,
      };
      const wrapper = mount(<CreditCard {...props} />);

      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  describe('should be able to passed in all tests on styles.ts', () => {
    it('should be able to render CreditCard when side.value is true', () => {
      const props = {
        values: mockCreditCard,
        side: { name: 'back', value: true },
        fieldFocused: 'number',
        imageSelected: '/static/img1.png',
        flagCard: mockFlagCard,
      };
      const wrapper = mount(<CreditCard {...props} />);

      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should be able to render CreditCard when side.image is empty', () => {
      const props = {
        values: mockCreditCard,
        side: { name: 'back', value: true },
        fieldFocused: 'number',
        imageSelected: '',
        flagCard: mockFlagCard,
      };
      const wrapper = mount(<CreditCard {...props} />);

      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});
