import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Section from "./Section";
import Container from "./Container";
import { currencies } from "./currencies";
import Result from "./Result";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  const welcome = () => {
    console.log("Hello world created by Krzysiu. Nice to be here");
  };

  welcome();

  return (
    <>
      <Header />
      <Container>
        <Section
          className="section"
          title="Kalkulator walut"
          body={
            <Form
              calculateResult={calculateResult}
              reslut={result}
            />
          }
        />

        <Section
          className="section section--height"
          title="Wynik:"
          body={
            <Result />
          }
        />
      </Container>
      <Footer />
    </>
  );
};

export default App;
