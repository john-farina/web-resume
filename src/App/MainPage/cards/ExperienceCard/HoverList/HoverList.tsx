import { useState } from "react";
import './HoverList.scss';

interface Props {
    position: string;
    line: string;
}

const HoverList = ({ position, line }: Props) => {
    let [popUpStyle, setPopUpStyle] = useState({
        opacity: "0%",
    });
    let [className, setClassName] = useState(" ");
    let string = "`${yourCompany.name}`";

    return (
        <li>
            <div className="hoverList">
                <div style={popUpStyle} className="alertPopUp">
                    <p className="cardText">
                        ERROR: Line {line}:28: 'yourCompany' is not defined <br />
                        Please contact WEBSITE ADMIN to resolve issues.
                    </p>
                </div>

                <p className="paragraph">
                    {position} @{" "}
                    <span
                        onMouseEnter={() => {
                            setPopUpStyle({ opacity: "100%" });
                            //   gaEventTracker(`CodeJokeHOV: ${position}`);
                            setClassName(" redColor");
                        }}
                        onMouseLeave={() => {
                            setPopUpStyle({ opacity: "0%" });

                            setClassName("");
                        }}
                        className={`companyNameText ${className}`}
                    >
                        {string}
                    </span>{" "}
                    -{" "}
                    <span
                        onMouseEnter={() => {
                            setPopUpStyle({ opacity: "100%" });
                            //   gaEventTracker("Coding Joke Hover");
                            setClassName(" redColor");
                        }}
                        onMouseLeave={() => {
                            setPopUpStyle({ opacity: "0%" });

                            setClassName("");
                        }}
                        className={`companyNameText secondName ` + className}
                    >
                        {"`${yourCompany.website}`"}
                    </span>
                </p>
            </div>
        </li>
    );
}

export default HoverList;
