import { useState } from "react";
import currencies from "../currencies";
import { LabelText, Input, Select, Button } from "./styled";

const Form = ({ calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();

        calculateResult(amount, currency);
    };

    const resetForm = () => {
        setAmount("");
        setCurrency(currencies[0].short);
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
                    <Select
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                        name="currency"
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </Select>
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