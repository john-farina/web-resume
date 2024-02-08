import { useState } from 'react';
import './CompanyLink.scss';

interface Props {
    title: string;
    visibleLink: string;
    link: string;
    company: `swivvel` | `bedroomProducer`;
}

const CompanyLink = ({ title, visibleLink, link, company }: Props) => {
    const [hoverOverBtn, setHoverOverBtn] = useState(false);

    let companyName;
    if (company === "swivvel") {
        companyName = "Swivvel";
    } else if (company === "bedroomProducer") {
        companyName = "Bedroom Producer";
    } else {
        const exhaustiveCheck: never = company;
        return exhaustiveCheck;
    }

    const atSignClass = hoverOverBtn ? `hovering` : ``;


    return (
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
    )
}

export default CompanyLink;