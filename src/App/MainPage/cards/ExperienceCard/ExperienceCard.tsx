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
            title="Jr FullStack @ Swivvel"
            link="https://swivvel.io"
            visibleLink="swivvel.io"
          />
        </li>

        <li>
          <CompanyLink
            title="FullStack Internship @ Bedroom Producer"
            link="https://bedroomproducer.io"
            visibleLink="bedroomproducer.io"
          />
        </li>
      </ul>
    </CardContainer>
  );
}

export default ExperienceCard;