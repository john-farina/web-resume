import CardContainer from "../components/CardContainer";
import CompanyLink from "./CompanyLink";

function ExperienceCard() {
  return (
    <CardContainer title="Experience">
      <ul>
        {/* Add when looking for a job */}
        {/* <HoverList position="Software Engineer" line="34" /> */}

        <CompanyLink
          title="Software Engineer I"
          link="https://www.reprise.com/"
          visibleLink="reprise.com"
          company="reprise"
        />

        <CompanyLink
          title="Freelance Web Developer"
          link="https://rubyonrails.org/world/2024"
          visibleLink="rubyonrails.org"
          company="rails"
        />

        <CompanyLink
          title="Founding Junior Engineer"
          link="https://swivvel.io"
          visibleLink="swivvel.io"
          company="swivvel"
        />


        <CompanyLink
          title="Software Engineer Intern"
          link="https://bedroomproducer.io"
          visibleLink="bedroomproducer.io"
          company="bedroomProducer"
        />
      </ul>
    </CardContainer>
  );
}

export default ExperienceCard;