import React from 'react';
import {
  FlagCard,
  SideProps,
} from '../../common/interfaces/CreditCard.interface';
import chip from '../../assets/images/chip.png';
import { Container, CardFront, CardBack, ContentImage } from './styles';
import { mountReplaceNumber } from '../../utils/mountReplaceNumber';

interface CreditCardProps {
  values: {
    number?: string;
    name?: string;
    expiration_month?: string;
    expiration_year?: string;
    cvv?: number;
  };
  side: SideProps;
  fieldFocused: string;
  imageSelected: string;
  flagCard: FlagCard;
}

const CreditCard: React.FC<CreditCardProps> = ({
  values,
  side,
  fieldFocused,
  imageSelected,
  flagCard,
}) => {
  return (
    <Container>
      <CardFront side={side} fieldFocused={fieldFocused} image={imageSelected}>
        <ContentImage>
          <img src={chip} alt="" />
          {flagCard && <img src={flagCard.img} alt="" />}
        </ContentImage>
        <div className="card-number-box">
          {mountReplaceNumber(values.number || '')}
        </div>
        <div className="flexbox">
          <div className="box">
            <span>Card holder</span>
            <div className="card-holder-name">{values.name || 'NOME'}</div>
          </div>
          <div className="box">
            <span>expires</span>
            <div className="expiration">
              <span className="exp-month">
                {values.expiration_month || 'MM'}/
              </span>
              <span className="exp-year">
                {values.expiration_year?.substring(2, 4) || 'YY'}
              </span>
            </div>
          </div>
        </div>
      </CardFront>
      <CardBack side={side} fieldFocused={fieldFocused} image={imageSelected}>
        <div className="stripe" />
        <div className="box">
          <span>cvv</span>
          <div className="cvv-box">{values.cvv}</div>
          {flagCard && <img src={flagCard.img} alt="" />}
        </div>
      </CardBack>
    </Container>
  );
};

export default CreditCard;
