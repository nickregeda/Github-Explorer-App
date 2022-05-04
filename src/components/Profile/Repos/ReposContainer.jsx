import React from "react";
import {connect} from "react-redux";
import GithubExplorerReducer, {getUsersRepos} from "../../../redux/GithubExplorerReducer";
import Repos from "./Repos";

class ReposContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersRepos(this.props.login)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.login != this.props.login) {
            this.componentDidMount()
        }
    }

    render() {
        return (
            <Repos users_repos={this.props.users_repos}/>
        )
    }
}

let mapSateToProps = (state) => {
    return {
        login: state.GithubExplorerReducer.profile.login,
        users_repos: state.GithubExplorerReducer.users_repos,
    }
}

export default connect(mapSateToProps, {getUsersRepos})(ReposContainer);