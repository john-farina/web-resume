import './MainPage.scss';
import TheLine from './TheLine';
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