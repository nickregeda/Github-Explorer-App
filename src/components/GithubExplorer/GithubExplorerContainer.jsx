import GithubExplorer from "./GithubExplorer";
import {connect} from "react-redux";
import {getUsers, setUsersCurrentPage} from "../../redux/UsersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.UsersReducer.users,
        last_seen_users: state.UsersReducer.last_seen_users,

        users_current_page: state.UsersReducer.users_current_page,
        users_total_count: state.UsersReducer.users_total_count,
        users_page_size: state.UsersReducer.users_page_size,
    }
}

export default connect(mapStateToProps, {getUsers, setUsersCurrentPage})(GithubExplorer)