import "./style.css";

const Section = ({ title, body, className, extraSectionContent }) => (
    <section className={className}>
        {extraSectionContent}
        <h2 className="section__header">{title}</h2>
        {body}
    </section>
);

export default Section;