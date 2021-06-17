import "./style.css";

const Section = ({ title, body, className }) => (
    <section className={className}>
        <h2 className="section__header">{title}</h2>
        {body}
    </section>
);

export default Section;