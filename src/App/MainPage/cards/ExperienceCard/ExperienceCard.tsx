import CardContainer from "../components/CardContainer";
import CompanyLink from "./CompanyLink";
import HoverList from "./HoverList";

function ExperienceCard() {
  return (
    <CardContainer title="Experience">
      <ul>
        <li>
          <CompanyLink
            title="Jr Full-stack"
            link="https://swivvel.io"
            visibleLink="swivvel.io"
            company="swivvel"
          />
        </li>

        <li>
          <CompanyLink
            title="Full-stack Internship"
            link="https://bedroomproducer.io"
            visibleLink="bedroomproducer.io"
            company="bedroomProducer"
          />
        </li>

        <HoverList position="Full-stack" line="34" />
      </ul>
    </CardContainer>
  );
}

export default ExperienceCard;