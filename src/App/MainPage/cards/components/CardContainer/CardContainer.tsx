import { ReactElement } from "react";
import "./CardContainer.scss";

interface Props {
    children: ReactElement;
}

function CardContainer({ children }: Props) {
    return (
        <div className="cardContainer">
            <div className="cardContents">
                {children}
            </div>
        </div>
    )
}

export default CardContainer;