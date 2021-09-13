import { StyledResult, Note } from "./styled";
import {useRatesData} from "../useRatesData";

const Result = ({ result }) => {
    const {date} = useRatesData();

    return (
        <StyledResult>
            {!!result && (
                <>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                    {" "}
                    <strong>
                        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                    </strong>
                </>
            )}
            <Note>Kursy walut pobierane są z Europejskiego Banku Centralnego. Aktualne na dzień {date}</Note>
        </StyledResult>
    );
};

export default Result;