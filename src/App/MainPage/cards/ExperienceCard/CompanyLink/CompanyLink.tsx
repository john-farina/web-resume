import { useState } from 'react';
import './CompanyLink.scss';

interface Props {
    title: string;
    visibleLink: string;
    link: string;
    company: `swivvel` | `bedroomProducer` | `rails`;
}

const CompanyLink = ({ title, visibleLink, link, company }: Props) => {
    const [hoverOverBtn, setHoverOverBtn] = useState(false);

    let companyName;
    if (company === "swivvel") {
        companyName = "Swivvel";
    } else if (company === "bedroomProducer") {
        companyName = "Bedroom Producer";
    } else if (company === "rails") {
        companyName = "Rails Foundation";
    } else {
        const exhaustiveCheck: never = company;
        return exhaustiveCheck;
    }

    const atSignClass = hoverOverBtn ? `hovering` : ``;


    return (
        <li className="companyList">
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
        </li>
    )
}

export default CompanyLink;