import { socialNetworkProject, toDoProject } from '../../accets/constants/constans'
import Project from './Project/Project'
import s from './Projects.module.scss'

const Projects = () => {
    return (
        <div className={s.projectBlockStyle}>
            <div id='Projects' className={s.up}></div>
            <h2 className={s.projectName}>PROJECTS</h2>
            <div className={s.projectContainer}>
                <Project props={toDoProject}/>
                <Project props={socialNetworkProject}/>
            </div>
        </div>
    )
}

export default Projects