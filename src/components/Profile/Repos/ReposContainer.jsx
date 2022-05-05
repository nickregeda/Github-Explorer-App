import React from "react";
import {connect} from "react-redux";
import {getUserRepos, setReposCurrentPage} from "../../../redux/ProfileReducer";
import Repos from "./Repos";

class ReposContainer extends React.Component {
    componentDidMount() {
        this.props.setReposCurrentPage(1)
        this.props.getUserRepos(this.props.login, this.props.repos_page_size, 1)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.login != this.props.login) {
            this.componentDidMount()
        }
    }

    render() {
        return (
            <Repos {...this.props}/>
        )
    }
}

let mapSateToProps = (state) => {
    return {
        login: state.ProfileReducer.profile.login,
        user_repos: state.ProfileReducer.user_repos,

        repos_total_count: state.ProfileReducer.repos_total_count,
        repos_current_page: state.ProfileReducer.repos_current_page,
        repos_page_size: state.ProfileReducer.repos_page_size,
    }
}

export default connect(mapSateToProps, {getUserRepos, setReposCurrentPage})(ReposContainer);