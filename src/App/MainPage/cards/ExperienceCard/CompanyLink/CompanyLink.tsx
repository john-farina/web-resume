import { useState } from 'react';
import './CompanyLink.scss';

interface Props {
    title: string;
    visibleLink: string;
    link: string;
    company: `bedroomProducer` | `swivvel` | `rails` | `reprise`;
    isMobile: boolean;
}

const CompanyLink = ({ title, visibleLink, link, company, isMobile }: Props) => {
    const [hoverOverBtn, setHoverOverBtn] = useState(false);

    let companyName;
    if (company === "swivvel") {
        companyName = "Swivvel";
    } else if (company === "bedroomProducer") {
        companyName = "Bedroom Producer";
    } else if (company === "rails") {
        companyName = "Rails Foundation";
    } else if (company === "reprise") {
        companyName = "Reprise";
    } else {
        const exhaustiveCheck: never = company;
        return exhaustiveCheck;
    }

    const atSignClass = hoverOverBtn ? `hovering` : ``;

    return (
        <li className="companyList">
            {isMobile ? (
                <p className="paragraph">
                    {title} {" "} <span className={`atSign ${atSignClass} ${company}`}>@</span> {" "}
                    <a
                        className={`listLink ${company}`}
                        onMouseEnter={() => setHoverOverBtn(true)}
                        onMouseLeave={() => setHoverOverBtn(false)}
                        target="_blank"
                        rel="noreferrer"
                        href={link}
                    >
                        {companyName}
                    </a>
                </p>
            ) : (
                <p className="paragraph">
                    {title} <span className={`atSign ${atSignClass} ${company}`}>@</span> {companyName} -{" "}
                    <a
                        className={`listLink ${company}`}
                        onMouseEnter={() => setHoverOverBtn(true)}
                        onMouseLeave={() => setHoverOverBtn(false)}
                        target="_blank"
                        rel="noreferrer"
                        href={link}
                    >
                        {visibleLink}
                    </a>
                </p>
            )}
        </li>
    );
}

export default CompanyLink;