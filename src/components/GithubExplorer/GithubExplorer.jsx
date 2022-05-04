import s from './GithubExplorer.module.css'
import {Form, Field, Formik, ErrorMessage} from "formik";
import githubExplorerValidationSchema from "../../validationForms/GithubExplorerFormSchema";
import User from "./User/User";
import {NavLink} from "react-router-dom";

const GithubExplorerForm = (props) => {
    return (
        <Form className={s.form}>
            <label className={s.query_label} htmlFor="query">Github Explorer App</label>
            <Field
                className={s.field}
                name='query'
                type='text'
                placeholder='Enter username...'
                autoComplete='off'/>
            <button className={s.button}>Search</button>
            <ErrorMessage className={s.error_mes} component={'div'} name='query'/>
        </Form>
    )
}

const GithubExplorer = (props) => {
    let usersElements = props.users.map(u =>
        <User key={u.id} info={u}/>)


    let onSubmit = (values) => {
        props.getUsers(values.query)
    }

    return (
        <div className={s.container}>
            <Formik
                initialValues={{query: ''}}
                validationSchema={githubExplorerValidationSchema}
                onSubmit={onSubmit}>
                {({values}) => {
                    return <GithubExplorerForm/>
                }}
            </Formik>
            <div className={s.repos_list}>
                {usersElements}
            </div>
        </div>
    )
}

export default GithubExplorer;