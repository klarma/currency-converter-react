import { useRatesData } from "../useRatesData";
import { Loading, StyledImage, Failure } from "./styled"

const Container = ({ children }) => {
    const ratesData = useRatesData();

    return (
        <>
            {ratesData.state === "loading"
                ? (
                  <Loading>
                    Sekunda... <br />Ładuję kursy walut z Europejskiego Banku Centralnego<br />
                    <StyledImage />
                  </Loading>
                )
                : (
                  ratesData.state === "error" ? (
                    <Failure>
                        🛠️ Hmm... Coś poszło nie tak. Sprawdź czy masz połączenie z internetem
                    </Failure>
                  ) : (
                      <main>
                        {children}
                      </main>
                    )
                )
            }
        </>
    )
};

export default Container;