import amexImg from '../assets/images/amex.png';
import dinersClubImg from '../assets/images/dinersclub.png';
import masterCardImg from '../assets/images/mastercard.png';
import discoverImg from '../assets/images/discover.png';
import jcbImg from '../assets/images/jcb.png';
import unionpayImg from '../assets/images/unionpay.png';
import visaImg from '../assets/images/visa.png';
import { FlagCard } from '../common/interfaces/CreditCard.interface';

export function getCardType(number: string) {
  const types = [
    {
      value: new RegExp(/^3[47][0-9]{13}$/),
      flag: 'amex',
      img: amexImg,
    },
    {
      value: new RegExp(/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/),
      flag: 'diners',
      img: dinersClubImg,
    },
    {
      value: new RegExp(/^6(?:011|5[0-9]{2})[0-9]{12}$/),
      flag: 'discover',
      img: discoverImg,
    },
    {
      value: new RegExp(/^(?:2131|1800|35\d{3})\d{11}$/),
      flag: 'jcb',
      img: jcbImg,
    },
    {
      value: new RegExp(/^5[1-5][0-9]{14}$/),
      flag: 'mastercard',
      img: masterCardImg,
    },
    {
      value: new RegExp(/^(62|88)\d+$/),
      flag: 'unionpay',
      img: unionpayImg,
    },
    {
      value: new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/),
      flag: 'visa',
      img: visaImg,
    },
  ];

  let type = {} as FlagCard;
  const numberReplaced = number.replace(/ /g, '');
  types.forEach(element => {
    if (element.value.test(numberReplaced)) {
      type = element;
    }
  });

  return type;
}
