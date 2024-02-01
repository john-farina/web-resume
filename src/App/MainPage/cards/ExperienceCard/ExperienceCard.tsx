import CompanyLink from "./CompanyLink";
import HoverList from "./HoverList";

function ExperienceCard() {
  return (
    <div id="card3" className="card">
      <div className="cardContents">
        <h2 className="header2">Experience:</h2>

        <ul>
          <HoverList position="Full Stack" line="34" />

          <li>
            <CompanyLink
              title="Jr FullStack @ Swivvel"
              link="https://swivvel.io"
              visibleLink="swivvel.io"
            //   trackEvent={() => gaEventTracker(`SwivvelLink`)}
            />
          </li>

          <li>
            <CompanyLink
              title="FullStack Internship @ Bedroom Producer"
              link="https://bedroomproducer.io"
              visibleLink="bedroomproducer.io"
            //   trackEvent={() => gaEventTracker(`BedroomProducerLink`)}
            />
          </li>

        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;