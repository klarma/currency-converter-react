import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Section from "./Section";
import Container from "./Container";
import Result from "./Result";
import Timer from "./Section/Timer";
import { useRatesData } from "./useRatesData";

function App() {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (amount, currency) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  useEffect(() => {
    console.log("Hello world created by Krzysiu. Nice to be here");
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Section
          title="Kalkulator walut"
          extraSectionContent={
            <Timer />
          }
          body={
            <Form
              calculateResult={calculateResult}
              reslut={result}
            />
          }
        />

        <Section
          smaller
          title="Wynik:"
          body={
            <Result
              result={result}
            />
          }
        />
      </Container>
      <Footer />
    </>
  );
};

export default App;
