import { useState } from "react";
import './LanguageIcon.scss';

interface Props {
    image: string | null;
    classes?: string;
    alt?: string;
    iconClass: string | null;
    placeholder: string;
}

function LanguageIcon({ image, classes = ``, alt = ``, iconClass, placeholder }: Props) {
    if (iconClass !== null) {
        return (
            <div
                className="icon"
            >
                <div className={"popUpMenu"}>
                    <div className="popUpTri"></div>
                    <h4 className="popUpText">{placeholder}</h4>
                </div>
                <i className={"all-icons " + iconClass}></i>
            </div>
        );
    } else {
        return (
            <div
                className="icon"
            >
                <div className={"popUpMenu"}>
                    <div className="popUpTri"></div>
                    <h4 className="popUpText">{placeholder}</h4>
                </div>
                {image && <img src={image} alt={alt} className={"all-icons " + classes} />}
            </div>
        );
    }
}


export default LanguageIcon;
