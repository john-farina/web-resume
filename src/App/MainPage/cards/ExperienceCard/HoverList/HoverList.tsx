import { useState } from "react";
import './HoverList.scss';

interface Props {
    position: string;
    line: string;
}

const HoverList = ({ position, line }: Props) => {
    let [className, setClassName] = useState(" ");

    const onMouseOver = () => {
        setClassName("open");
    }

    const onMouseLeave = () => {
        setClassName("");
    }

    return (
        <li>
            <div className={`hoverList ${className}`}>
                <div
                    className="alertPopUp"
                    onMouseEnter={onMouseOver}
                    onMouseLeave={onMouseLeave}
                >
                    <p className="cardText">
                        ERROR: Line {line}:28: 'yourCompany' is not defined <br />
                        Please contact <a href="mailto:johnfarina8@gmail.com" className="emailBtn">WEBSITE ADMIN</a> to resolve issues.
                    </p>
                    <div className="bridge" />
                </div>

                <p className="paragraph">
                    {position} @{" "}
                    <span
                        onMouseEnter={onMouseOver}
                        onMouseLeave={onMouseLeave}
                        className={`companyNameText ${className}`}
                    >
                        {"`${yourCompany.name} - ${yourCompany.website}`"}
                    </span>
                </p>
            </div>
        </li>
    );
}

export default HoverList;
