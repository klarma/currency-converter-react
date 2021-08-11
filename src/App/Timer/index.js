import useCurrentDate from "./useCurrentDate";
import { TimerContent } from "./styled";

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
        <TimerContent>
            Dzisiaj jest
            {" "}
            {formattedDate}
        </TimerContent>
    );
};

export default Timer;