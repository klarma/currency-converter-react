import useCurrentDate from "./useCurrentDate";
import "./style.css";

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
        <p className="timer">
            Dzisiaj jest {formattedDate}
        </p>
    );
};

export default Timer;