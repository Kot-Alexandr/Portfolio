import s from './Skill.module.scss'

type SkillPropsType = {
    url: string
    title: string
    text: string
}

const Skill = (props: { props: SkillPropsType }) => {
        return (
        <div className={s.skillStyle}>
            <div className={s.imgContainer}><img className={s.skillImg} src={props.props.url} /></div>
            <h3 className={s.h3Style}>{props.props.title}</h3>
            <span className={s.spanStyle}>{props.props.text}</span>
        </div>
    )
}

export default Skill