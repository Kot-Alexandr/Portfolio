import { cssSkill, dockerSkill, figmaSkill, githubSkill, htmlSkill, jsSkill, materialuiSkill, nodejsSkill, reactSkill, reduxSkill, scssSkill, softskillsSkill, testsSkill, typescriptSkill, webpackSkill } from '../../accets/constants/constans'
import Skill from './Skill/Skill'
import s from './Skills.module.scss'


const Skills = () => {
    return (
        <div className={s.skillsBlockStyle}>
            <div id='Skills' className={s.up}></div>
            <h2 className={s.skillsName}>SKILLS</h2>
            <div className={s.skillsSkillsStyle}>
                <Skill props={reactSkill} />
                <Skill props={githubSkill} />
                <Skill props={cssSkill} />
                <Skill props={htmlSkill} />
                <Skill props={dockerSkill} />
                <Skill props={figmaSkill} />
                <Skill props={reduxSkill} />
                <Skill props={materialuiSkill} />
                <Skill props={webpackSkill} />
                <Skill props={scssSkill} />
                <Skill props={testsSkill} />
                <Skill props={softskillsSkill} />
                <Skill props={jsSkill} />
                <Skill props={nodejsSkill} />
                <Skill props={typescriptSkill} />
            </div>
        </div>
    )
}

export default Skills