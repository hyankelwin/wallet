import React from 'react';
import { FiCheck } from 'react-icons/fi';
import CreditCard from '../../components/CreditCard';
import CardItemDesign from '../../components/CardItemDesign';
import Loader from '../../components/Loader';
import FormCreditCard from '../../containers/Form/FormCreditCard';
import { useCreditCard } from '../../context/CreditCardContext';
import {
  Content,
  List,
  Card,
  Column,
  Head,
  CardDesignContent,
  SuccessContainer,
  HeadSuccess,
  BodySuccess,
} from './styles';
import Layout from '../../containers/Layout';
import CardsImages from '../../constants/images.constant';
import Button from '../../components/Button';
import Color from '../../styles/color';
import { mountReplaceResponse } from '../../utils/mountReplaceNumber';

const Home: React.FC = () => {
  const {
    interfacefValuesCard,
    side,
    fieldFocused,
    imageSelected,
    flagCard,
    isLoading,
    creditCard,
    handleClearCard,
  } = useCreditCard();

  return (
    <Layout>
      <Content>
        <List>
          <div className="container-list">
            <p>Hi, Welcome to Wallet</p>
            <span>
              The wallet digital help you controlled your cards, with it your
              can create your cards simple and with the design very
              sophisticated
            </span>
          </div>
          <div className="container-design">
            <p>Some of our desing for use in your card...</p>
            <CardDesignContent>
              {CardsImages.map(item => (
                <CardItemDesign key={item} src={item} />
              ))}
            </CardDesignContent>
          </div>
          <div className="container-footer">
            <p>
              After use our site indicate for your friends, comment how was your
              expirence when using the Wallet
            </p>

            {!!Object.keys(creditCard).length && !isLoading && (
              <p>Thank you for used out site!</p>
            )}
          </div>
        </List>
        <Card isLoading={isLoading}>
          {!isLoading ? (
            <Column
              isLoading={isLoading}
              isSuccess={!!Object.keys(creditCard).length}
            >
              {Object.keys(creditCard).length ? (
                <SuccessContainer>
                  <HeadSuccess>
                    <div className="icon">
                      <FiCheck size={100} color="#20be79" />
                    </div>
                    <div className="head-description">
                      <p>Card created successfully</p>
                      <span>
                        Your card was created and is ready to be used.
                      </span>
                      <span>We hope you like it!</span>
                    </div>
                  </HeadSuccess>
                  <BodySuccess>
                    <p>Data of card</p>
                    <div className="container-info-card">
                      {Object.entries(creditCard).map(key => {
                        return (
                          <div key={key[0]} className="info-card">
                            <p>{key[0]}</p>
                            <p>
                              {key[0] === 'number'
                                ? mountReplaceResponse(key[1])
                                : key[1]}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </BodySuccess>
                  <Button
                    type="submit"
                    color={Color.white}
                    background={Color.primary.default}
                    onClick={() => handleClearCard()}
                  >
                    Create outher card
                  </Button>
                </SuccessContainer>
              ) : (
                <>
                  <Head>
                    <p>Create your credit card</p>
                    <span>
                      In this section you will be able to create your cards the
                      way you want.
                    </span>
                    <span>Enjoy!</span>
                  </Head>
                  <CreditCard
                    values={interfacefValuesCard}
                    side={side}
                    fieldFocused={fieldFocused}
                    imageSelected={imageSelected}
                    flagCard={flagCard}
                  />
                  <FormCreditCard />
                </>
              )}
            </Column>
          ) : (
            <Column isLoading={isLoading}>
              <Loader text="Criando seu cartão ..." />
            </Column>
          )}
        </Card>
      </Content>
    </Layout>
  );
};

export default Home;
