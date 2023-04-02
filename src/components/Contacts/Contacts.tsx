import s from './Contacts.module.scss'

const Contacts = () => {
    return (
        <div className={s.contactsStyle}>
            <div id='Contacts' className={s.up}></div>
            <div className={s.contactsBlock}>
                <h3 className={s.mainName}>CONTACTS</h3>
                <form className={s.formContactsBlock}>
                    <input className={s.inputTopStyle} value={'Your name'}></input>
                    <input className={s.inputMiddleStyle} value={'Your email'}></input>
                    <textarea className={s.textAreaStyle} value={'Leave your message'}></textarea>
                </form>
                <button className={s.buttonStyle}>Submit</button>
            </div>
        </div>
    )
}

export default Contacts