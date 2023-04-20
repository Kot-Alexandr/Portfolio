import { useFormik } from 'formik';
import s from './Contacts.module.scss';
import axios from 'axios';


type ErrorsType = {
    name?: string
    email?: string
    message?: string
}

const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: values => {
            // setLoading(true)
            console.log(values)
            axios.post('https://rrr-kot-alexandr.vercel.app/sendMessage', {
                name: values.name,
                email: values.email,
                message: values.message,
            })
            formik.resetForm()
        },
        validate: values => {
            const errors: ErrorsType = { }
            if (!values.name) {
                errors.name = 'Required';
            } else if (values.name.length > 15) {
                errors.name = 'Must be 15 characters or less';
            }

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.message) {
                errors.message = 'Required';
            } else if (values.message.length > 500) {
                errors.message = 'Must be 500 characters or less';
            }

            return errors;
        }

    });

    return (
        <div className={s.contactsStyle}>
            <div id='Contacts' className={s.up}></div>
            <div className={s.contactsBlock}>
                <h3 className={s.mainName}>CONTACTS</h3>
                <form className={s.formContactsBlock} onSubmit={formik.handleSubmit}>

                    {formik.touched.name && formik.errors.name && <span className={s.errorSpanStyle}>{formik.errors.name}</span>}

                    <input className={formik.touched.name && formik.errors.name ? s.inputStyleError : s.inputStyle} name='name' id='name' type='name' value={formik.values.name} onChange={formik.handleChange}
                        placeholder={'Your Name'}></input>

                    {formik.touched.email && formik.errors.email && <span className={s.errorSpanStyle}>{formik.errors.email}</span>}
                    <input className={formik.touched.name && formik.errors.email ? s.inputStyleError : s.inputStyle} name='email' id='email' type='email' value={formik.values.email} onChange={formik.handleChange}
                        placeholder={'Your Email'}></input>

                    {formik.touched.message && formik.errors.message && <span className={s.errorSpanStyle}>{formik.errors.message}</span>}
                    <textarea className={formik.touched.name && formik.errors.message ? s.textAreaErrorStyle : s.textAreaStyle} name='message' id='message' value={formik.values.message} onChange={formik.handleChange}
                        placeholder={'Leave your message'}
                    ></textarea>

                    <button className={s.buttonStyle} type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts


