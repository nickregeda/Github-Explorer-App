import ReposContainer from "./Repos/ReposContainer";
import s from './Profile.module.css'

const Profile = (props) => {
    if (!props.profile) {
        return <div>loading...</div>
    }
    return (
        <div className={s.container}>
            <div className={s.user_block}>
                <div className={s.avatar_n_login_container}>
                    <img className={s.avatar} style={{width: '150px'}} src={props.profile.avatar_url} alt=""/>
                    <div className={s.login}>{props.profile.login}</div>
                </div>
                <div className={s.user_info_container}>
                    <div className={s.name}>{props.profile.name}</div>
                    <div className={s.repos}>public repos: {props.profile.public_repos}</div>
                    <div className={s.followers}>followers: {props.profile.followers}</div>
                    <div className={s.following}>following: {props.profile.following}</div>
                </div>
            </div>
            <ReposContainer/>
        </div>
    )
}

export default Profile;