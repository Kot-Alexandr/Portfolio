import s from './Loading.module.scss'

const Loading = () =>{
    return (
        <div className={s.loading}>
            <img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif' alt="" />
        </div>
    ) 
}

export default Loading