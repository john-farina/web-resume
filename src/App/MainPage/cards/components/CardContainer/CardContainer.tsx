import { ReactElement } from "react";
import "./CardContainer.scss";

interface Props {
    title?: string | null;
    children: ReactElement;
}

function CardContainer({ title = null, children }: Props) {
    return (
        <div className="cardContainer">
            <div className="cardContents">
                {title && <h2 className="header2">{title}:</h2>}
                {children}
            </div>
        </div>
    )
}

export default CardContainer;