import useCurrentDate from "./useCurrentDate";
import { StyledTimer } from "./styled";

const Timer = (props) => {
    const date = useCurrentDate();

    const formattedDate = date.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    return (
        <StyledTimer>
            Dzisiaj jest
            {" "}
            {formattedDate}
        </StyledTimer>
    );
};

export default Timer;