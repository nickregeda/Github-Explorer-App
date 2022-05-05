import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "redux";
import withRouter from "../../hoc/withRouter";
import {getProfile} from "../../redux/ProfileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.params.userId;
        this.props.getProfile(id);
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.ProfileReducer.profile
    }
}


export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter
)
(ProfileContainer);