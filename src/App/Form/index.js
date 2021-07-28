import { useState } from "react";
import "./style.css";
import currencies from "../currencies";

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
            className="form"
            onSubmit={onFormSubmit}
        >
            <p>
                <label>
                    <span className="form__labelText">
                        Podaj kwotę w PLN*
                    </span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        className="form__field"
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
                    <span className="form__labelText">
                        Wybierz walutę
                    </span>
                    <select
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                        className="form__field"
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
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Przelicz</button>
                <button onClick={resetForm} className="form__button" type="reset">Wyczyść</button>
            </p>
        </form>
    );
};

export default Form;