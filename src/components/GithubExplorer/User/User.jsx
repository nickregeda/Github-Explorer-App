import s from './User.module.css'
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={s.container}>
            <NavLink className={s.link} to={`/profile/${props.info.id}`}>
                <img className={s.avatar} src={props.info.avatar_url} alt=""/>
                <div className={s.login}>{props.info.login}</div>
            </NavLink>
        </div>
    );
}

export default User;