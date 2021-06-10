import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Section from "./Section";
import Container from "./Container";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Section
          title="Kalkulator walut"
          body={
            <Form />
          }
        />
        <Section
          title="Wynik:"
          body={
            <p className="section__paragraph"></p>
          }
        />
      </Container>
      <Footer />
    </>
  );
};

export default App;
