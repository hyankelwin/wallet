export interface CreditCard {
  number: string;
  name: string;
  expiration: {
    month: number;
    year: number;
  };
  cvv: number;
}

export interface SideProps {
  name: string;
  value: boolean;
}

export interface FlagCard {
  flag: string;
  img: string;
  value: RegExp;
}
