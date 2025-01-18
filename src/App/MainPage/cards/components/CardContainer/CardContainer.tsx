import { ReactElement } from "react";
import "./CardContainer.scss";

interface Props {
    title?: string | null;
    children: ReactElement;
    pixelFont?: boolean;
}

function CardContainer({ title = null, children, pixelFont }: Props) {
    return (
        <div className={"cardContainer" + (pixelFont ? " pixelFont" : "")}>
            <div className="cardContents">
                {title && <h2 className="header2">{title}:</h2>}
                {children}
            </div>
        </div>
    )
}

export default CardContainer;