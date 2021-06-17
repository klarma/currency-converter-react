import { useState } from "react";
import "./style.css";

const Form = (props) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");

    return (
        <form className="form" action="https://postman-echo.com/get">
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
                        <option value="EUR">Euro</option>
                        <option value="USD">Dolar amerykański</option>
                        <option value="GBP">Funt brytyjski</option>
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Przelicz</button>
                <button className="form__button" type="reset">Wyczyść</button>
            </p>
        </form>
    );
};

export default Form;