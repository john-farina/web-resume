import CardContainer from "../components/CardContainer";
import CompanyLink from "./CompanyLink";
import HoverList from "./HoverList";

function ExperienceCard() {
  return (
    <CardContainer title="Experience">
      <ul>
        <HoverList position="Full Stack" line="34" />

        <li>
          <CompanyLink
            title="Jr FullStack"
            link="https://swivvel.io"
            visibleLink="swivvel.io"
            company="swivvel"
          />
        </li>

        <li>
          <CompanyLink
            title="FullStack Internship"
            link="https://bedroomproducer.io"
            visibleLink="bedroomproducer.io"
            company="bedroomProducer"
          />
        </li>
      </ul>
    </CardContainer>
  );
}

export default ExperienceCard;