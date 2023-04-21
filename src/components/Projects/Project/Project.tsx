import s from './Project.module.scss'

type ProjectPropsType = {
    url: string
    title: string
    text: string
    urlWeb: string
}

const Project = (props: { props: ProjectPropsType }) => {
    return (
        <div className={s.projectStyle}>
            <div className={s.projectDivImg} style={{backgroundImage: `url(${props.props.url})`}} >
               <a href={props.props.urlWeb} target="_blank" rel="noreferrer"><button className={s.buttonProjectStyle}>Look</button></a>
            </div>
            <div className={s.projectDiscription}>
                <div className={s.aboutProjectName}>{props.props.title}</div>
                <div className={s.aboutProject}>{props.props.text}</div>
            </div>
        </div>
    )
}

export default Project