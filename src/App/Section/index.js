import { StyledSection, Header } from "./styled";

const Section = ({ title, body, extraSectionContent, smaller }) => (
    <StyledSection smaller={smaller}>
        {extraSectionContent}
        <Header>{title}</Header>
        {body}
    </StyledSection>
);

export default Section;