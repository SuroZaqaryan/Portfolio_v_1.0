import React from 'react';
import {AuthUserThunk, setProgressCount} from "../Redux/auth-reducer";
import {connect} from "react-redux";
import Content from "./Content";


class ContentContainer extends React.Component {

    componentDidMount() {
        this.props.AuthUserThunk();
    }

    render() {
        return (
            <Content {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    progressCount: state.auth.progressCount,
})

export default connect(mapStateToProps, {AuthUserThunk, setProgressCount})(ContentContainer);