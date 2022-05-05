import s from './GithubExplorer.module.css'
import {Form, Field, Formik, ErrorMessage} from "formik";
import githubExplorerValidationSchema from "../../validationForms/GithubExplorerFormSchema";
import User from "./User/User";
import {Pagination} from "@mui/material";
import {useState} from "react";

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
    let [query, setQuery] = useState();
    let [no_user_flag, setNoUserFlag] = useState();

    let usersElements = props.users.map(u =>
        <User key={u.id} info={u}/>)

    let lastSeenUsersElements = props.last_seen_users.map(u =>
        <User key={u.id} info={u}/>)

    let onSubmit = (values) => {
        setNoUserFlag(false);
        setQuery(values.query)
        props.setUsersCurrentPage(1)
        props.getUsers(values.query, props.users_page_size, 1).then(
            response => {
                if (response.length === 0) {
                    setNoUserFlag(true);
                }
            }
        )
    }

    let onChange = (num) => {
        props.setUsersCurrentPage(num);
        props.getUsers(query, props.users_page_size, num)
    }

    let total_count = props.users_total_count > 1000 ? 1000 : props.users_total_count;
    let pages_count = Math.ceil(total_count / props.users_page_size) // 1000 for github api

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
            <div className={s.pagination_container}>
                <Pagination
                    sx={{}}
                    count={pages_count}
                    page={props.users_current_page}
                    onChange={(e, num) => {
                        onChange(num)
                    }}
                />
            </div>
            {no_user_flag ? <div className={s.no_results_response}>No results</div> : <div className={s.users_list}>
                {usersElements}
            </div>}
            {props.last_seen_users.length > 0 &&
                <>
                    <div className={s.last_seen_users_label}>Last seen users</div>
                    <div className={s.last_seen_users}>
                        {lastSeenUsersElements}
                    </div>
                </>
            }
        </div>
    )
}

export default GithubExplorer;