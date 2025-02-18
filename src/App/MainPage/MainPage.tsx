import { TheLine } from '../components';
import Header from './Header';
import './MainPage.scss';
import {
    ExperienceCard,
    InkCard,
    IntroduceCard,
    LanguagesCard,
    OtherSkillsCard,
    ProjectsCard,
    ReleasedAppsCard
} from './cards';
import useHashPageNavigation from './useHashPageNavigation';

function MainPage() {
    useHashPageNavigation();

    return (
        <div className="card-container">
            <Header />
            <IntroduceCard />
            <TheLine />
            <InkCard />
            <TheLine />
            <ReleasedAppsCard />
            <TheLine />
            <ExperienceCard />
            <TheLine />
            <ProjectsCard />
            <TheLine />
            <LanguagesCard />
            <OtherSkillsCard />
        </div>
    );
}

export default MainPage;