import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FiUser, FiKey } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import {
  ContentForm,
  FooterForm,
  Column,
  ContentImage,
  Image,
} from '../styles';
import Input from '../../../components/Input';
import InputSelect from '../../../components/InputSelect';
import Button from '../../../components/Button';
import getValidationErrors from '../../../utils/getValidationErrors';
import Color from '../../../styles/color';
import { useCreditCard } from '../../../context/CreditCardContext';
import { months, years } from '../../../utils/mountExpirationsDate';
import CardsImages from '../../../constants/images.constant';
import { useForm } from '../../../hooks/useForm';

const FormCreditCard: React.FC = () => {
  const { isFlag, handleTypeFlagCard } = useForm();

  const {
    handleSetValuesCreditCard,
    handleTransitionCreditCard,
    handleFocusField,
    handleCreateCreditCard,
    handleSaveFlagCard,
    handleSaveImageCard,
    imageSelected,
  } = useCreditCard();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async values => {
      const handleValidateMonth = (year: string, month: string) => {
        const monthNow = new Date().getMonth() + 1;
        const yearNow = new Date().getFullYear();

        if (year === String(yearNow)) {
          return !(Number(month) < monthNow);
        }

        return true;
      };

      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          number: Yup.string()
            .required('Card number is required')
            .test('$isFlag', 'Enter a valid number', () => isFlag),
          name: Yup.string()
            .required('Card number is required')
            .min(6, 'Minimum 6 digits'),
          cvv: Yup.string()
            .required('CVV is required')
            .max(4, 'Maximum 6 digits'),
          month: Yup.string()
            .required('Month is required')
            .test(
              '$isMonthValidated',
              'Month selected is less that month current',
              () => handleValidateMonth(values.year, values.month),
            ),
          year: Yup.string().required('Year is required'),
        });
        await schema.validate(values, {
          abortEarly: false,
        });

        await handleCreateCreditCard(values);
      } catch (error) {
        const errors = getValidationErrors(error as Yup.ValidationError);
        formRef.current?.setErrors(errors);
      }
    },
    [isFlag, handleCreateCreditCard],
  );

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <ContentImage>
        {CardsImages.map(item => (
          <Image
            data-testid="image-card-test"
            key={item}
            onClick={() => {
              handleSaveImageCard(item);
            }}
            img={item}
            imageSelected={imageSelected}
          />
        ))}
      </ContentImage>
      <ContentForm>
        <Column>
          <span>Card number</span>
          <Input
            mask="credit-card"
            name="number"
            icon={FiKey}
            data-testid="input-number"
            onFocus={() => handleFocusField('number')}
            onChange={async data => {
              const type = await handleTypeFlagCard(data.target.value);
              await handleSaveFlagCard(type);
              await handleSetValuesCreditCard('number', data.target.value);
            }}
          />
        </Column>
        <Column>
          <span>Card name</span>
          <Input
            mask="only-string"
            name="name"
            data-testid="input-name"
            icon={FiUser}
            style={{ textTransform: 'uppercase' }}
            onChange={data =>
              handleSetValuesCreditCard('name', data.target.value)
            }
            onFocus={() => handleFocusField('name')}
          />
        </Column>
        <Column>
          <span>Expiration date</span>
          <div className="row">
            <div className="expiration-input">
              <InputSelect
                items={months()}
                data-testid="input-month"
                title="Month"
                small
                name="month"
                onChange={data => {
                  handleSetValuesCreditCard(
                    'expiration_month',
                    data.target.value,
                  );
                }}
              />
              <InputSelect
                items={years()}
                title="Year"
                data-testid="input-year"
                name="year"
                small
                onChange={data =>
                  handleSetValuesCreditCard(
                    'expiration_year',
                    data.target.value,
                  )
                }
              />
            </div>
            <div className="cvv">
              <Input
                onFocus={() => handleTransitionCreditCard('back', true)}
                onBlur={() => handleTransitionCreditCard('front', false)}
                onChange={data =>
                  handleSetValuesCreditCard('cvv', data.target.value)
                }
                placeholder="CVV"
                small
                data-testid="input-cvv"
                name="cvv"
              />
            </div>
          </div>
        </Column>
        <FooterForm>
          <Button
            type="submit"
            color={Color.white}
            background={Color.primary.default}
          >
            Create new card
          </Button>
        </FooterForm>
      </ContentForm>
    </Form>
  );
};

export default FormCreditCard;
