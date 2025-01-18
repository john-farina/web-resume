import './ReleasedAppsCard.scss';
import { fidgetPro, moreWishes } from '../../../../static';
import { CardContainer } from '../components';

// make the spacing more accurate to figma, the spacing is centered but it shouldnt be.

function ReleasedAppsCard() {
    return (
        <CardContainer title="Released Apps">
            <div
                className="releasedAppCard"

            >
                <div
                    className="releasedApp"
                    onMouseDown={
                        () => window.open('https://apps.apple.com/us/app/morewishes/id6450796262', '_blank')
                    }
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            window.open('https://apps.apple.com/us/app/morewishes/id6450796262', '_blank')
                        }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open moreWishes in new tab`}
                >
                    <div className="left">
                        <img src={moreWishes} alt="app icon 1" className="appIcon" />
                    </div>
                    <div className="appInfo">
                        <p className="title">moreWishes (iOS)</p>
                        <div className="description">Wishes app made to alert you at 10:10, 11:11, & 12:12.</div>
                    </div>
                </div>

                <div
                    className="releasedApp"
                    onMouseDown={
                        () => window.open('https://apps.apple.com/us/app/fidget-pro/id6501970788', '_blank')
                    }
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            window.open('https://apps.apple.com/us/app/fidget-pro/id6501970788', '_blank')
                        }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open Fidget Pro in new tab`}
                >
                    <div className="left">
                        <img src={fidgetPro} alt="app icon 1" className="appIcon circle" />
                    </div>
                    <div className="appInfo">
                        <p className="title">FidgetPro (VisionOS)</p>
                        <div className="description">Bubble popping Vision Pro app</div>
                    </div>
                </div>
            </div>
        </CardContainer>
    );
}

export default ReleasedAppsCard;