import './ReleasedAppsCard.scss';
import { githubIcon, fidgetPro, moreWishes } from '../../../../static';
import { CardContainer } from '../components';

// make the spacing more accurate to figma, the spacing is centered but it shouldnt be.

function ReleasedAppsCard() {
    return (
        <CardContainer title="Released Apps">
            <div className="releasedAppCard" onMouseDown={
                () => window.open('https://apps.apple.com/us/app/morewishes/id6450796262', '_blank')
            }>
                <div className="releasedApp">
                    <img src={moreWishes} alt="app icon 1" className="appIcon" />
                    <div className="appInfo">
                        <p className="title">moreWishes (iOS)</p>
                        <div className="description">An iOS app made to alert you at 10:10, 11:11, & 12:12.</div>
                    </div>
                </div>

                <div className="releasedApp" onMouseDown={
                    () => window.open('https://apps.apple.com/us/app/fidget-pro/id6501970788', '_blank')
                }>
                    <img src={fidgetPro} alt="app icon 1" className="appIcon circle" />
                    <div className="appInfo">
                        <p className="title">FidgetPro (VisionOS)</p>
                        <div className="description">A bubble popping Vision Pro app, made just to allow fidgeting using the Vision Pro.</div>
                    </div>
                </div>
            </div>
        </CardContainer>
    );
}

export default ReleasedAppsCard;