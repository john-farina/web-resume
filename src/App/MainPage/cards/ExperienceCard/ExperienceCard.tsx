import CardContainer from "../components/CardContainer";
import CompanyLink from "./CompanyLink";
import HoverList from "./HoverList";

function ExperienceCard() {
  return (
    <CardContainer title="Experience">
      <ul>
        <HoverList position="Software Engineer" line="34" />
        
        <li>
          <CompanyLink
            title="Freelance Web Developer"
            link="https://rubyonrails.org/"
            visibleLink="rubyonrails.org"
            company="rails"
          />
        </li>

        <li>
          <CompanyLink
            title="Founding Junior Engineer"
            link="https://swivvel.io"
            visibleLink="swivvel.io"
            company="swivvel"
          />
        </li>

        <li>
          <CompanyLink
            title="Software Engineer Intern"
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