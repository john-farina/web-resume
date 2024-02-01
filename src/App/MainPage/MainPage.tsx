import './MainPage.scss';
import TheLine from './TheLine';
import { 
    ExperienceCard, 
    ExtrasCard, 
    IntroduceCard, 
    LanguagesCard, 
    ProjectsCard 
} from './cards';

function MainPage() {
    return (
        <div id="card-container">
            <IntroduceCard />
            <TheLine />
            <ProjectsCard />
            <TheLine />
            <ExtrasCard />
            <TheLine />
            <ExperienceCard />
            <TheLine />
            <LanguagesCard />
        </div>
    );
}

export default MainPage;