import s from './Repos.module.css'
import {Pagination} from "@mui/material";
import {useState} from "react";

export const Repo = (props) => {
    return (
        <div className={s.repo_item}>
            <div>{props.info.name}</div>
            <div className={s.repo_language}>{props.info.language}</div>
        </div>
    );
}

const Repos = (props) => {

    let reposElements = props.user_repos.map(ur => <Repo key={ur.id} info={ur}/>)

    let onChange = (num) => {
        props.setReposCurrentPage(num)
        props.getUserRepos(props.login, props.repos_page_size, num);
    }

    let pages_count = Math.ceil(props.repos_total_count / props.repos_page_size);

    return (
        <div className={s.container}>
            <div className={s.label}>Repos</div>
            <div className={s.pagination_container}>
                <Pagination
                    page={props.repos_current_page}
                    count={pages_count}
                    onChange={(e, num) => {
                        onChange(num)
                    }}
                />
            </div>
            {props.user_repos.length !== 0 ?
                <div className={s.repos_container}>
                    {reposElements}
                </div>
                :
                <div>No repos</div>
            }
        </div>
    )
}

export default Repos;