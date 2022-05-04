import GithubExplorer from "./GithubExplorer";
import {connect} from "react-redux";
import {getUsers} from "../../redux/GithubExplorerReducer";

let mapStateToProps = (state) => {
    return {
        users: state.GithubExplorerReducer.users,
        users_repos: state.GithubExplorerReducer.users_repos,
        last_seen_users: state.GithubExplorerReducer.last_seen_users,
    }
}

export default connect(mapStateToProps, {getUsers})(GithubExplorer)