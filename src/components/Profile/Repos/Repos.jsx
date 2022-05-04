import s from './Repos.module.css'

export const Repo = (props) => {
    return (
        <div className={s.repo_item}>
            <div>{props.info.name}</div>
            <div className={s.repo_language}>{props.info.language}</div>
        </div>
    );
}

const Repos = (props) => {
    let reposElements = props.users_repos.map(ur => <Repo info={ur}/>)
    return (
        <div className={s.container}>
            <div className={s.label}>Repos</div>
            <div className={s.repos_container}>
                {reposElements}
            </div>
        </div>
    )
}

export default Repos;