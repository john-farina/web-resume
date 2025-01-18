import './MinimizedProject.scss';

interface Props {
    title: string;
    subtext: string;
    liveDemoLink: string;
    expandProject: () => void;
}

function MinimizedProject({ title, subtext, liveDemoLink, expandProject }: Props) {
    return (
        <div className="minimizedCont">
            <div
                className="left"
                onClick={() => {
                    window.open(liveDemoLink, "_blank");
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        window.open(liveDemoLink, "_blank");
                    }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${title} in new tab`}
            >
                <p>{title}</p>
            </div>

            <div
                className="right"
                onClick={() => {
                    expandProject();
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        expandProject();
                    }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Expand details for ${title}`}
            >
                <p>{subtext}</p>
            </div>
        </div>
    )
}
export default MinimizedProject;