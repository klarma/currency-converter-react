import { useState } from "react";
import { useRatesData } from "../useRatesData";
import { LabelText, Input, Button } from "./styled";

const Form = ({ calculateResult }) => {
    const { rates } = useRatesData();
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");

    const onFormSubmit = (event) => {
        event.preventDefault();

        calculateResult(amount, currency);
    };

    const resetForm = () => {
        setAmount("");
        setCurrency("EUR");
    };

    return (
        <form
            onSubmit={onFormSubmit}
        >
            <p>
                <label>
                    <LabelText>
                        Podaj kwotę w PLN*
                    </LabelText>
                    <Input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        name="PLN"
                        type="number"
                        step="any"
                        min="0"
                        autoFocus
                        required
                    />
                </label>
            </p>
            <p>
                <label>
                    <LabelText>
                        Wybierz walutę
                    </LabelText>
                    <Input
                        as="select"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                        name="currency"
                    >
                        {!!rates && Object.keys(rates).map(currency => (
                            <option
                                value={currency}
                                key={currency}
                            >
                                {currency}
                            </option>
                        ))}
                    </Input>
                </label>
            </p>
            <p>
                <Button>Przelicz</Button>
                <Button onClick={resetForm} type="reset">Wyczyść</Button>
            </p>
        </form>
    );
};

export default Form;