import { TheLine } from '../components';
import Header from './Header';
import './MainPage.scss';
import { 
    ExperienceCard, 
    ExtrasCard, 
    IntroduceCard, 
    LanguagesCard, 
    OtherSkillsCard, 
    ProjectsCard 
} from './cards';

function MainPage() {
    return (
        <div className="card-container">
            <Header />
            <IntroduceCard />
            <TheLine />
            <ProjectsCard />
            <TheLine />
            <ExtrasCard />
            <TheLine />
            <ExperienceCard />
            <TheLine />
            <LanguagesCard />
            <OtherSkillsCard />
        </div>
    );
}

export default MainPage;