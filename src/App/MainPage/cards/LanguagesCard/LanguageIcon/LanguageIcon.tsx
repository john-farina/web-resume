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
    const [popUpStyle, setPopUpStyle] = useState({ display: "none", marginTop: "0px" });
    const [popUpClass, setPopUpClass] = useState(" ");

    function onMouseEnter() {
        setPopUpStyle({ display: "flex", marginTop: "10px" });
        setPopUpClass(" popUpAnimate");
    }

    function onMouseExit() {
        setPopUpClass(" popDownAnimate");
        // setPopUpStyle({ display: "none" });
        setTimeout(() => {
            setPopUpStyle({ display: "none", marginTop: "0px" });
        }, 190);
    }

    function onMouseDown() {
        setPopUpStyle({ display: "flex", marginTop: "10px" });
    }

    if (iconClass !== null) {
        return (
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseExit}
                className="icon"
            >
                <div style={popUpStyle} className={"popUpMenu" + popUpClass}>
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
                onMouseLeave={onMouseExit}
                onMouseEnter={onMouseEnter}
            >
                <div style={popUpStyle} className={"popUpMenu" + popUpClass}>
                    <div className="popUpTri"></div>
                    <h4 className="popUpText">{placeholder}</h4>
                </div>
                {image && <img src={image} alt={alt} className={"all-icons " + classes} />}
            </div>
        );
    }
}


export default LanguageIcon;
