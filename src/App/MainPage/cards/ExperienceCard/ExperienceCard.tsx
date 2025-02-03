import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import CompanyLink from "./CompanyLink";
import HoverList from "./HoverList";

function ExperienceCard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <CardContainer title="Experience">
      <ul>
        {!isMobile && (
          <HoverList position="Software Engineer" line="34" />
        )}

        <CompanyLink
          title="Freelance Web Developer"
          link="https://rubyonrails.org/world/2024"
          visibleLink="rubyonrails.org"
          company="rails"
          isMobile={isMobile}
        />

        <CompanyLink
          title="Software Engineer I"
          link="https://www.reprise.com/"
          visibleLink="reprise.com"
          company="reprise"
          isMobile={isMobile}
        />

        <CompanyLink
          title="Founding Junior Engineer"
          link="https://www.linkedin.com/company/swivvel-hq/"
          visibleLink="swivvel.io"
          company="swivvel"
          isMobile={isMobile}
        />


        <CompanyLink
          title="Software Engineer Intern"
          link="https://bedroomproducer.io"
          visibleLink="bedroomproducer.io"
          company="bedroomProducer"
          isMobile={isMobile}
        />
      </ul>
    </CardContainer>
  );
}

export default ExperienceCard;