import { TheLine } from '../components';
import Header from './Header';
import './MainPage.scss';
import {
    ExperienceCard,
    IntroduceCard,
    LanguagesCard,
    OtherSkillsCard,
    ProjectsCard
} from './cards';
import useHashPageNavigation from './useHashPageNavigation';

function MainPage() {
    useHashPageNavigation();

    return (
        <div className="card-container">
            <Header />
            <IntroduceCard />
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