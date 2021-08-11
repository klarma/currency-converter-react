import { ResultContent } from "./styled";

const Result = ({ result }) => (
    <ResultContent>
        {!!result && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </ResultContent>
);

export default Result;